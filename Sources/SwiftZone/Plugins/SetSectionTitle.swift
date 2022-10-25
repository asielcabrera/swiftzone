//
//  SetSectionTitle.swift
//  
//
//  Created by Asiel Cabrera Gonzalez on 10/25/22.
//

import Publish

extension PublishingStep where Site == SwiftZone {
    static func setSectionTitle() -> Self {
        .step(named: "setSctionTitle" ){ content in
            content.mutateAllSections { section in
                switch section.id {
                case .index:
                    section.title = "Index"
                case .posts:
                    section.title = "Artículos"
                case .project:
                    section.title = "Proyectos"
                case .about:
                    section.title = "Sobre Me"
                case .tags:
                    section.title = "Tags"
                }
            }
        }
    }
}




