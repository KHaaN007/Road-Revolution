import { ThemeProvider } from "next-theme";




const DarkToggle = ({ Component, PageProps }) => {
    return (
        <ThemeProvider enableSystem={true} attribute="class">
            <Component{...PageProps} />
        </ThemeProvider>
    );
};

export default DarkToggle;