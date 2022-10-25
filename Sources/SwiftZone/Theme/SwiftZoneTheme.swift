//
//  SwiftZoneTheme.swift
//  
//
//  Created by Asiel Cabrera Gonzalez on 10/25/22.
//

import Publish
import Plot

import Foundation
var formatter: DateFormatter{
    let formatter = DateFormatter()
    formatter.dateFormat = "dd-MM-yyyy"
    return formatter
}

struct SwiftZoneTheme<Site: Website>: HTMLFactory  {
    func makeIndexHTML(for index: Index, context: PublishingContext<Site>) throws -> HTML {
            HTML(
                .lang(context.site.language),
                .head(for: index, on: context.site),
                .body(
                    .class("index"),
                    .header(for: context, selectedSection: SwiftZone.SectionID.index as? Site.SectionID),
                    .wrapper(
                        .sectionheader(context:context),
                        .recentItemList(for: index, context: context, recentPostNumber: 5, words:300),
                        .sectionheader(context:context,showTitle: false)
                    ),
                    .footer(for: context.site)
                )
            )
        }
        
        func makeSectionHTML(for section: Section<Site>, context: PublishingContext<Site>) throws -> HTML {
            HTML(
                .lang(context.site.language),
                .head(for: section, on: context.site),
                .body(
                    .header(for: context, selectedSection: section.id),
                    .wrapper(
                                            .h1(.text(section.title)),
                        .itemList(for: section.items, on: context.site)
                    ),
                    .footer(for: context.site)
                )
            )
        }
        
        func makeItemHTML(for item: Item<Site>, context: PublishingContext<Site>) throws -> HTML {
            var previous:Item<Site>? = nil
            var next:Item<Site>? = nil
            
            let items = context.allItems(sortedBy: \.date,order: .descending)
            guard let index = items.firstIndex(where: {$0 == item}) else {
                return HTML()
            }
            
            if index > 0 {
                previous = items[index - 1]
            }
            
            if index < (items.count - 1) {
                next = items[index + 1]
            }
            
            return HTML(
                .lang(context.site.language),
                .head(for: item, on: context.site),
                .body(
                    .class("item-page"),
                    .header(for: context, selectedSection: item.sectionID),
                    .wrapper(
                        .article(
                            .div(
                                .h1(.text(item.title))
                            ),
                            .div(
                                .tagList(for: item, on: context.site,displayDate:true),
                                .div(
                                    .class("content"),
                                    .contentBody(item.body)
                                )
                            )
                        ),
                        .itemNavigator(previousItem:previous,nextItem:next),
                        .footer(for: context.site)
                    )
                )
            )
        }
        
        //Pages
        func makePageHTML(for page: Page, context: PublishingContext<Site>) throws -> HTML {
            HTML(
                .lang(context.site.language),
                .head(for: page, on: context.site),
                .body(
                    .if(
                        page.path == Path("about"),
                        .header(
                            for: context,
                               selectedSection: SwiftZone.SectionID.about as? Site.SectionID
                        ),
                        else: .header(for: context, selectedSection: nil)
                    ),
                    .div(
                        .class("about"),
                        .wrapper(
                            .contentBody(page.body)
                        )
                    ),
                    .footer(for: context.site)
                )
            )
        }
        
        func makeTagListHTML(for page: TagListPage, context: PublishingContext<Site>) throws -> HTML? {
            HTML(
                .lang(context.site.language),
                .head(for: page, on: context.site),
                .body(
                    .header(for: context, selectedSection: SwiftZone.SectionID.tags  as? Site.SectionID),
                    .wrapper(
                        .h4(
                            .class("tags-title"),
                            .text("Tags")
                        ),
                        .ul(
                            .class("all-tags"),
                            .forEach(page.tags.sorted()) { tag in
                            .li(
                                .class(tag.colorfiedClass),
                                .a(
                                    .href(context.site.path(for: tag)),
                                    .text("\(tag.string) (\(tag.count))")
                                )
                            )
                            }
                        )
                    ),
                    .footer(for: context.site)
                )
            )
        }
        
        func makeTagDetailsHTML(for page: TagDetailsPage, context: PublishingContext<Site>) throws -> HTML? {
            HTML(
                .lang(context.site.language),
                .head(for: page, on: context.site),
                .body(
                    .header(for: context, selectedSection: SwiftZone.SectionID.tags  as? Site.SectionID),
                    .wrapper(
                        .div(
                            .class("float-container "),
                            .div(
                                .class("tag-detail-header"),
                                .text("Tags: "),
                                .span(.class(page.tag.colorfiedClass), .text(page.tag.string)),
                                .a(
                                    .class("browse-all-tag"),
                                    .text("Mostrar todas las tags"),
                                    .href(context.site.tagListPath)
                                )
                            )
                        ),
                        .itemList(
                            for: context.items(
                                taggedWith: page.tag,
                                sortedBy: \.date,
                                order: .descending
                            ),
                               on: context.site
                        )
                    ),
                    .footer(for: context.site)
                )
            )
        }
}
