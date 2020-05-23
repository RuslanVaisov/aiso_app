import React, {
  Component,
  //  useRef, useEffect
} from "react";
import { Link } from "react-router-dom";
// import { gsap } from "gsap";

export class OrderForm extends Component {
  state = {
    company: "",
    name: "",
    number: "",
    info: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  // let orderHeaderEffect = useRef(null);
  //   let orderParagraphEffect = useRef(null);
  //   let orderCompanyEffect = useRef(null);
  //   let orderNameEffect = useRef(null);
  //   let orderPhoneEffect = useRef(null);
  //   let orderDetailEffect = useRef(null);
  //   let orderButtonEffect = useRef(null);

  // useEffect(() => {
  //   gsap.from(
  //     [
  //       orderHeaderEffect,
  //       orderParagraphEffect,
  //       orderCompanyEffect,
  //       orderNameEffect,
  //       orderPhoneEffect,
  //       orderDetailEffect,
  //       orderButtonEffect,
  //     ],
  //     0.8,
  //     {
  //       delay: 0.5,
  //       ease: "power3.out",
  //       y: -64,
  //       opacity: 0,
  //       stagger: {
  //         amount: 0.15,
  //       },
  //     }
  //   );
  // }, []);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // });

  render() {
    return (
      <React.Fragment>
        <div className="bg-gray-900 w-full min-h-screen flex p-4 pt-24 flex-col text-white justify-center items-center">
          <h1
            // ref={(el) => (orderHeaderEffect = el)}
            className="sm:text-4xl text-3xl tracking-widest text-center font-semibold max-w-screen-lg p-2"
          >
            Заказ дизайна
          </h1>
          <p
            // ref={(el) => (orderParagraphEffect = el)}
            className="text-center sm:text-lg xs:w-9/12 lg:w-2/4 tracking-widest"
          >
            Чтобы начать работу нам нужно с вами связаться. <br /> Достаточно
            почты, номера телефона или мессенджера и мы выйдем на связь.
          </p>
          <form
            onSubmit={this.handleSubmit}
            className=" py-10 flex flex-col justify-center px-2 sm:w-9/12 lg:w-2/4"
          >
            <div
              // ref={(el) => (orderCompanyEffect = el)}
              className="flex flex-col justify-center p-2"
            >
              <label
                className="py-2 text-gray-500 tracking-wider"
                htmlFor="Название компании"
              >
                Название компании<span className="text-red-500">*</span>
              </label>
              <input
                onChange={this.handleChange}
                value={this.state.company}
                id="company"
                className="w-full py-2 px-2 bg-gray-700 uppercase outline-none border-b-4 border-transparent focus:border-red-700"
                type="text"
                required
              />
            </div>
            <div
              // ref={(el) => (orderNameEffect = el)}
              className="flex flex-col justify-center p-2"
            >
              <label
                className="py-2  text-gray-500 tracking-wider"
                htmlFor="Ваше имя"
              >
                Ваше имя <span className="text-red-500">*</span>
              </label>
              <input
                onChange={this.handleChange}
                value={this.state.name}
                id="name"
                className="w-full py-2 px-2 bg-gray-700 uppercase outline-none border-b-4 border-transparent focus:border-red-700"
                type="text"
                required
              />
            </div>
            <div
              // ref={(el) => (orderPhoneEffect = el)}
              className="flex flex-col justify-center p-2"
            >
              <label
                className="py-2  text-gray-500 tracking-wider"
                htmlFor="Телефон или мессенджер"
              >
                Телефон или мессенджер <span className="text-red-500">*</span>
              </label>
              <input
                onChange={this.handleChange}
                value={this.state.number}
                id="number"
                className="w-full py-2 px-2 bg-gray-700 outline-none border-b-4 border-transparent focus:border-red-700"
                type="text"
                required
              />
            </div>
            <div
              // ref={(el) => (orderDetailEffect = el)}
              className="flex flex-col justify-center p-2"
            >
              <label
                className="py-2 text-gray-500 tracking-wider"
                htmlFor="Несколько слов о проекте и приблизительный бюджет"
              >
                Пара слов о проекте и приблизительный бюджет
              </label>
              <textarea
                onChange={this.handleChange}
                value={this.state.info}
                id="info"
                className="w-full h-24 py-2 px-2 bg-gray-700 outline-none border-b-4 border-transparent focus:border-red-700"
                type="text"
              />
            </div>

            <button
              // ref={(el) => (orderButtonEffect = el)}
              className="py-2 px-4 border rounded-full my-10 bg-red-700 mx-2 border-transparent focus:outline-none hover:bg-red-600"
            >
              <Link to="/Confirmation">Отправить</Link>
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default OrderForm;
