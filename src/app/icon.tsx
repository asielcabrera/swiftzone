import { ImageResponse } from "next/og";

export const runtime = "edge";
// Add these two exports to fix the build error
export const dynamic = "force-static";
export const revalidate = false;

export function generateImageMetadata() {
  return [
    {
      contentType: "image/png",
      size: { width: 32, height: 32 },
      id: "small",
    },
    {
      contentType: "image/png",
      size: { width: 48, height: 48 },
      id: "medium",
    },
    {
      contentType: "image/png",
      size: { width: 96, height: 96 },
      id: "large",
    },
  ];
}

export default function Icon({ id }: { id: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          background: "#EFF6DF",
          color: "#1A531D",
          borderRadius: "12%",
        }}
      >
        <svg
          width="80%"
          height="80%"
          viewBox="0 0 2000 1128"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path transform="translate(1366,183)" d="m0 0 4 1 20 20 9 11 12 14 11 14 10 12 14 19 13 18 13 19 18 27 16 25 17 29 10 18 13 24 7 12 11 23 12 25 8 18 1 11-3 15-12 36-16 46-16 43-11 28-16 39-10 23-15 33-10 21-10 19-16 30-14 22-8 10-3 2-9-39-19-61-13-41-16-47-8-17-7-8-15-11-22-12-19-9-24-9-30-9-28-7-29-6-3-1-2 5-13 22-28 46-8 13-34 56-12 20-14 24 1 4 14 12 8 7 10 9 14 12 11 9 13 11 10 8 21 16 19 14 20 14 21 16v3l-11 11-7 8-10 11-7 8-15 16-40 40-8 7-28 24-9 7-14 11-16 12-17 12-19 12-11 6-12 6-9-2-15-9-15-10-14-9-17-12-18-14-13-10-15-13-14-12-13-13-8-7-20-20-7-8-14-14v-2h-2v-2h-2v-2h-2l-7-8-9-10-9-9-5-6 2-4 12-9 13-9 18-13 14-10 14-11 18-14 17-14 13-11 14-12 11-10 11-9 6-5-1-5-10-18-10-16-12-20-16-26-13-21-12-20-12-19-16-27-9-15-11 1-31 6-37 10-21 7-26 11-19 10-19 12-10 8-6 9-9 23-24 72-9 29-7 24-10 32-5 18-2 2-10-14-10-17-12-23-12-22-11-22-12-26-18-41-13-32-9-23-9-24-16-45-15-43-9-28-2-11 5-13 23-47 13-26 10-18 13-23 14-24 15-24 9-14 8-12 14-20 8-12 12-16 14-18 10-13 9-11 13-15 9-11 13-14 4-3h5l17 12 22 14 21 13 21 12 29 16 23 12 19 10 30 15 67 31 10 5h3l14-30 16-34 19-40 1-2 6-1h85l14 30 17 36 17 39 1 3 23-11 25-11 16-8 54-26 53-28 24-14 27-16 21-14 18-13z" fill="#1A531D"/>
        </svg>
      </div>
    ),
    {
      width: id === "large" ? 96 : id === "medium" ? 48 : 32,
      height: id === "large" ? 96 : id === "medium" ? 48 : 32,
    }
  );
}
