export function SparklineChart({ color }: { color: string }) {
  const points = "0,20 15,15 30,18 45,10 60,14 75,7 90,13 110,9 130,13";

  return (
    <svg width="130" height="40">
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="2"
        points={points}
        strokeLinecap="round"
      />
    </svg>
  );
}
