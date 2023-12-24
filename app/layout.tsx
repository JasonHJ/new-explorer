import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { ConfigProvider } from 'antd';
import StyledComponentsRegistry from '@/app/lib/AntdRegistry';
import theme from '@/app/lib/theme/themeConfig';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <StyledComponentsRegistry>
          <ConfigProvider theme={theme}>
            {children}
          </ConfigProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
