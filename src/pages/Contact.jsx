import LocationMap from "../components/LocationMap";

const Contact = () => {
  return (
    <div className="min-h-screen hero bg-base-200" data-aos="fade-up">
      <div className="flex-col w-full gap-5 hero-content lg:flex-row">
        <div className="w-full text-center lg:w-1/2 lg:text-left">
          <LocationMap />
        </div>
        <div className="w-full max-w-lg shadow-2xl lg:w-1/2 card shrink-0 bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="p-4 border outline-none rounded-xl"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="mt-6 form-control">
              <button className="text-lg btn btn-primary">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
