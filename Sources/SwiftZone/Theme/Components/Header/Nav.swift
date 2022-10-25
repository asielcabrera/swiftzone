//
//  Nav.swift
//  
//
//  Created by Asiel Cabrera Gonzalez on 10/25/22.
//

import Publish
import Plot

extension Node where Context == HTML.BodyContext {
    
    static func nav<T: Website>(for context: PublishingContext<T>, selectedSection: T.SectionID?) -> Node {
        let sectionIDs = T.SectionID.allCases
        return
            .nav(
                .ul(
                    .forEach(sectionIDs) { section in
                        .if(section as! SwiftZone.SectionID != SwiftZone.SectionID.index,
                            .li(
                                .a(
                                    .if(
                                        section as! SwiftZone.SectionID
                                        == SwiftZone.SectionID.about,
                                        .class("selected")
                                    ),
                                    .class(section == selectedSection ? "selected" : ""),
                                    .if(section as! SwiftZone.SectionID == SwiftZone.SectionID.index,
                                        .href(context.index.path),
                                        else:.href(context.sections[section].path)),
                                    .text(context.sections[section].title)
                                    
                                    
                                )
                            )
                        )
                    }
                )
            )
    }
}
