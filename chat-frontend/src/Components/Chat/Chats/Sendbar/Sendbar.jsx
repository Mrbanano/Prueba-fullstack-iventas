import './Sendbar.css'

function Sendbar() {
  return (
    <section className="TextToSend">
      <input type="text" name="sendtxt" className="sendtxt" id="sendtxt" />
      <div className="Send">
        <img src="/src/static/icon/send.svg" alt="send" />
      </div>
    </section>
  )
}

export default Sendbar
