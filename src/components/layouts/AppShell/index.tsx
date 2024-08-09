import Navbar from "../navbar";

type AppShellProps = {
    children: React.ReactNode;
};

const AppShell = (props: AppShellProps) => {
    const children = props.children;
    return (
        <div className="AppShell">
            <Navbar />
            {children}
        </div>
    );
};

export default AppShell;