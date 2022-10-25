//
//  TagList.swift
//  
//
//  Created by Asiel Cabrera Gonzalez on 10/25/22.
//

import Foundation
import Publish
import Plot

extension Node where Context == HTML.BodyContext {
    
    static func tagList<T: Website>(for item: Item<T>, on site: T, displayDate:Bool = false) -> Node {
        return .ul(
            .class("tag-list"),
            
            .forEach(item.tags){ tag in
            .li(
                .class(tag.colorfiedClass),
                .a(
                    .href(site.path(for:tag)),
                    .text(tag.string)
                )
            )
            },
            .li(
                .class("tag tagdate"),
                .if(displayDate,
                    .text(formatter.string(from: item.date))
                   )
            )
            
            
        )
    }
}
