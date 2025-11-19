import { ArrowLeft } from "lucide-react"
import Container from "../../../components/common/Container"
import Heading from "../../../components/common/Heading"
import { useNavigate } from "react-router-dom"


const AddProduct = () => {
    const naviagte = useNavigate();
    return (
        <Container>
            <div className="flex gap-4">
                <button onClick={()=>naviagte(-1)}>
                    <ArrowLeft />
                </button>
                <Heading value="Add Product" />
            </div>
        </Container>
    )
}

export default AddProduct