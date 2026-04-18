import "./globals.css";
import CustomCursor from "../components/CustomCursor/CustomCursor";

export const metadata = {
  title: "Ishan Farooq",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
