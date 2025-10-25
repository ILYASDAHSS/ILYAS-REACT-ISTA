import "./Fotter.css";
function Fotter(){
  return(
    <footer>
      <form>
        <label for="newsletter">Subscribe to our newsletter:</label>
        <input type="email" id="newsletter" name="newsletter" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </form>
      <p>© 2024 ILYAS. All rights reserved.</p>
    </footer>
  )
}
export default Fotter;