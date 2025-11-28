import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ContentSection from "@/components/ContentSection";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-serif">
      <Header />

      <main className="flex-grow px-6">
        <Hero />

        <ContentSection delay="0.4s">
          <p>
            An Agent is composed of a system prompt in natural language and programs. Because of their extremely limited components, Agents that exhibit optimal performance in specific contexts are highly likely to be born and exist incidentally at the edge.
          </p>
          <p>
            So, how likely is it that we will encounter and be able to solve a problem with an Agent that exists in some corner of this world and is most suited to the situation or problem at hand?
          </p>
          <p>
            The reason we are kept away from that possibility is, in the end, transaction costs. This refers to all costs incurred from the birth of a specialized agent until it reaches the hands of the user who needs it most. This is particularly evident when things are too fragmented.
          </p>
          <p>
            This is a problem worth solving and we are confident that it will become a vector for improving the AI era that is sure to come.
          </p>
        </ContentSection>

        <ContentSection title="Our Idea" delay="0.6s">
          <p>
            Our idea, <strong className="font-bold">Iknowledge</strong>, is an ecosystem woven by organized Agents, where incentives arising from placing a powerful yet simple mechanism at an exquisite balance point drive developers.
          </p>
        </ContentSection>

        <ContentSection title="Join us" delay="0.8s">
          <p>
            We’re building AI systems that push technical boundaries while delivering real value to
            as many people as possible. Our team combines rigorous engineering with creative
            exploration, and we’re looking for collaborators to help shape this vision.
          </p>
          <p>
            Follow us on X at <Link href="https://x.com/Iknowledge_ai" className="underline decoration-gray-400 underline-offset-2 hover:text-gray-600">@Iknowledge_ai</Link> for updates or see our open roles.
          </p>
          <div className="mt-8">
            <Link href="#" className="inline-block px-4 py-2 bg-gray-100 hover:bg-gray-200 hover:scale-105 rounded-full text-sm font-medium text-gray-900 transition-all shadow-sm hover:shadow-md">
              See open roles
            </Link>
          </div>
        </ContentSection>
      </main>

      <Footer />
    </div>
  );
}
