import Counter from "./Counter";
const CounterItems = () => {
  return (
    <div
      className="counter-wrap br-10 m-0"
      data-aos="fade-left"
      data-aos-duration={1500}
      data-aos-offset={50}
      style={{
        backgroundImage:
          "url(assets/images/background/counter-bg-with-dots.png)",
      }}
    >
      <div className="row">
        {[
          { end: 25, title: "Project Complete" },
          { end: 10, title: "Happy Customers" },
          { end: 18, title: "Years Of Experience" },
        ].map(({ end, title }, i) => (
          <div key={i} className="col-md-4 col-sm-6">
            <div className="counter-item counter-text-wrap">
              <span
                className="count-text k-plus"
                data-speed={3000}
                data-stop={end}
              >
                <Counter end={end} />
              </span>
              <span className="counter-title">{title}</span>
              <div className="text">
                Completing a mobile application development
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CounterItems;
