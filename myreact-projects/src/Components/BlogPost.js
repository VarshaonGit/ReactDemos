import { useParams } from "react-router-dom";



export default function BlogPost() {
    let { id } = useParams();
    return (
        <div style={{ fontSize: "50px" }}>
            Now showing post {id}
        </div>
    );
}