import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-body-tertiary text-center">
  <div className="container p-4 pb-0">
    <section className="mb-4">
      <a
        className="btn text-white btn-floating m-1"
        data-mdb-ripple-init=""
        href="#!"
        role="button"
        style={{
          backgroundColor: "#3b5998",
        }}>
        <i className="fab fa-facebook-f" />
      </a>
      <a
        className="btn text-white btn-floating m-1"
        data-mdb-ripple-init=""
        href="#!"
        role="button"
        style={{
          backgroundColor: "#55acee",
        }}>
        <i className="fab fa-twitter" />
      </a>
      <a
        className="btn text-white btn-floating m-1"
        data-mdb-ripple-init=""
        href="#!"
        role="button"
        style={{
          backgroundColor: "#dd4b39",
        }}>
        <i className="fab fa-google" />
      </a>
      <a
        className="btn text-white btn-floating m-1"
        data-mdb-ripple-init=""
        href="#!"
        role="button"
        style={{
          backgroundColor: "#ac2bac",
        }}>
        <i className="fab fa-instagram" />
      </a>
      <a
        className="btn text-white btn-floating m-1"
        data-mdb-ripple-init=""
        href="#!"
        role="button"
        style={{
          backgroundColor: "#0082ca",
        }}>
        <i className="fab fa-linkedin-in" />
      </a>
      <a
        className="btn text-white btn-floating m-1"
        data-mdb-ripple-init=""
        href="#!"
        role="button"
        style={{
          backgroundColor: "#333333",
        }}>
        <i className="fab fa-github" />
      </a>
    </section>
  </div>
  <div
    className="text-center p-3"
    style={{
      backgroundColor: "rgba(0, 0, 0, 0.05)",
    }}>
    © 2020 Copyright:
    <a className="text-body" href="https://mdbootstrap.com/">
      MDBootstrap.com
    </a>
  </div>
</footer>
    </div>
  )
}

export default Footer