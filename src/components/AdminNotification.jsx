import React, { useState } from "react";

const AdminNotification = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Example payload
    const notificationPayload = {
      title,
      message,
      timestamp: new Date().toISOString(),
    };

    // Simulate API call (replace with actual API call logic)
    setTimeout(() => {
      console.log("Notification sent:", notificationPayload);
      setSuccessMessage("Notification sent successfully!");
      setTitle(""); // Reset the title field
      setMessage(""); // Reset the message field
    }, 1000);
  };

  return (
    <div className="w-full m-4 sm:w-1/2">
      <h2>Send Notification</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="title"
            style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter notification title"
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="message"
            style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}
          >
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter notification message"
            rows="5"
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "#000",
            color: "#fff",
            padding: "10px 15px",
            fontSize: "16px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Send Notification
        </button>
      </form>

      {successMessage && (
        <p
          style={{
            marginTop: "15px",
            color: "green",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {successMessage}
        </p>
      )}
    </div>
  );
};

export default AdminNotification;
