import React from "react"

export default function ProfDimriBio() {
  const criticalWorks = [
    "The Images and Representation of the Rural Woman, IIAS, Shimla, 2012.",
    "Translation: Theory and Practice (Introduction) Ed. Dr. Rekha Sharma, Authorspress, 2015.",
    "Ernest Hemingway's Short Stories and Non-Fiction. Anmol Publications, 2004.",
    "Short Stories and Memoirs of the Women Writers of Uttarakhand. Eds. Jaiwanti Dimri and Dr. Madhu Singh, 2017.",
    "To Surju, With Love (novella) Orient BlackSwan, 2017.",
    "The Drukpa Mystique: Bhutan in Twenty First Century. Authorspress, currently out of print.",
    "Memorable Memories of Bhutan. Lifi Publications, 2021.",
    "The Inner Eye and Other Stories, Authorspress, 2016.",
  ]

  const hindiWorks = [
    "Surju Ke Naam. (2006) Bhartiya Jnanpith, 2015.",
    "Gagar Bhar Paani. Sanmarg Prakashan, 2004.",
    "Dusra Narak Kund. Abhishek Prakashan, 2004.",
    "Pinddaan. (2012) Vani Prakashan, 2022.",
    "Pahar aur Pravaas kee Kahaniya. Dehradun: Samaysakhya, 2024.",
  ]

  const positions = [
    "Former Professor of English at Himachal Pradesh University Shimla",
    "Fellow at Indian Institute of Advanced Study (IIAS) Shimla (2006-2008)",
    "Guest Fellow at IIAS (2015)",
    "International Visiting Professor (IVP) at Portland State University, United States (2013)",
    "Visiting faculty at Doon University, Dehradun",
    "Adjunct Professor at IMS Unison University, Dehradun",
    "Visiting faculty at Mahatma Gandhi International Hindi University, Vardha",
  ]

  const publications = [
    "Hans",
    "Samkaleen Bhartitya Sahitya",
    "Vipasha",
    "Kathabimb",
    "Kadambini",
    "Navneet",
    "Femina",
    "Indian Express",
    "Tribune",
  ]

  return (
    <div className="max-w-4xl mx-auto p-6 bg-[#f8f7f4] mb-20">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Prof. Jaiwanti Dimri</h1>
        <div className="flex justify-center gap-2 flex-wrap">
          {["Bilingual Writer", "Translator", "Academic"].map((label, i) => (
            <span key={i} className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Overview */}
      <Section title="👩‍🏫 Professional Overview">
        <p className="text-gray-700 leading-relaxed">
          Jaiwanti Dimri is a bilingual writer, translator and academic with a teaching career spanning nearly four
          decades. She has taught in Nigeria, Bhutan under the aegis of Colombo Plan, and served as International
          Visiting Professor at Portland State University, United States. Combining her profession with vocation, she
          utilizes her time in reading, writing and travelling, having authored fifteen books in English and Hindi.
        </p>
      </Section>

      {/* Positions */}
      <Section title="🎓 Academic Positions & Fellowships">
        <ul className="space-y-2">
          {positions.map((pos, i) => (
            <li key={i} className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700">{pos}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* International Experience */}
      <Section title="🌍 International Experience">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { place: "Nigeria", label: "Teaching Experience", bgColor: "bg-blue-50", textColor: "text-blue-800" },
            { place: "Bhutan", label: "Colombo Plan", bgColor: "bg-green-50", textColor: "text-green-800" },
            { place: "United States", label: "Portland State University (2013)", bgColor: "bg-purple-50", textColor: "text-purple-800" },
          ].map((item, i) => (
            <div key={i} className={`${item.bgColor} p-4 rounded-lg text-center`}>
              <h3 className={`font-semibold ${item.textColor} mb-1`}>{item.place}</h3>
              <p className="text-sm text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Works */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Section title="📘 Critical Works (English)">
          <ul className="space-y-2">
            {criticalWorks.map((work, i) => (
              <li key={i} className="border-l-4 border-blue-300 pl-3 text-sm text-gray-700">
                {work}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="📗 Novels & Short Stories (Hindi)">
          <ul className="space-y-2">
            {hindiWorks.map((work, i) => (
              <li key={i} className="border-l-4 border-green-300 pl-3 text-sm text-gray-700">
                {work}
              </li>
            ))}
          </ul>
        </Section>
      </div>

      {/* Translation */}
      <Section title="🌐 Notable Translation">
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <h3 className="font-semibold text-yellow-800 mb-2">Sahastra Netradhari Nayak</h3>
          <div className="text-sm text-gray-700 space-y-1">
            <p><strong>Publisher:</strong> Rajkamal Prakashan, 2007</p>
            <p><strong>Original:</strong> "The Hero With a Thousand Eyes" by Karma Ura</p>
            <p><strong>Significance:</strong> Translation of the first English novel in Bhutan</p>
          </div>
        </div>
      </Section>

      {/* Publications */}
      <Section title="📰 Published In">
        <div className="flex flex-wrap gap-2">
          {publications.map((pub, i) => (
            <span key={i} className="border border-gray-300 px-2 py-1 rounded text-xs bg-gray-50 text-black">
              {pub}
            </span>
          ))}
        </div>
      </Section>

      {/* Awards */}
      <Section title="🏆 Awards & Recognition">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800">Arya Smriti Samman</h4>
            <p className="text-sm text-gray-600">Kitabghar for short story (2002)</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">Nissim International Prize for Prose</h4>
            <p className="text-sm text-gray-600">Special mention for "Memorable Memories of Bhutan" (2022)</p>
          </div>
        </div>
      </Section>

      {/* Roles */}
      <Section title="📋 Professional Roles">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="text-gray-700">Panelist for Sahitya Akademi, Delhi</div>
          <div className="text-gray-700">Jury member for Valley of Words: International Literary Festival Dehradun</div>
        </div>
      </Section>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-3">{title}</h2>
      <div>{children}</div>
    </div>
  )
}