import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";



export default function AboutPageText() {

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
      }, []);

  return (
    <div>

        <section id="about" className="py-16 bg-gray-50 text-gray-800">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-3xl font-bold text-center mb-6 text-blue-700"
            data-aos="fade-up"
          >
            About IDEAI-2025
          </h2>

          <p
            className="text-lg leading-relaxed mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            The{" "}
            <strong>
              International Conference on Digital Innovation in Electronics,
              Communication and Artificial Intelligence (IDEAI-2025)
            </strong>{" "}
            is proudly organized by the{" "}
            <strong>
              Department of Electronics Technology, Guru Nanak Dev University,
              Amritsar
            </strong>
            , from <strong>13th to 15th November 2025</strong>. This three-day
            international event will serve as a global platform for{" "}
            <strong>
              academicians, researchers, scientists, industry professionals, and
              students
            </strong>{" "}
            to engage in meaningful discussions on the latest advancements,
            trends, and challenges in{" "}
            <strong>
              electronics, communication, computing, and artificial intelligence
            </strong>
            .
          </p>

          <p
            className="text-lg leading-relaxed mb-6"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            The conference is humbly dedicated to the{" "}
            <strong>supreme sacrifice of Guru Tegh Bahadur Ji</strong>, whose
            life and teachings continue to inspire values of justice,
            compassion, and the protection of human dignity. Guided by these
            principles, IDEAI-2025 emphasizes that innovation must be{" "}
            <strong>ethical, inclusive, and sustainable</strong>, ensuring that
            technological progress benefits humanity as a whole. The conference
            aligns its vision with the{" "}
            <strong>United Nations Sustainable Development Goals (SDGs)</strong>
            , linking research in electronics, communication, and AI with global
            priorities such as climate action, reduced inequalities, sustainable
            cities, and responsible innovation.
          </p>

          <p
            className="text-lg leading-relaxed mb-6"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            IDEAI-2025 will feature an exciting program including{" "}
            <strong>
              keynote lectures by distinguished international and national
              experts, plenary talks, technical paper presentations, and
              interactive sessions
            </strong>
            . The conference will cover seven major tracks, ranging from{" "}
            <strong>
              Smart Embedded Systems & IoT, Advanced Materials for Electronics,
              Next-Generation Wireless Connectivity, Optical & Space
              Communication, AI-Powered Electronics, Next-Generation Computing,
            </strong>{" "}
            to <strong>AI and Data Science Applications</strong>. Each track is
            designed to highlight cutting-edge research and real-world
            applications, fostering collaborations and future innovations.
          </p>

          <p
            className="text-lg leading-relaxed mb-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Beyond the technical sessions, IDEAI-2025 aims to promote a spirit
            of{" "}
            <strong>global cooperation and interdisciplinary research</strong>.
            By bringing together experts from diverse domains, the conference
            will strengthen academic-industry partnerships and create
            opportunities for young researchers to showcase their work on an
            international stage. With more than{" "}
            <strong>150 expected participants</strong> from across the world,
            IDEAI-2025 will serve as a vibrant hub of innovation, knowledge
            exchange, and networking.
          </p>

          <p
            className="text-lg leading-relaxed text-gray-700"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            With its unique blend of{" "}
            <strong>
              cultural inspiration, ethical grounding, and technological vision
            </strong>
            , IDEAI-2025 promises to be more than just a conference—it will be a
            step forward in shaping a future where{" "}
            <strong>
              digital innovation uplifts society, protects the environment, and
              advances humanity with responsibility and compassion
            </strong>
            .
          </p>
        </div>
      </section>


    </div>
  )
}