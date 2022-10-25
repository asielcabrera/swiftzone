//
//  ItemList.swift
//  
//
//  Created by Asiel Cabrera Gonzalez on 10/25/22.
//

import Publish
import Plot

extension Node where Context == HTML.BodyContext {
    
    static func itemList<T: Website>(for items: [Item<T>], on site: T) -> Node {
        return .ul(
            .class("item-list"),
            .forEach(items) { item in
            .li(
                .article(
                    .div(.class("hstack"),
                        .h1(
                        .class("item-list-title"),
                        .a(
                            .href(item.path),
                            .text(item.title)
                        )
                    ),
                         .h5(.class("item-list-title item-list-title-time"), "Lectura de \(item.readingTime.minutes) minutos")),
                    .tagList(for: item, on: site,displayDate:true),
                    .p(.text(item.description))
                )
            )
                
            }
        )
    }
}
