const NotificationsSideCanvas = ({ isOpen, onClose, notifications }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-64 h-full bg-white border-l border-gray-300 shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
      >
        &times; {/* Close icon */}
      </button>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Notifications</h2>
        {notifications.length === 0 ? (
          <p className="text-gray-500">No new notifications</p>
        ) : (
          <ul>
            {notifications.map((notification, index) => (
              <li key={index} className="mb-2 p-2 border-b border-gray-200">
                <p className="text-sm">{notification.message}</p>
                <span className="text-xs text-gray-500">
                  {notification.timestamp}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NotificationsSideCanvas;
