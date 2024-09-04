export default function ValidationLabel({ children }) {
  return (
    <div>
      <p className="mt-1 bg-red-50 px-1 py-1 text-xs text-red-600">
        {children}
      </p>
    </div>
  );
}
