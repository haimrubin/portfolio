import ContactInfo from "../component/ContactInfo";
import EmailForm from "../component/EmailForm";
import Card from "../UI/Card";
import Cv from "../UI/Cv";


const Contact = () => {

    return <Card>
        <ContactInfo/>
        <Cv/>
        <EmailForm></EmailForm>
    </Card>
}
export default Contact;