// swift-tools-version:5.5

import PackageDescription

let package = Package(
    name: "SwiftZone",
    platforms: [.macOS(.v12)],
    products: [
        .executable(
            name: "SwiftZone",
            targets: ["SwiftZone"]
        )
    ],
    dependencies: [
        .package(name: "Publish", url: "https://github.com/johnsundell/publish.git", from: "0.8.0"),
        .package(url: "https://github.com/JohnSundell/Splash", from: "0.1.0")
    ],
    targets: [
        .executableTarget(
            name: "SwiftZone",
            dependencies: ["Splash", "Publish"]
        )
    ]
)
