export default function Logo() {
  return (
    <div className="flex items-center gap-0">
      {/* Leaf icon */}
      <div className="text-green-100 text-4xl">🌿</div>

      {/* Text */}
      <div>
        <h1 className="text-4xl font-bold leading-none">
          <span className="text-green-600">Fresh</span>
          <span className="text-yellow-400">Grade</span>
        </h1>

        <p className="text-md text-green-600 leading-none mt-1">
          AI Powered Harvest Verification
        </p>
      </div>
    </div>
  );
}

