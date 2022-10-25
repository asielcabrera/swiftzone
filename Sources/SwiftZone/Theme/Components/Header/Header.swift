//
//  File.swift
//  
//
//  Created by Asiel Cabrera Gonzalez on 10/25/22.
//

import Publish
import Plot
import Ink


extension Node where Context == HTML.BodyContext {
    
    static func header<T: Website>(for context: PublishingContext<T>, selectedSection: T.SectionID?) -> Node {
        let sectionIDs = T.SectionID.allCases
        return .header(
            .wrapper(
                .div(
                    .class("subheader"),
                    .a(
                        .href("/"),
                        .h2("SwiftZone")
                    )
                ),
                .div(
                    .class("subheader"),
                    .text("Artículos, podcasts y noticias sobre el desarrollo de Swift, por "),
                    .a(
                        .text("Asiel Cabrera"),
                        .href("https://twitter.com/asiel_cabrera")
                    )
                ),
                .if(sectionIDs.count > 1, nav(for: context, selectedSection: selectedSection))
            )
        )
    }
}
