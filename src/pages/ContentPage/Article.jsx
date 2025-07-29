import React from 'react'
import { useParams, Link } from "react-router-dom";
import { data } from "../Data/data";
import { useState, useEffect } from 'react';
import DOMPurify from "dompurify";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdOutlineReadMore } from "react-icons/md";
import { slugText } from "../../hooks/textSlug";
import { formatDateShort } from "../../hooks/dateFormatter";
import Framer from '../../components/Framer';
import ShareLink from '../../components/ShareLink';

function Article() {
  const { slug } = useParams();
  const title = decodeURIComponent(slug || "").replace(/-/g, " ");
  const [article, setArticle] = useState({});
  const [otherArticles, setOthersArticles] = useState([]);

  useEffect(() => {
    if (!slug) return;
    const other = [];
    const normalizedTitle = title.toLowerCase();
    data.forEach(item => {
      if (item.title.toLowerCase() === normalizedTitle) {
        setArticle(item);
      } else if (item.file_type === 1) {
        other.push(item);
      }
    });
    setOthersArticles(other);
  }, [slug, title]);

  const purifyText = (text) => {
    return DOMPurify.sanitize(text);
  }

  return (
    <>
      <div className="w-full">
        <div className="m-auto w-full max-w-screen-2xl md:py-12 py-6 px-8 grid md:grid-cols-3 grid-cols-1 gap-x-10">
          <div className='w-full md:col-span-2 text-justify'>
            <Framer animation="fade-up">
              <div dangerouslySetInnerHTML={{ __html: purifyText(article.content || "") }} />
            </Framer>
            <ShareLink article={article}/>
          </div>
          <div className='w-full md:mt-0 mt-8'>
            <Framer animation="zoom-in">
              <section className="space-y-1 px-2 text-gray-800 md:pb-5">
                <div className="w-full border-b border-gray-400 pb-3">
                  <h4 className="montserrat-bold flex items-center gap-x-2 text-lg font-extrabold">
                    <IoNewspaperOutline className="text-2xl" />
                    RECENT ARTICLES
                  </h4>
                </div>
                {
                  otherArticles.map((item, i) => (
                    <Link to={`/view-article/${slugText(item.title)}`} key={i} >
                      <div className="flex w-full gap-4 border-b border-gray-400 py-3 duration-300 hover:scale-[1.03]">
                        <div className="aspect-square w-[100px] flex-shrink-0 overflow-hidden rounded-md shadow-lg">
                          <img
                            src={`/images/articles/${item.thumbnail}`}
                            alt={item.title}
                            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                        <div className="flex flex-grow flex-col justify-center">
                          <h2 className="montserrat-bold text-sm leading-snug text-gray-800">
                            {item.title}
                          </h2>
                          <span className="montserrat-regular mt-1 text-start text-xs text-gray-600">
                            {formatDateShort(item.date_published)}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))
                }
                <div className="mt-4 flex w-full justify-center">
                  <Link
                    to={`/press-release`}
                    className="montserrat-regular flex cursor-pointer items-center justify-center gap-x-2 rounded-full px-3 py-1 text-sm font-medium text-gray-700 duration-150 hover:border md:inline-flex"
                  >
                    View More <MdOutlineReadMore className="text-2xl" />
                  </Link>
                </div>
              </section>
            </Framer>
          </div>
        </div>
      </div>
    </>
  )
}

export default Article;
