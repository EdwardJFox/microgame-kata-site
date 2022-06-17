import * as React from "react"
import ReCAPTCHA from "react-google-recaptcha"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "./submit.scss";

const FORMSPARK_ACTION_URL = "https://submit-form.com/U6533O3W";

const KataSubmit = ({ location }) => {
  const [verified, setVerified] = React.useState(false);
  const [name, setName] = React.useState("");
  const [repo, setRepo] = React.useState("");
  const [engine, setEngine] = React.useState("");

  const submitDisabled = !verified || name === "" || repo === "" || engine === "";

  return (
    <Layout location={location} title="Submissions">
      <Seo title="Submit your katas" />
      <h1 style={{ textAlign: "center" }}>Submit your completed Katas</h1>
      <p className="lead">You made something cool! Submit it here to share it alongside the Kata itself so other awesome people can see how you did it, and get inspired.</p>
      <p>All you need to do is upload the source somewhere like GitHub, along with a README telling people a little about the code so they know what they're looking at, and a screenshot to see what it looks like. Thats it! Link to your socials too, so people can check out other cool stuff you do.</p>

      <form action={FORMSPARK_ACTION_URL} method="POST">
        <input type="hidden" name="_redirect" value={`${location.origin}/submitted`} />
        <input type="hidden" name="_append" value="false" />
        <label htmlFor="name">Name*</label>
        <input type="text" id="name" name="name" placeholder="Your name/username" required value={name} onChange={(e) => setName(e.target.value)}/>
        <label htmlFor="engine">Engine* <small>(Include version number if you can)</small></label>
        <input type="text" id="engine" engine="engine" placeholder="Engine used to make your kata" required value={engine} onChange={(e) => setEngine(e.target.value)}/>
        <label htmlFor="repo">Link to repo* <small>(GitHub, GitLab, BitBucket etc)</small></label>
        <input type="url" id="repo" name="repo" placeholder="git.megacorp.com" required value={repo} onChange={(e) => setRepo(e.target.value)} />
        <ReCAPTCHA
          sitekey="6LewSnggAAAAAEr06iCU81Bv0QV73aRUXQX_D3az"
          onChange={() => setVerified(true)}
          onErrored={() => setVerified(false)}
          onExpired={() => setVerified(false)}
          className="captcha"
        />
        <button type="submit" disabled={submitDisabled}>Submit</button>
      </form>

      <p>Form handled by Formspark.io</p>
    </Layout>
  )
}

export default KataSubmit;
