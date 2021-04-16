
function Footer() {
    let styles = {
        width: "100%",
        position: "fixed",
        left: "0",
        bottom: "0",
        textAlign: "center"
    }
    return (
        <>
        <footer className="footer mt-auto py-3 bg-dark"  style={styles}>
            <div className="container">
            <span className="text-muted">Place sticky footer content here.</span>
            </div>
        </footer>
        </>
    );
}

export default Footer;
