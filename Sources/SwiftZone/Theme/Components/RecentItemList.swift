//
//  RecentItemList.swift
//  
//
//  Created by Asiel Cabrera Gonzalez on 10/25/22.
//

import Publish
import Plot

extension Node where Context == HTML.BodyContext {
    static func recentItemList<Site: Website>(
        for index: Index,
        context: PublishingContext<Site>,
        recentPostNumber: Int = 5,
        words: Int = 200
    ) -> Node {
        let items = context.allItems(sortedBy: \.date, order: .descending)
        guard items.count > 1 else {
            return .empty
        }
        
        return
            .div(
                .class("index-list"),
                .ul(
                    .class("indexul"),
                    .forEach(items.prefix(recentPostNumber)) { item in
                        .li(
                            .class("indexli"),
                            .div(
                                .class("index-title"),
                                .a(
                                    .href(item.path),
                                    .h1(.text(item.title))
                                )
                            ),
                            .div(
                                .tagList(for: item, on: context.site, displayDate: true)
                            ),
                            .div(
                                .class("content"),
                                .article(
                                    .raw(
                                        item.content.body.html
                                    )
                                )
                            )
                        )

                    }
                )
            )

    }

}
