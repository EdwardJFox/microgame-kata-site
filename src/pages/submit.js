import * as React from "react"
import ReCAPTCHA from "react-google-recaptcha"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "./submit.scss";

const FORMSPARK_ACTION_URL = "https://submit-form.com/U6533O3W";

const KataSubmit = ({ location }) => {
  const [verified, setVerified] = React.useState(false);

  return (
    <Layout location={location} title="Submissions">
      <Seo title="Submit your katas" />
      <h1 style={{ textAlign: "center" }}>Submit your completed Katas</h1>
      <p className="lead">You created something super cool! So submit it here to show it off alongside the Kata itself so other awesome people can see your work.</p>
      <p>All you need to do is upload the source code somewhere like GitHub, along with a quick README telling people a little about the code so they know what they're looking at, and a screenshot so they can see what it looks like. Thats it!</p>

      <form action={FORMSPARK_ACTION_URL} method="POST">
        <input type="hidden" name="_redirect" value={`${location.origin}/submitted`} />
        <input type="hidden" name="_append" value="false" />
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Name" required="" />
        <label htmlFor="repo">Link to repo (GitHub, GitLab, BitBucket etc)</label>
        <input type="url" id="repo" name="repo" placeholder="git.megacorp.com" required="" />
        <ReCAPTCHA
          sitekey="6LewSnggAAAAAEr06iCU81Bv0QV73aRUXQX_D3az"
          onChange={() => setVerified(true)}
          onErrored={() => setVerified(false)}
          onExpired={() => setVerified(false)}
          className="captcha"
        />
        <button type="submit" disabled={!verified}>Submit</button>
      </form>
    </Layout>
  )
}

export default KataSubmit;
