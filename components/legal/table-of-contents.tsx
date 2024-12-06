"use client"

interface Section {
  id: string
  title: string
  subsections?: { id: string; title: string }[]
}

interface TableOfContentsProps {
  sections: Section[]
  activeSection: string
  onSectionClick: (id: string) => void
}

export function TableOfContents({ sections, activeSection, onSectionClick }: TableOfContentsProps) {
  return (
    <nav aria-label="Table of contents">
      <ul className="space-y-4">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => onSectionClick(section.id)}
              className={`text-left hover:text-primary transition-colors ${
                activeSection === section.id ? "text-primary font-medium" : "text-muted-foreground"
              }`}
            >
              {section.title}
            </button>

            {section.subsections && (
              <ul className="mt-2 ml-4 space-y-2">
                {section.subsections.map((subsection) => (
                  <li key={subsection.id}>
                    <button
                      onClick={() => onSectionClick(subsection.id)}
                      className={`text-left text-sm hover:text-primary transition-colors ${
                        activeSection === subsection.id ? "text-primary font-medium" : "text-muted-foreground"
                      }`}
                    >
                      {subsection.title}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}