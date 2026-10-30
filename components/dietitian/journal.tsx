'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, X } from 'lucide-react'
import { SectionLabel } from './section-label'
import { articles } from './data/articles'

export function Journal() {
  const [selectedArticle, setSelectedArticle] = useState<any>(null)

  return (
    <>
      <section id="journal" className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="flex items-end justify-between">
            <div>
              <SectionLabel>From the journal</SectionLabel>
              <h2 className="font-serif text-4xl sm:text-5xl">
                Small notes,<br /><em className="text-primary">big shifts.</em>
              </h2>
            </div>
            <Link href="#contact" className="hidden items-center gap-2 text-sm font-semibold text-primary sm:flex">
              View all articles <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {articles.map((article) => (
              <article key={article.title} className="group border-t border-border pt-5">
                <button
                  onClick={() => article.content && setSelectedArticle(article)}
                  className={`w-full text-left ${article.content ? 'cursor-pointer' : 'cursor-default'}`}
                >
                  <div className="relative mb-6 aspect-[1.35] overflow-hidden rounded-2xl bg-secondary">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 90vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-transparent to-transparent" />
                    <div className="absolute inset-x-5 bottom-5 flex items-end justify-between">
                      <span className="rounded-full bg-background/90 px-3 py-1 text-xs text-foreground backdrop-blur">
                        {article.category}
                      </span>
                      {article.content && (
                        <span className="flex size-9 items-center justify-center rounded-full bg-background/90 text-primary backdrop-blur">
                          <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </span>
                      )}
                    </div>
                  </div>
                  <h3 className={`max-w-sm font-serif text-2xl leading-tight ${article.content ? 'group-hover:text-primary transition-colors' : ''}`}>
                    {article.title}
                  </h3>
                  <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{article.date}</p>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-5 sm:p-10">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedArticle(null)}
          />
          <div className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-[2rem] border border-border bg-background shadow-2xl">
            <div className="flex items-center justify-between border-b border-border p-6 sm:px-10 sm:py-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  {selectedArticle.category}
                </span>
                <h3 className="mt-2 font-serif text-2xl sm:text-3xl">{selectedArticle.title}</h3>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="rounded-full bg-secondary p-3 text-foreground transition-transform hover:scale-105"
                aria-label="Close modal"
              >
                <X className="size-5" />
              </button>
            </div>
            <div className="overflow-y-auto p-6 sm:p-10">
              {selectedArticle.content}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

