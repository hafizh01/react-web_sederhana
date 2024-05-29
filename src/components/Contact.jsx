import '../styles/Contact.css'
import parse from 'html-react-parser'

function Contact(props) {
  return (
    <div id="contact">
        <div class="wrapper">
            <div class="footer">
                {props.contactSection.map((item,index)=>{
                    return(
                        
                        <div class="footer-section">
                        {parse(item.content)}
                        </div>
                    )

                })}

             
                
            </div>
        </div>
    </div>
  )
}

export default Contact
