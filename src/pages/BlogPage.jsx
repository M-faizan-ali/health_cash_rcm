import { Link } from "react-router-dom";
import Navbar2 from "../components/Navbar2";
import { allBlogsContent } from "../constants";
import { useEffect } from "react";

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Navbar2 />
      <div className="w-full bg-white">
        <div className="container w-[70%] mx-auto">
          <div className="flex  py-20">
            <div className="w-[70%]">
              {allBlogsContent.map((blogItem, index) => (
                <div key={index} className="mb-10 text-[#2e3482]">
                  <img
                    className="rounded-[20px] w-[70%] mb-5"
                    src={blogItem.image}
                    alt=""
                  />
                  <div className="flex items-center gap-4 uppercase text-lg mb-5">
                    <div className="flex gap-2 items-center">
                      <svg
                        className="w-[15px]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        fill="#2e3482"
                      >
                        <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l80 0 0 56-80 0 0-56zm0 104l80 0 0 64-80 0 0-64zm128 0l96 0 0 64-96 0 0-64zm144 0l80 0 0 64-80 0 0-64zm80-48l-80 0 0-56 80 0 0 56zm0 160l0 40c0 8.8-7.2 16-16 16l-64 0 0-56 80 0zm-128 0l0 56-96 0 0-56 96 0zm-144 0l0 56-64 0c-8.8 0-16-7.2-16-16l0-40 80 0zM272 248l-96 0 0-56 96 0 0 56z" />
                      </svg>
                      <span>{blogItem.created_at}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <svg
                        className="w-[15px]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        fill="#2e3482"
                      >
                        <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z" />
                      </svg>
                      <span>by MediPay Billing</span>
                    </div>
                  </div>

                  <h1 className="text-[32px] font-semibold mb-2">
                    {blogItem.title}
                  </h1>
                  <hr className="mb-2" />
                  <div
                    className="mb-5 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: blogItem.content }}
                  />

                  <Link
                    to={`/blog/${blogItem.url_slug}`}
                    className="inline-flex items-center px-8 py-4 rounded-full font-bold uppercase text-xs leading-6 tracking-wider transition-all bg-primary-heading-color  text-white "
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>

            <div className="w-[30%] px-5 flex justify-end">
              <div className="w-full px-5 h-fit py-10  rounded-[15px] flex flex-col items-center justify-center gap-8 text-white shadow-2xl blog-contact-card-bg">
                <p className="px-9 py-2 border border-white rounded-full">
                  Get in touch
                </p>
                <p className="text-[25px] text-center">
                  Ready To Get Our Services?
                </p>
                <p className="text-lg">888-322-2702</p>
                <button className="inline-flex items-center px-8 py-4 rounded-full font-bold uppercase text-xs leading-6 tracking-wider transition-all bg-primary-heading-color  text-white ">
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
