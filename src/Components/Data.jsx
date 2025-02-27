import React, { useState, useEffect } from "react";
import CryptoJS from "crypto-js";
import { openDB } from "idb";

const SECRET_KEY = "my-secret-key";

// IndexedDB setup
const initDB = async () => {
  return openDB("UserDB", 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("users")) {
        db.createObjectStore("users", { keyPath: "id", autoIncrement: true });
      }
    },
  });
};

// Encrypt CNIC
const encryptCNIC = (cnic) => CryptoJS.AES.encrypt(cnic, SECRET_KEY).toString();

// Decrypt CNIC
const decryptCNIC = (encryptedCNIC) => {
  const bytes = CryptoJS.AES.decrypt(encryptedCNIC, SECRET_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
};

function Apped() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [role, setRole] = useState("user");

  useEffect(() => {
    const fetchUsers = async () => {
      const db = await initDB();
      const tx = db.transaction("users", "readonly");
      const store = tx.objectStore("users");
      const allUsers = await store.getAll();
      setUsers(allUsers);
    };

    fetchUsers();
  }, []);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async ({ target }) => {
      const csv = target.result;
      const rows = csv.trim().split("\n");
      const headers = rows[0].split(",").map((h) => h.trim());

      const parsedUsers = rows.slice(1).map((row, index) => {
        const values = row.split(",").map((v) => v.trim());
        const user = headers.reduce((obj, header, i) => {
          obj[header] = values[i] || "";
          return obj;
        }, {});

        user.id = index + 1;
        user.role = Math.random() > 0.5 ? "admin" : "user";
        user.CNIC = user.role === "user" ? encryptCNIC(user.CNIC) : user.CNIC;

        return user;
      });

      const db = await initDB();
      const tx = db.transaction("users", "readwrite");
      const store = tx.objectStore("users");
      parsedUsers.forEach((user) => store.put(user));

      setUsers(parsedUsers);
    };

    reader.readAsText(file);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(filter.toLowerCase()) ||
      user.phone.includes(filter)
  );

  return (
    <div>
      <h1>CSV User Management</h1>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      <br />
      <input
        type="text"
        placeholder="Search by Name or Phone"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Phone</th>
            <th>CNIC</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.phone}</td>
              <td>
                {role === "admin" ? (user.role === "admin" ? user.CNIC : decryptCNIC(user.CNIC)) : user.CNIC}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Apped;

