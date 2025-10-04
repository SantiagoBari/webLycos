export default function Footer(){
    return(
        <footer style={{ padding: '2rem', borderTop: '1px solid #ccc', paddingTop: '1rem', background: '#164479ff', color: '#fff' }}>
            <p>© {new Date().getFullYear()} Lykos</p>
        </footer>
    );
}