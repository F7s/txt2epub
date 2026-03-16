[↑ Jump to Table of Contents](#toc)[← Collapse Sidebar](#toc)

[![W3C](https://www.w3.org/StyleSheets/TR/2021/logos/W3C)](https://www.w3.org/)

EPUB 3.3
========

[W3C Recommendation](https://www.w3.org/standards/types#REC) 27 March 2025

More details about this document

This version:

[https://www.w3.org/TR/2025/REC-epub-33-20250327/](https://www.w3.org/TR/2025/REC-epub-33-20250327/)

Latest published version:

[https://www.w3.org/TR/epub-33/](https://www.w3.org/TR/epub-33/)

Latest editor's draft:

[https://w3c.github.io/epub-specs/epub33/core/](https://w3c.github.io/epub-specs/epub33/core/)

History:

[https://www.w3.org/standards/history/epub-33/](https://www.w3.org/standards/history/epub-33/)

[Commit history](https://github.com/w3c/epub-specs/commits/main)

Test suite:

[https://w3c.github.io/epub-tests/index.html](https://w3c.github.io/epub-tests/index.html)

Implementation report:

[https://w3c.github.io/epub-specs/epub33/reports/](https://w3c.github.io/epub-specs/epub33/reports/)

Editors:

Matt Garrish ([DAISY Consortium](https://daisy.org))

[Ivan Herman](https://www.w3.org/People/Ivan/) [.st1 { fill: #fff; }](https://orcid.org/0000-0003-0782-2704) ([W3C](https://www.w3.org))

Dave Cramer (Invited Expert)

Feedback:

[GitHub w3c/epub-specs](https://github.com/w3c/epub-specs/) ([pull requests](https://github.com/w3c/epub-specs/pulls/), [new issue](https://github.com/w3c/epub-specs/issues/new/choose), [open issues](https://github.com/w3c/epub-specs/issues/))

[public-pm-wg@w3.org](mailto:public-pm-wg@w3.org?subject=%5Bepub-33%5D%20YOUR%20TOPIC%20HERE) with subject line \[epub-33\] _… message topic …_ ([archives](https://lists.w3.org/Archives/Public/public-pm-wg))

Errata:

[https://w3c.github.io/epub-specs/epub33/errata.html](https://w3c.github.io/epub-specs/epub33/errata.html)

This document is also available in this non-normative format:

[EPUB 3](./epub-33.epub)

See also [**translations**](https://www.w3.org/Translations/?technology=epub-33).

[Copyright](https://www.w3.org/policies/#copyright) © 1999-2025 [International Digital Publishing Forum](https://www.idpf.org) and [World Wide Web Consortium](https://www.w3.org/). W3C® [liability](https://www.w3.org/policies/#Legal_Disclaimer), [trademark](https://www.w3.org/policies/#W3C_Trademarks) and [permissive document license](https://www.w3.org/copyright/software-license-2023/ "W3C Software and Document Notice and License") rules apply.

* * *

Abstract
--------

EPUB® 3 defines a distribution and interchange format for digital publications and documents. The EPUB format provides a means of representing, packaging, and encoding structured and semantically enhanced web content — including HTML, CSS, SVG, and other resources — for distribution in a single-file container.

This specification defines the authoring requirements for [EPUB publications](#dfn-epub-publication) and represents the third major revision of the standard.

Status of This Document
-----------------------

_This section describes the status of this document at the time of its publication. A list of current W3C publications and the latest revision of this technical report can be found in the [W3C technical reports index](https://www.w3.org/TR/) at https://www.w3.org/TR/._

This document was published by the [Publishing Maintenance Working Group](https://www.w3.org/groups/wg/pm) as a Recommendation using the [Recommendation track](https://www.w3.org/policies/process/20231103/#recs-and-notes).

W3C recommends the wide deployment of this specification as a standard for the Web.

A W3C Recommendation is a specification that, after extensive consensus-building, is endorsed by W3C and its Members, and has commitments from Working Group members to [royalty-free licensing](https://www.w3.org/policies/patent-policy/#sec-Requirements) for implementations. Future updates to this Recommendation may incorporate [new features](https://www.w3.org/policies/process/20231103/#allow-new-features).

This document was produced by a group operating under the [W3C Patent Policy](https://www.w3.org/policies/patent-policy/). W3C maintains a [public list of any patent disclosures](https://www.w3.org/groups/wg/pm/ipr) made in connection with the deliverables of the group; that page also includes instructions for disclosing a patent. An individual who has actual knowledge of a patent which the individual believes contains [Essential Claim(s)](https://www.w3.org/policies/patent-policy/#def-essential) must disclose the information in accordance with [section 6 of the W3C Patent Policy](https://www.w3.org/policies/patent-policy/#sec-Disclosure).

This document is governed by the [03 November 2023 W3C Process Document](https://www.w3.org/policies/process/20231103/).

Table of Contents
-----------------

1.  [Abstract](#abstract)
2.  [Status of This Document](#sotd)
3.  [1\. Introduction](#sec-introduction)
    1.  [1.1 Overview](#sec-intro-overview)
    2.  [1.2 Organization](#sec-intro-spec-org)
    3.  [1.3 Relationship to other specifications](#sec-intro-relations)
        1.  [1.3.1 Relationship to HTML](#sec-overview-relations-html)
        2.  [1.3.2 Relationship to SVG](#sec-overview-relations-svg)
        3.  [1.3.3 Relationship to CSS](#sec-overview-relations-css)
        4.  [1.3.4 Relationship to MathML](#sec-overview-relations-mathml)
        5.  [1.3.5 Relationship to SMIL](#sec-overview-relations-smil)
        6.  [1.3.6 Relationship to URL](#sec-overview-relations-url)
    4.  [1.4 Terminology](#sec-terminology)
    5.  [1.5 Conformance](#conformance)
    6.  [1.6 Authoring shorthands](#sec-intro-shorthands)
4.  [2\. EPUB publication conformance](#sec-epub-conf)
    1.  [2.1 Conformance checking](#sec-conformance-checking)
5.  [3\. Publication resources](#sec-publication-resources)
    1.  [3.1 Introduction](#sec-pub-res-intro)
        1.  [3.1.1 The manifest plane](#sec-manifest-plane)
        2.  [3.1.2 The spine plane](#sec-spine-plane)
        3.  [3.1.3 The content plane](#sec-content-plane)
    2.  [3.2 Core media types](#sec-core-media-types)
    3.  [3.3 Foreign resources](#sec-foreign-resources)
    4.  [3.4 Exempt resources](#sec-exempt-resources)
    5.  [3.5 Resource fallbacks](#sec-resource-fallbacks)
        1.  [3.5.1 Manifest fallbacks](#sec-manifest-fallbacks)
        2.  [3.5.2 Intrinsic fallbacks](#sec-intrinsic-fallbacks)
            1.  [3.5.2.1 HTML `audio` and `video` fallbacks](#sec-fallbacks-audio)
            2.  [3.5.2.2 HTML `img` fallbacks](#sec-fallbacks-img)
            3.  [3.5.2.3 HTML `script` element](#html-script-element)
    6.  [3.6 Resource locations](#sec-resource-locations)
    7.  [3.7 Data URLs](#sec-data-urls)
    8.  [3.8 File URLs](#sec-file-urls)
    9.  [3.9 XML conformance](#sec-xml-constraints)
6.  [4\. Open Container Format (OCF)](#sec-ocf)
    1.  [4.1 Introduction](#sec-ocf-intro)
    2.  [4.2 OCF abstract container](#sec-container-abstract)
        1.  [4.2.1 Introduction](#sec-container-abstract-intro)
        2.  [4.2.2 File and directory structure](#sec-container-file-and-dir-structure)
        3.  [4.2.3 File paths and file names](#sec-container-filenames)
        4.  [4.2.4 Deriving file paths](#sec-file-names-to-path-names)
        5.  [4.2.5 URLs in the OCF abstract container](#sec-container-iri)
        6.  [4.2.6 `META-INF` directory](#sec-container-metainf)
            1.  [4.2.6.1 Inclusion in OCF abstract container](#sec-container-metainf-inc)
            2.  [4.2.6.2 Parsing URLs in the `META-INF` directory](#sec-parsing-urls-metainf)
            3.  [4.2.6.3 Reserved files](#sec-container-metainf-files)
                1.  [4.2.6.3.1 Container file (`container.xml`)](#sec-container-metainf-container.xml)
                    1.  [4.2.6.3.1.1 The `container` element](#sec-container.xml-container-elem)
                    2.  [4.2.6.3.1.2 The `rootfiles` element](#sec-container.xml-rootfiles-elem)
                    3.  [4.2.6.3.1.3 The `rootfile` element](#sec-container.xml-rootfile-elem)
                    4.  [4.2.6.3.1.4 The `links` element](#sec-container.xml-links-elem)
                    5.  [4.2.6.3.1.5 The `link` element](#sec-container.xml-link-elem)
                    6.  [4.2.6.3.1.6 Examples](#sec-container-container.xml-example)
                2.  [4.2.6.3.2 Encryption file (`encryption.xml`)](#sec-container-metainf-encryption.xml)
                    1.  [4.2.6.3.2.1 The `encryption` element](#sec-encryption.xml-encryption)
                    2.  [4.2.6.3.2.2 Order of compression and encryption](#sec-enc-compression)
                3.  [4.2.6.3.3 Manifest file (`manifest.xml`)](#sec-container-metainf-manifest.xml)
                4.  [4.2.6.3.4 Metadata file (`metadata.xml`)](#sec-container-metainf-metadata.xml)
                5.  [4.2.6.3.5 Rights management file (`rights.xml`)](#sec-container-metainf-rights.xml)
                6.  [4.2.6.3.6 Digital signatures file (`signatures.xml`)](#sec-container-metainf-signatures.xml)
                    1.  [4.2.6.3.6.1 The `signatures` element](#sec-signatures.xml-signatures)
    3.  [4.3 OCF ZIP container](#sec-container-zip)
        1.  [4.3.1 Introduction](#sec-container-zip-intro)
        2.  [4.3.2 ZIP file requirements](#sec-zip-container-zipreqs)
        3.  [4.3.3 OCF ZIP container media type identification](#sec-zip-container-mime)
    4.  [4.4 Font obfuscation](#sec-font-obfuscation)
        1.  [4.4.1 Introduction](#fobfus-intro)
        2.  [4.4.2 Limitations](#fobfus-limitations)
        3.  [4.4.3 Obfuscation key](#obfus-keygen)
        4.  [4.4.4 Obfuscation algorithm](#obfus-algorithm)
        5.  [4.4.5 Specifying obfuscated fonts](#obfus-specifying)
7.  [5\. Package document](#sec-package-doc)
    1.  [5.1 Introduction](#sec-package-intro)
    2.  [5.2 Parsing URLs in the package document](#sec-parse-package-urls)
    3.  [5.3 Shared attributes](#sec-shared-attrs)
        1.  [5.3.1 The `dir` attribute (under-implemented)](#attrdef-dir)
        2.  [5.3.2 The `href` attribute](#attrdef-href)
        3.  [5.3.3 The `id` attribute](#attrdef-id)
        4.  [5.3.4 The `media-type` attribute](#attrdef-media-type)
        5.  [5.3.5 The `properties` attribute](#attrdef-properties)
        6.  [5.3.6 The `refines` attribute](#attrdef-refines)
        7.  [5.3.7 The `xml:lang` attribute](#attrdef-xml-lang)
    4.  [5.4 The `package` element](#sec-package-elem)
    5.  [5.5 Metadata section](#sec-pkg-metadata)
        1.  [5.5.1 The `metadata` element](#sec-metadata-elem)
        2.  [5.5.2 Metadata values](#sec-metadata-values)
        3.  [5.5.3 Dublin Core](#sec-opf-dcmes-hd)
            1.  [5.5.3.1 Required elements](#sec-opf-dcmes-required-hd)
                1.  [5.5.3.1.1 The `dc:identifier` element](#sec-opf-dcidentifier)
                2.  [5.5.3.1.2 The `dc:title` element](#sec-opf-dctitle)
                3.  [5.5.3.1.3 The `dc:language` element](#sec-opf-dclanguage)
            2.  [5.5.3.2 Optional elements](#sec-opf-dcmes-optional-hd)
                1.  [5.5.3.2.1 General definition](#sec-opf-dcmes-optional-def)
                2.  [5.5.3.2.2 The `dc:contributor` element](#sec-opf-dccontributor)
                3.  [5.5.3.2.3 The `dc:creator` element](#sec-opf-dccreator)
                4.  [5.5.3.2.4 The `dc:date` element](#sec-opf-dcdate)
                5.  [5.5.3.2.5 The `dc:subject` element](#sec-opf-dcsubject)
                6.  [5.5.3.2.6 The `dc:type` element](#sec-opf-dctype)
        4.  [5.5.4 The `meta` element](#sec-meta-elem)
        5.  [5.5.5 Last modified date](#sec-metadata-last-modified)
        6.  [5.5.6 The `link` element](#sec-link-elem)
    6.  [5.6 Manifest section](#sec-pkg-manifest)
        1.  [5.6.1 The `manifest` element](#sec-manifest-elem)
        2.  [5.6.2 The `item` element](#sec-item-elem)
            1.  [5.6.2.1 Resource properties](#sec-item-resource-properties)
            2.  [5.6.2.2 Examples](#sec-item-elem-examples)
        3.  [5.6.3 The `bindings` element (deprecated)](#sec-opf-bindings)
    7.  [5.7 Spine section](#sec-pkg-spine)
        1.  [5.7.1 The `spine` element](#sec-spine-elem)
        2.  [5.7.2 The `itemref` element](#sec-itemref-elem)
    8.  [5.8 Collections](#sec-pkg-collections)
        1.  [5.8.1 The `collection` element](#sec-collection-elem)
        2.  [5.8.2 Defining collection types (deprecated)](#sec-defining-collection-types)
    9.  [5.9 Legacy features](#sec-pkg-legacy)
        1.  [5.9.1 Introduction](#sec-pkg-legacy-intro)
        2.  [5.9.2 Support](#pkg-legacy-support)
        3.  [5.9.3 The `meta` element](#sec-opf2-meta)
        4.  [5.9.4 The `guide` element](#sec-opf2-guide)
        5.  [5.9.5 NCX](#sec-opf2-ncx)
8.  [6\. EPUB content documents](#sec-contentdocs)
    1.  [6.1 XHTML content documents](#sec-xhtml)
        1.  [6.1.1 Introduction](#sec-xhtml-intro)
        2.  [6.1.2 XHTML requirements](#sec-xhtml-req)
        3.  [6.1.3 HTML extensions](#sec-xhtml-extensions)
            1.  [6.1.3.1 Structural semantics](#sec-xhtml-structural-semantics)
            2.  [6.1.3.2 RDFa](#sec-xhtml-rdfa)
            3.  [6.1.3.3 Content switching (deprecated)](#sec-xhtml-content-switch)
            4.  [6.1.3.4 The `epub:trigger` element (deprecated)](#sec-xhtml-epub-trigger)
            5.  [6.1.3.5 Custom attributes](#sec-xhtml-custom-attributes)
        4.  [6.1.4 HTML deviations and constraints](#sec-xhtml-deviations)
            1.  [6.1.4.1 Embedded MathML](#sec-xhtml-mathml)
            2.  [6.1.4.2 Embedded SVG](#sec-xhtml-svg)
            3.  [6.1.4.3 Discouraged constructs](#sec-xhtml-deviations-discouraged)
                1.  [6.1.4.3.1 The `base` element](#sec-xhtml-deviations-base)
                2.  [6.1.4.3.2 The `rp` element](#sec-xhtml-deviations-rp)
                3.  [6.1.4.3.3 The `embed` element](#sec-xhtml-deviations-embed)
    2.  [6.2 SVG content documents](#sec-svg)
        1.  [6.2.1 Introduction](#sec-svg-intro)
        2.  [6.2.2 SVG requirements](#sec-svg-req)
        3.  [6.2.3 Restrictions on SVG](#sec-svg-restrictions)
    3.  [6.3 Common resource requirements](#sec-common-resource-req)
        1.  [6.3.1 Cascading Style Sheets (CSS)](#sec-css)
            1.  [6.3.1.1 Introduction](#sec-css-intro)
            2.  [6.3.1.2 CSS requirements](#sec-css-req)
            3.  [6.3.1.3 Prefixed properties](#sec-css-prefixed)
        2.  [6.3.2 Scripting](#sec-scripted-content)
            1.  [6.3.2.1 Script inclusion](#sec-scripted-support)
            2.  [6.3.2.2 Scripting contexts](#sec-scripted-context)
                1.  [6.3.2.2.1 Container-constrained scripts](#sec-scripted-container-constrained)
                2.  [6.3.2.2.2 Spine-level scripts](#sec-scripted-spine)
            3.  [6.3.2.3 Event model](#sec-scripted-content-events)
            4.  [6.3.2.4 Scripting accessibility](#sec-scripted-a11y)
            5.  [6.3.2.5 Scripting fallbacks](#confreq-cd-scripted-flbk)
9.  [7\. EPUB navigation document](#sec-nav)
    1.  [7.1 Introduction](#sec-nav-intro)
    2.  [7.2 Navigation document requirements](#sec-nav-content-req)
    3.  [7.3 The `nav` element: restrictions](#sec-nav-def-model)
    4.  [7.4 The `nav` element: types](#sec-nav-def-types)
        1.  [7.4.1 Introduction](#sec-nav-def-types-intro)
        2.  [7.4.2 The `toc nav` element](#sec-nav-toc)
        3.  [7.4.3 The `page-list nav` element](#sec-nav-pagelist)
        4.  [7.4.4 The `landmarks nav` element](#sec-nav-landmarks)
        5.  [7.4.5 Other `nav` elements](#sec-nav-def-types-other)
    5.  [7.5 Using in the spine](#sec-nav-doc-use-spine)
10.  [8\. Layout rendering control](#sec-rendering-control)
    1.  [8.1 Introduction](#sec-general-rendering-intro)
    2.  [8.2 Fixed layouts](#sec-fixed-layouts)
        1.  [8.2.1 Introduction](#fxl-intro)
        2.  [8.2.2 Fixed-layout package settings](#sec-fxl-package)
            1.  [8.2.2.1 Layout](#layout)
                1.  [8.2.2.1.1 Layout overrides](#layout-overrides)
            2.  [8.2.2.2 Orientation](#orientation)
                1.  [8.2.2.2.1 Orientation overrides](#orientation-overrides)
            3.  [8.2.2.3 Synthetic spreads](#spread)
                1.  [8.2.2.3.1 Synthetic spread overrides](#spread-overrides)
            4.  [8.2.2.4 Spread placement](#page-spread)
            5.  [8.2.2.5 Viewport dimensions (deprecated)](#viewport)
            6.  [8.2.2.6 Content document dimensions](#sec-fxl-content-dimensions)
    3.  [8.3 Reflowable layouts](#sec-reflowable-layouts)
        1.  [8.3.1 The `rendition:flow` property](#flow)
            1.  [8.3.1.1 Spine overrides](#flow-overrides)
        2.  [8.3.2 The `rendition:align-x-center` property](#align-x-center)
11.  [9\. Media overlays](#sec-media-overlays)
    1.  [9.1 Introduction](#sec-overlays-introduction)
    2.  [9.2 Media overlay documents](#sec-overlay-docs)
        1.  [9.2.1 Media overlay document requirements](#sec-overlay-req)
        2.  [9.2.2 Media overlay document definition](#sec-overlays-def)
            1.  [9.2.2.1 The `smil` element](#sec-smil-smil-elem)
            2.  [9.2.2.2 The `head` element](#sec-smil-head-elem)
            3.  [9.2.2.3 The `metadata` element](#sec-smil-metadata-elem)
            4.  [9.2.2.4 The `body` element](#sec-smil-body-elem)
            5.  [9.2.2.5 The `seq` element](#sec-smil-seq-elem)
            6.  [9.2.2.6 The `par` element](#sec-smil-par-elem)
            7.  [9.2.2.7 The `text` element](#sec-smil-text-elem)
            8.  [9.2.2.8 The `audio` element](#sec-smil-audio-elem)
    3.  [9.3 Creating media overlays](#sec-overlay-doc-create)
        1.  [9.3.1 Introduction](#sec-docs-intro)
        2.  [9.3.2 Relationship to the EPUB content document](#sec-docs-relations)
            1.  [9.3.2.1 Overlay structure](#sec-media-overlays-structure)
            2.  [9.3.2.2 Referencing document fragments](#sec-media-overlays-fragids)
            3.  [9.3.2.3 Overlay granularity](#sec-media-overlays-granularity)
            4.  [9.3.2.4 Text-to-speech rendering](#sec-tts)
        3.  [9.3.3 Structural semantics in overlays](#sec-docs-structural-semantic)
        4.  [9.3.4 Associating style information](#sec-docs-assoc-style)
        5.  [9.3.5 Media overlays packaging](#sec-docs-package)
            1.  [9.3.5.1 Including media overlays](#sec-package-including)
            2.  [9.3.5.2 Overlays package metadata](#sec-mo-package-metadata)
    4.  [9.4 Skippability and escapability](#sec-behaviors-skip-escape)
        1.  [9.4.1 Skippability](#sec-skippability)
        2.  [9.4.2 Escapability](#sec-escapability)
    5.  [9.5 Navigation document overlays](#sec-mo-nav-doc)
12.  [10\. Accessibility](#sec-accessibility)
13.  [11\. Security and privacy](#sec-security-privacy)
    1.  [11.1 Overview](#security-privacy-overview)
    2.  [11.2 Threat model](#epub-threat-model)
        1.  [11.2.1 EPUB-specific features](#privacy-security-epub-features)
    3.  [11.3 Recommendations](#security-privacy-recommendations)
14.  [A. Unsupported features](#app-unsupported)
    1.  [A.1 Under-implemented features](#under-implemented)
    2.  [A.2 Deprecated features](#deprecated)
15.  [B. Allowed external identifiers](#app-identifiers-allowed)
16.  [C. Expressing structural semantics](#app-structural-semantics)
    1.  [C.1 Introduction](#sec-structural-semantics-intro)
    2.  [C.2 The `epub:type` attribute](#sec-epub-type-attribute)
17.  [D. Vocabularies](#app-vocabs)
    1.  [D.1 Vocabulary association mechanisms](#sec-vocab-assoc)
        1.  [D.1.1 Introduction](#sec-vocab-assoc-intro)
        2.  [D.1.2 The property data type](#sec-property-datatype)
        3.  [D.1.3 Default vocabularies](#sec-default-vocab)
        4.  [D.1.4 The `prefix` attribute](#sec-prefix-attr)
        5.  [D.1.5 Reserved prefixes](#sec-reserved-prefixes)
    2.  [D.2 Property field definitions](#sec-property-field-definitions)
    3.  [D.3 Meta properties vocabulary](#app-meta-property-vocab)
        1.  [D.3.1 alternate-script](#sec-alternate-script)
        2.  [D.3.2 authority](#sec-authority)
        3.  [D.3.3 belongs-to-collection](#sec-belongs-to-collection)
        4.  [D.3.4 collection-type](#sec-collection-type)
        5.  [D.3.5 display-seq](#sec-display-seq)
        6.  [D.3.6 file-as](#sec-file-as)
        7.  [D.3.7 group-position](#sec-group-position)
        8.  [D.3.8 identifier-type](#sec-identifier-type)
        9.  [D.3.9 meta-auth (deprecated)](#sec-meta-auth)
        10.  [D.3.10 role](#sec-role)
        11.  [D.3.11 source-of](#sec-source-of)
        12.  [D.3.12 term](#sec-term)
        13.  [D.3.13 title-type](#sec-title-type)
        14.  [D.3.14 Examples](#sec-property-examples)
    4.  [D.4 Metadata link vocabulary](#app-link-vocab)
        1.  [D.4.1 Link relationships](#sec-link-rel)
            1.  [D.4.1.1 alternate](#sec-alternate)
            2.  [D.4.1.2 marc21xml-record (deprecated)](#sec-marc21xml-record)
            3.  [D.4.1.3 mods-record (deprecated)](#sec-mods-record)
            4.  [D.4.1.4 onix-record (deprecated)](#sec-onix-record)
            5.  [D.4.1.5 record](#sec-record)
            6.  [D.4.1.6 voicing](#sec-voicing)
            7.  [D.4.1.7 xml-signature (deprecated)](#sec-xml-signature)
            8.  [D.4.1.8 xmp-record (deprecated)](#sec-xmp-record)
        2.  [D.4.2 Link properties](#sec-link-properties)
            1.  [D.4.2.1 onix](#sec-onix)
    5.  [D.5 Package rendering vocabulary](#app-rendering-vocab)
        1.  [D.5.1 Custom rendering properties](#sec-rendering-custom-properties)
    6.  [D.6 Manifest properties vocabulary](#app-item-properties-vocab)
        1.  [D.6.1 cover-image](#sec-cover-image)
        2.  [D.6.2 mathml](#sec-mathml)
        3.  [D.6.3 nav](#sec-nav-prop)
        4.  [D.6.4 remote-resources](#sec-remote-resources)
        5.  [D.6.5 scripted](#sec-scripted)
        6.  [D.6.6 svg](#sec-svg-prop)
        7.  [D.6.7 switch](#sec-switch)
    7.  [D.7 Spine properties vocabulary](#app-itemref-properties-vocab)
        1.  [D.7.1 page-spread-left](#sec-page-spread-left)
        2.  [D.7.2 page-spread-right](#sec-page-spread-right)
        3.  [D.7.3 Examples](#examples-itemref-properties)
    8.  [D.8 Media overlays vocabulary](#app-overlays-vocab)
        1.  [D.8.1 active-class](#sec-active-class)
        2.  [D.8.2 duration](#sec-duration)
        3.  [D.8.3 narrator](#sec-narrator)
        4.  [D.8.4 playback-active-class](#sec-playback-active-class)
18.  [E. Prefixed CSS properties](#css-prefixes)
    1.  [E.1 CSS writing modes](#sec-css-prefixed-writing-modes)
        1.  [E.1.1 The `-epub-text-orientation` property](#sec-css-prefixed-writing-modes-text-orientation)
        2.  [E.1.2 The `-epub-writing-mode` property](#sec-css-prefixed-writing-modes-writing-mode)
        3.  [E.1.3 The `-epub-text-combine-horizontal` and `-epub-text-combine` properties](#sec-css-prefixed-writing-modes-text-combine)
    2.  [E.2 CSS text level 3](#sec-css-prefixed-text)
        1.  [E.2.1 The `-epub-hyphens` property](#sec-css-prefixed-text-epub-hyphens)
        2.  [E.2.2 The `-epub-line-break` property](#sec-css-prefixed-text-epub-line-break)
        3.  [E.2.3 The `-epub-text-align-last` property](#sec-css-prefixed-text-epub-text-align-last)
        4.  [E.2.4 The `-epub-word-break` property](#sec-css-prefixed-text-epub-word-break)
        5.  [E.2.5 The `text-transform` property](#sec-css-prefixed-text-text-transform)
    3.  [E.3 CSS text decoration level 3](#sec-css-prefixed-text-decoration)
        1.  [E.3.1 The `-epub-text-emphasis-color` Property](#sec-css-prefixed-text-epub-text-emphasis-color)
        2.  [E.3.2 The `-epub-text-emphasis-position` property](#sec-css-prefixed-text-epub-text-emphasis-position)
        3.  [E.3.3 The `-epub-text-emphasis-style` property](#sec-css-prefixed-text-epub-text-emphasis-style)
        4.  [E.3.4 The `-epub-text-underline-position` property](#sec-css-prefixed-text-epub-text-underline-position)
19.  [F. The `viewport meta` tag](#app-viewport-meta)
    1.  [F.1 Introduction](#app-viewport-meta-intro)
    2.  [F.2 Syntax](#app-viewport-meta-syntax)
20.  [G. Schemas](#app-schemas)
    1.  [G.1 Package document schema](#app-package-schema)
    2.  [G.2 OCF schemas](#app-ocf-schema)
        1.  [G.2.1 Schema for `container.xml`](#app-schema-container)
        2.  [G.2.2 Schema for `encryption.xml`](#app-schema-encryption)
        3.  [G.2.3 Schema for `signatures.xml`](#app-schema-signatures)
    3.  [G.3 Media overlays schema](#app-schema-overlays)
21.  [H. Detailed examples](#app-examples)
    1.  [H.1 Resources](#publication-resources-example)
    2.  [H.2 Scripting contexts](#scripted-contexts-example)
    3.  [H.3 Packaged EPUB](#ocf-example)
    4.  [H.4 Clock values](#clock-examples)
22.  [I. Media type registrations](#app-media-types)
    1.  [I.1 The `application/oebps-package+xml` media type](#app-media-type-app-oebps-package)
    2.  [I.2 The `application/epub+zip` media type](#app-media-type)
23.  [J. Index](#index)
    1.  [J.1 Terms defined by this specification](#index-defined-here)
    2.  [J.2 Terms defined by reference](#index-defined-elsewhere)
24.  [K. Change log](#change-log)
25.  [L. Acknowledgements](#ack)
26.  [M. References](#references)
    1.  [M.1 Normative references](#normative-references)
    2.  [M.2 Informative references](#informative-references)

1\. Introduction
----------------

[](#sec-introduction)

### 1.1 Overview

[](#sec-intro-overview)

_This section is non-normative._

EPUB 3 has been widely adopted as the format for digital books (ebooks), and this revision continues to increase the format's capabilities to better support a wider range of publication requirements, including complex layouts, rich media and interactivity, and global typography features. The expectation is that publishers will utilize the EPUB 3 format for a broad range of content, including books, magazines, and educational, professional, and scientific publications.

This specification represents the core of EPUB 3 and includes the conformance requirements for [EPUB publications](#dfn-epub-publication) — the product of the standard. The other specifications that comprise EPUB 3 are as follows:

*   [EPUB 3 Reading Systems](https://www.w3.org/TR/epub-rs-33/#) \[[epub-rs-33](#bib-epub-rs-33 "EPUB Reading Systems 3.3")\] — defines the processing requirements for [EPUB reading systems](#dfn-epub-reading-system) — the applications that consume EPUB publications and present their content to users.
    
*   [EPUB Accessibility](https://www.w3.org/TR/epub-a11y-11/#) \[[epub-a11y-11](#bib-epub-a11y-11 "EPUB Accessibility 1.1")\] — defines accessibility conformance and discovery requirements for EPUB publications.
    

These specifications represent the formal list recognized as belonging to EPUB 3 and that contain functionality normatively referenced as part of the standard. The development of extension specifications periodically adds new functionality to EPUB publications. Features and functionality defined outside of core revisions to the standard, while not formally recognized in this specification, are nonetheless available for [EPUB creators](#dfn-epub-creator) and reading system developers to use.

The non-normative [EPUB 3 Overview](https://www.w3.org/TR/epub-overview-33/#) \[[epub-overview-33](#bib-epub-overview-33 "EPUB 3 Overview")\] provides a general introduction to EPUB 3. A list of technical changes from the previous version is also available in the [change log](#change-log).

### 1.2 Organization

[](#sec-intro-spec-org)

_This section is non-normative._

This section reviews the organization of this specification through the central product it defines: the [EPUB publication](#dfn-epub-publication).

An EPUB publication is, in its most basic sense, a bundle of resources with instructions on how to render those resources to present the content in a logical order. The types of resources that are allowed in EPUB publication, as well as restrictions on their use, are defined in [3\. Publication resources](#sec-publication-resources).

A ZIP-based archive with the file extension `.epub` bundles the EPUB publication's resources for distribution. As conformant ZIP archives, EPUB publications can be unzipped by many software programs, simplifying both their production and consumption.

The container format not only provides a means of determining that the zipped content represents an EPUB publication (the `mimetype` file), but also provides a universally named directory of non-normative resources (`/META-INF`). Key among these resources is the `container.xml` file, which directs reading systems to the available [package documents](#dfn-package-document). Refer to [4\. Open Container Format (OCF)](#sec-ocf) for more information about the container format.

An EPUB publication is typically represented by a single package document. This document includes metadata used by [reading systems](#dfn-epub-reading-system) to present the content to the user, such as the title and author for display in a bookshelf as well as rendering metadata (e.g., whether the content is reflowable or has a fixed layout). It also provides a manifest of resources and includes a [spine](#dfn-epub-spine) that lists the default sequence in which to render documents as a user progresses through the content. Refer to [5\. Package document](#sec-package-doc) for the requirements for the package document.

The actual content of an EPUB publication — what users are presented with when they begin reading — is built on the Open Web Platform and comes in two flavors: XHTML and SVG. Called [EPUB content documents](#dfn-epub-content-document), these documents typically reference many additional resources required for their proper rendering, such as images, audio and video clips, scripts, and style sheets.

Refer to [6\. EPUB content documents](#sec-contentdocs) for detailed information about the rules and requirements to produce EPUB content documents, and \[[epub-a11y-11](#bib-epub-a11y-11 "EPUB Accessibility 1.1")\] for accessibility requirements.

An EPUB publication also includes another key file called the [EPUB navigation document](#dfn-epub-navigation-document). This document provides critical navigation capabilities, such as the table of contents, that allow users to navigate the content quickly and easily. The navigation document is a specialized type of [XHTML content document](#dfn-xhtml-content-document) which also allows EPUB creators to use it in the content (i.e., avoiding one table of contents for machine processing and another for user consumption). Refer to [7\. EPUB navigation document](#sec-nav) for more information about this document.

EPUB publications by default are intended to reflow to fit the available screen space. It is also possible to create publications that have pixel-precise fixed layouts using images and/or CSS positioning. The metadata to control layouts are defined in [8\. Layout rendering control](#sec-rendering-control).

[Media overlay documents](#dfn-media-overlay-document) complement EPUB content documents. They provide declarative markup for synchronizing the text in EPUB content documents with prerecorded audio. The result is the ability to create a read-aloud experience where [reading systems](#dfn-epub-reading-system) highlight the text as it is narrated. Refer to [9\. Media overlays](#sec-media-overlays) for the definition of media overlay documents.

While conceptually simple, an EPUB publication is more than just a collection of HTML pages and dependent assets in a ZIP package as presented here. Additional information about the primary features and functionality that EPUB publications provide to enhance the reading experience is available from the referenced specifications, and a more general introduction to the features of EPUB 3 is provided in the non-normative \[[epub-overview-33](#bib-epub-overview-33 "EPUB 3 Overview")\].

Refer to \[[epub-rs-33](#bib-epub-rs-33 "EPUB Reading Systems 3.3")\] for the processing requirements for reading systems. Although it is not necessary that [EPUB creators](#dfn-epub-creator) read that document to create EPUB publications, an understanding of how reading systems present the content can help craft publications for optimal presentation to users.

### 1.3 Relationship to other specifications

[](#sec-intro-relations)

_This section is non-normative._

Caution

The technologies EPUB 3 builds on are constantly evolving. Some, typically referred to as "living" or "evergreen" standards, are subject to change daily and their impact on the validity of EPUB publications is immediate. Others are updated less frequently and the changes may not affect [EPUB publications](#dfn-epub-publication) until EPUB 3 undergoes a new revision.

In all cases, it is possible that previously valid features may become obsolete (e.g., due to a lack of support or because of security issues). [EPUB creators](#dfn-epub-creator) should therefore be cautious about using any feature without broad support and keep their [EPUB conformance checkers](#dfn-epub-conformance-checker) up to date.

#### 1.3.1 Relationship to HTML

[](#sec-overview-relations-html)

The \[[html](#bib-html "HTML Standard")\] standard is continuously evolving — there are no longer versioned releases of it. That standard, in turn, references various technologies that continue to evolve, such as MathML, SVG, CSS, and JavaScript.

The benefit of this approach for EPUB is that [EPUB publications](#dfn-epub-publication) always keep pace with changes to the web without the need for new revisions. [EPUB creators](#dfn-epub-creator), however, must keep track of the various changes to HTML and the technologies it references to ensure they keep their processes up to date.

The [XHTML profile defined by this specification](#sec-xhtml) inherits all definitions of semantics, structure and processing behaviors from HTML unless otherwise specified.

In addition, this specification [defines a set of extensions](#sec-xhtml-extensions) to the \[[html](#bib-html "HTML Standard")\] document model that EPUB creators may include in [XHTML content documents](#dfn-xhtml-content-document).

#### 1.3.2 Relationship to SVG

[](#sec-overview-relations-svg)

This specification does not reference a specific version of \[[svg](#bib-svg "SVG")\], but instead uses an undated reference. Whenever there is any ambiguity in this reference, the latest recommended specification is the authoritative reference.

This approach ensures that EPUB will always keep pace with changes to the SVG standard. [EPUB creators](#dfn-epub-creator), however, must keep track of changes to the SVG standard to ensure they keep their processes up to date.

#### 1.3.3 Relationship to CSS

[](#sec-overview-relations-css)

EPUB 3 supports CSS as defined by the CSS Working Group Snapshot \[[csssnapshot](#bib-csssnapshot "CSS Snapshot")\]. EPUB 3 also maintains some prefixed CSS properties, to ensure consistent support for global languages.

#### 1.3.4 Relationship to MathML

[](#sec-overview-relations-mathml)

EPUB 3 only supports [Presentation Markup](https://www.w3.org/TR/MathML3/chapter3.html) \[[mathml3](#bib-mathml3 "Mathematical Markup Language (MathML) Version 3.0 2nd Edition")\]. [Content Markup](https://www.w3.org/TR/MathML3/chapter4.html) is only allowed in [structured markup annotations](https://www.w3.org/TR/MathML3/chapter5.html#mixing.elements.annotation.xml).

#### 1.3.5 Relationship to SMIL

[](#sec-overview-relations-smil)

This specification relies on a subset of \[[smil3](#bib-smil3 "Synchronized Multimedia Integration Language (SMIL 3.0)")\], from which the media overlays elements and attributes defined in [9.2.2 Media overlay document definition](#sec-overlays-def) are derived.

#### 1.3.6 Relationship to URL

[](#sec-overview-relations-url)

This specification refers to the \[[url](#bib-url "URL Standard")\] standard for terminology and processing related to URLs expressed in [EPUB publications](#dfn-epub-publication). It is anticipated that new and revised web formats will adopt this standard, but until then this may put this specification in conflict with the internal requirements for some formats (e.g., valid relative paths), specifically with respect to the use of internationalized URLs. If a format does not allow internationalized URLs (i.e., URLs must conform to \[[rfc3986](#bib-rfc3986 "Uniform Resource Identifier (URI): Generic Syntax")\] or earlier), that requirement takes precedence within those resources.

### 1.4 Terminology

[](#sec-terminology)

This specification defines the following terms specific to EPUB 3.

Note

Only the first instance of a term in a section links to its definition.

codec

Codec refers to content that has intrinsic binary format qualities, such as video and audio media types designed for optimum compression or that provide optimized streaming capabilities.

container resource

A [publication resource](#dfn-publication-resource) that is located within the [EPUB container](#dfn-epub-container), as opposed to a [remote resource](#dfn-remote-resource) which is not.

Refer to [3.6 Resource locations](#sec-resource-locations) for media type-specific rules for resource locations.

container root URL

The [URL](https://url.spec.whatwg.org/#concept-url) \[[url](#bib-url "URL Standard")\] of the [root directory](#dfn-root-directory) representing the [OCF abstract container](#dfn-ocf-abstract-container). It is implementation specific, but EPUB creators must assume it has properties defined in [4.2.5 URLs in the OCF abstract container](#sec-container-iri).

content URL

The [URL](https://url.spec.whatwg.org/#concept-url) of a file or directory in the [OCF abstract container](#dfn-ocf-abstract-container), defined in [4.2.5 URLs in the OCF abstract container](#sec-container-iri).

core media type resource

A [publication resource](#dfn-publication-resource) that conforms to one of the MIME media types \[[rfc2046](#bib-rfc2046 "Multipurpose Internet Mail Extensions (MIME) Part Two: Media Types")\] listed in [3.2 Core media types](#sec-core-media-types) and, therefore, does not require the provision of a [fallback](#sec-foreign-resources) (cf. [foreign resource](#dfn-foreign-resource)).

The designation "core media type resource" only applies when a resource is used in the rendering of [EPUB content documents](#dfn-epub-content-document) and [foreign content documents](#dfn-foreign-content-document). A core media type resource cannot be used in the [spine](#dfn-epub-spine), for example, without a fallback unless it also has the media type of an EPUB content document.

EPUB conformance checker

An application that verifies the requirements of this specification against [EPUB publications](#dfn-epub-publication) and reports on their conformance.

EPUB container

OCF ZIP container

The ZIP-based packaging and distribution format for [EPUB publications](#dfn-epub-publication) defined in [4.3 OCF ZIP container](#sec-container-zip).

EPUB container and OCF ZIP container are synonymous.

EPUB content document

A [publication resource](#dfn-publication-resource) referenced from the [spine](#dfn-epub-spine) or a [manifest fallback chain](#dfn-manifest-fallback-chain) that conforms to either the [XHTML](#dfn-xhtml-content-document) or [SVG content document](#dfn-svg-content-document) definitions.

EPUB content documents contain all or part of the content of an [EPUB publication](#dfn-epub-publication) (i.e., the textual, visual and/or audio content).

[EPUB creators](#dfn-epub-creator) can include EPUB content documents in the spine without the provision of [fallbacks](#sec-foreign-resources).

EPUB creator

An individual, organization, or process that produces an [EPUB publication](#dfn-epub-publication).

Note

The creation of an EPUB publication often involves the work of many individuals, and may be split across multiple organizations (e.g., when a publisher outsources all or part of the work). Depending on the process used to produce an EPUB publication, responsibilities may fall on the organization (e.g., the publisher), the individuals preparing the publication (e.g., technical editors), or automatic procedures (e.g., as part of a publication pipeline). As a result, not every party or process may be responsible for ensuring every requirement is met, but there is always an EPUB creator responsible for the conformance of the final EPUB publication.

Previous versions of this specification referred to the EPUB creator as the Author.

EPUB manifest (or manifest)

The section of the [package document](#dfn-package-document) that lists the [publication resources](#dfn-publication-resource).

Refer to [5.6.1 The `manifest` element](#sec-manifest-elem) for more information.

EPUB navigation document

A specialization of the [XHTML content document](#dfn-xhtml-content-document) that contains human- and machine-readable global navigation information. The EPUB navigation document conforms to the constraints expressed in [7\. EPUB navigation document](#sec-nav).

EPUB publication

A logical document entity consisting of a set of interrelated [resources](#dfn-publication-resource) packaged in an [EPUB container](#dfn-epub-container).

An EPUB publication typically represents a single intellectual or artistic work, but this specification does not restrict the nature of the content.

EPUB reading system (or reading system)

A system that processes [EPUB publications](#dfn-epub-publication) for presentation to a user in a manner conformant with this specification.

EPUB spine (or spine)

The section of the [package document](#dfn-package-document) that defines an ordered list of [EPUB content documents](#dfn-epub-content-document) and [foreign content documents](#dfn-foreign-content-document). This list represents the default reading order of the [EPUB publication](#dfn-epub-publication).

Refer to [5.7.1 The `spine` element](#sec-spine-elem) for more information.

exempt resource

Exempt resources are a special class of [publication resources](#dfn-publication-resource) that reading systems are not required to support the rendering of, but [EPUB creators](#dfn-epub-creator) do not have to provide [fallbacks](#sec-foreign-resources) for.

Refer to [3.4 Exempt resources](#sec-exempt-resources) for more information.

file name

The name of any type of file within an [OCF abstract container](#dfn-ocf-abstract-container), whether a directory or a file within a directory.

file path

The file path of a file or directory is its full path relative to the [root directory](#dfn-root-directory), as defined by the algorithm specified in [4.2.4 Deriving file paths](#sec-file-names-to-path-names).

fixed-layout document

An [EPUB content document](#dfn-epub-content-document) with fixed dimensions directly referenced from the [spine](#dfn-epub-spine). Fixed-layout documents are designated `pre-paginated` in the [package document](#dfn-package-document), as defined in [8.2 Fixed layouts](#sec-fixed-layouts).

foreign content document

Any [publication resource](#dfn-publication-resource) referenced from a [spine](#dfn-epub-spine) ``[`itemref`](#dfn-itemref)`` element, or a [manifest fallback chain](#dfn-manifest-fallback-chain), that is not an [EPUB content document](#dfn-epub-content-document).

When a foreign content document is referenced from a spine `itemref` element, it requires a manifest fallback chain with at least one EPUB content document.

Note

With the exception of XHTML and SVG, all [core media type resources](#dfn-core-media-type-resource) are foreign content documents when referenced directly from the spine.

foreign resource

A [publication resource](#dfn-publication-resource) with a MIME media type \[[rfc2046](#bib-rfc2046 "Multipurpose Internet Mail Extensions (MIME) Part Two: Media Types")\] that does not match any of those listed in [3.2 Core media types](#sec-core-media-types). Foreign resources are subject to the fallback requirements defined in [3.3 Foreign resources](#sec-foreign-resources).

The designation "foreign resource" only applies to resources used in the rendering of [EPUB content documents](#dfn-epub-content-document) and [foreign content documents](#dfn-foreign-content-document).

Note

Foreign resource and foreign content document are not interchangeable terms. The types of resources considered foreign when used in the spine is greater than the types of resources considered foreign when used in [EPUB content documents](#sec-contentdocs).

linked resource

A resource that is only referenced from a [package document](#dfn-package-document) ``[`link`](#dfn-link)`` element (i.e., not also used in the rendering of an [EPUB publication](#dfn-epub-publication).

Linked resources are not [publication resources](#dfn-publication-resource) but may be stored in the [EPUB container](#dfn-epub-container). They do not require fallbacks.

media overlay document

An XML document that associates the [XHTML content document](#dfn-xhtml-content-document) with pre-recorded audio narration to provide a synchronized playback experience, as defined in [9\. Media overlays](#sec-media-overlays).

non-codec

Non-codec refers to content types that benefit from compression due to the nature of their internal data structure, such as file formats based on character strings (for example, HTML, CSS, etc.).

OCF abstract container

The OCF abstract container defines a file system model for the contents of the [OCF ZIP container](#dfn-ocf-zip-container), as defined in [4.2 OCF abstract container](#sec-container-abstract).

package document

A [publication resource](#dfn-publication-resource) that describes the rendering of an [EPUB publication](#dfn-epub-publication), as defined in [5\. Package document](#sec-package-doc). The package document carries meta information about the EPUB publication, provides a manifest of resources, and defines a default reading order.

publication resource

A resource that contains content or instructions that contribute to the logic and rendering of an [EPUB publication](#dfn-epub-publication). In the absence of this resource, [reading systems](#dfn-epub-reading-system) may not render the EPUB publication as the [EPUB creator](#dfn-epub-creator) intends. Examples of publication resources include the [package document](#dfn-package-document), [EPUB content documents](#dfn-epub-content-document), CSS Style Sheets, audio, video, images, embedded fonts, and scripts.

EPUB creators must list publication resources in the package document [manifest](#dfn-epub-manifest) and typically bundle them all in the [EPUB container](#dfn-epub-container) (the exception being they may locate resources listed in [3.6 Resource locations](#sec-resource-locations) outside the EPUB container).

Note

Resources on the web identified in outbound hyperlinks (e.g., referenced from the `href` attribute of an \[[html](#bib-html "HTML Standard")\] `[a](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element)` element) are not publication resources.

[Data urls](#sec-data-urls) are also not publication resources — they are considered part of the resource they are embedded in.

remote resource

A [publication resource](#dfn-publication-resource) that is located outside of the [EPUB container](#dfn-epub-container), typically on the web.

Publication resources within the EPUB container are referred to as [container resources](#dfn-container-resource).

Refer to [3.6 Resource locations](#sec-resource-locations) for media type specific rules for resource locations.

root directory

The root directory represents the base of the [OCF abstract container](#dfn-ocf-abstract-container) file system. This directory is [virtual in nature](https://www.w3.org/TR/epub-rs-33/#confreq-zip-rootdir).

scripted content document

An [EPUB content document](#dfn-epub-content-document) that includes scripting or an [XHTML content document](#dfn-xhtml-content-document) that contains \[[html](#bib-html "HTML Standard")\] `[form](https://html.spec.whatwg.org/multipage/forms.html#the-form-element)` elements.

Refer to [6.3.2 Scripting](#sec-scripted-content) for more information.

SVG content document

An [EPUB content document](#dfn-epub-content-document) that conforms to the constraints expressed in [6.2 SVG content documents](#sec-svg).

synthetic spread

The rendering of two adjacent pages simultaneously on a device screen.

top-level content document

An [EPUB content document](#dfn-epub-content-document) or [foreign content document](#dfn-foreign-content-document) referenced from the [spine](#dfn-epub-spine), whether directly or via a [fallback chain](#sec-manifest-fallbacks).

unique identifier

The primary identifier for an [EPUB publication](#dfn-epub-publication). The unique identifier is the [value](#dfn-value) of the ``[`dc:identifier`](#dfn-dc-identifier)`` element specified by the [`unique-identifier` attribute](#attrdef-package-unique-identifier) in the [package document](#dfn-package-document).

Significant revision, abridgement, etc. of the content requires a new unique identifier.

viewport

The region of an [EPUB reading system](#dfn-epub-reading-system) in which an [EPUB publication](#dfn-epub-publication) is rendered visually to a user.

XHTML content document

An [EPUB content document](#dfn-epub-content-document) that conforms to the profile of \[[html](#bib-html "HTML Standard")\] defined in [6.1 XHTML content documents](#sec-xhtml).

XHTML content documents use the [XML syntax](https://html.spec.whatwg.org/multipage/#the-xhtml-syntax) defined in \[[html](#bib-html "HTML Standard")\].

### 1.5 Conformance

[](#conformance)

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The key words _MAY_, _MUST_, _MUST NOT_, _OPTIONAL_, _RECOMMENDED_, _REQUIRED_, _SHOULD_, and _SHOULD NOT_ in this document are to be interpreted as described in [BCP 14](https://datatracker.ietf.org/doc/html/bcp14) \[[RFC2119](#bib-rfc2119 "Key words for use in RFCs to Indicate Requirement Levels")\] \[[RFC8174](#bib-rfc8174 "Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words")\] when, and only when, they appear in all capitals, as shown here.

All algorithm explanations are _non-normative_.

### 1.6 Authoring shorthands

[](#sec-intro-shorthands)

_This section is non-normative._

In [package document](#dfn-package-document) metadata examples, [reserved prefixes](#sec-metadata-reserved-prefixes) are used without declaration.

References to Dublin Core elements \[[dcterms](#bib-dcterms "DCMI Metadata Terms")\] use the `dc:` prefix. This prefix must be declared in the [package document](#dfn-package-document) for their use to be valid (`xmlns:dc="http://purl.org/dc/elements/1.1/"`)

The `epub` namespace prefix \[[xml-names](#bib-xml-names "Namespaces in XML 1.0 (Third Edition)")\] is also used on elements and attributes without always having an explicit declaration (`xmlns:epub="http://www.idpf.org/2007/ops"`).

2\. EPUB publication conformance
--------------------------------

[](#sec-epub-conf)

An [EPUB publication](#dfn-epub-publication):

*   _MUST_ define at least one rendering of its content as follows:
    
    *   _MUST_ contain a [package document](#dfn-package-document) that conforms to [5\. Package document](#sec-package-doc) and meet all [publication resource](#dfn-publication-resource) requirements for the package document.
        
    *   _MUST_ contain an [EPUB navigation document](#dfn-epub-navigation-document) that conforms to [7\. EPUB navigation document](#sec-nav).
        
*   _SHOULD_ conform to the accessibility requirements defined in \[[epub-a11y-11](#bib-epub-a11y-11 "EPUB Accessibility 1.1")\].
    
*   _MUST_ be packaged in an [EPUB container](#dfn-epub-container) as defined in [4\. Open Container Format (OCF)](#sec-ocf).
    

In addition, all publication resources _MUST_ adhere to the requirements in [3\. Publication resources](#sec-publication-resources).

The rest of this specification covers specific conformance details.

### 2.1 Conformance checking

[](#sec-conformance-checking)

_This section is non-normative._

Due to the complexity of this specification and number of technologies used in [EPUB publications](#dfn-epub-publication), [EPUB creators](#dfn-epub-creator) are advised to use an [EPUB conformance checker](#dfn-epub-conformance-checker) to verify the conformance of their content.

[EPUBCheck](https://www.w3.org/publishing/epubcheck/) is the de facto EPUB conformance checker used by the publishing industry and has been updated with each new version of EPUB. It is integrated into a number of authoring tools and also available in alternative interfaces and other languages (for more information, refer to its [Apps and Tools page](https://www.w3.org/publishing/epubcheck/docs/apps-and-tools/)).

When verifying their EPUB publications, EPUB creators should ensure they do not violate the requirements of this specification (practices identified by the keywords "_MUST_", "_MUST NOT_", and "_REQUIRED_"). These types of issues will often result in EPUB publications not rendering or rendering in inconsistent ways. These issues are typically reported as errors or critical errors.

EPUB creators should also ensure that their EPUB publications do not violate the recommendations of this specification (practices identified by the keywords "_SHOULD_", "_SHOULD NOT_", and "_RECOMMENDED_"). Failure to follow these practices does not result in an invalid EPUB publication but may lead to interoperability problems and other issues that impact the user reading experience. These issues are typically reported as warnings.

Note

Vendors, distributors, and other retailers of EPUB publications should consider the importance of recommended practices before basing their acceptance or rejection on a zero-issue outcome from an EPUB conformance checker. There will be legitimate reasons why EPUB creators cannot follow recommended practices in all cases.

3\. Publication resources
-------------------------

[](#sec-publication-resources)

### 3.1 Introduction

[](#sec-pub-res-intro)

_This section is non-normative._

An [EPUB publication](#dfn-epub-publication) is made up of many different categories of resources, not all of which are mutually exclusive. Some resources are [publication resources](#dfn-publication-resource), some are not. Some publication resources are allowed in the [spine](#dfn-epub-spine) by default, while all others require fallbacks. Some resources can be used in rendering [EPUB content documents](#dfn-epub-content-document), while others can only be used with fallbacks.

Trying to understand these differences by reading the technical definitions of each category of resource can be complex. To make the categorizations easier to understand, this introduction uses the concept of different planes to explain how resources are grouped and referred to.

The three planes are:

*   The [manifest plane](#dfn-manifest-plane) — The manifest plane holds all the resources of the EPUB publication (namely, publication resources and [linked resources](#dfn-linked-resource)).
*   The [spine plane](#dfn-spine-plane) — The spine plane holds only the resources used in rendering the spine (namely, EPUB content documents and [foreign content documents](#dfn-foreign-content-document)).
*   The [content plane](#dfn-content-plane) — The content plane holds only the resources used in the rendering of EPUB and foreign content documents (namely, [core media type resources](#dfn-core-media-type-resource), [foreign resources](#dfn-foreign-resource) and [exempt resources](#dfn-exempt-resource)).

The same resource may exist on more than one plane and will be referred to differently in this specification depending on which plane is being discussed. For example, a core media type resource used in the rendering of an EPUB content document (on the content plane) may also be a foreign content document if it is also listed in the spine (the spine plane).

The following sections describe these planes in more detail.

Note

Refer to [H.1 Resources](#publication-resources-example) for a detailed example showing how resources fit into the different planes.

#### 3.1.1 The manifest plane

[](#sec-manifest-plane)

To manifest plane defines all the resources of an [EPUB publication](#dfn-epub-publication). It is analogous to the [package document](#dfn-package-document) [manifest](#dfn-epub-manifest), but includes resources not present in that list.

The primary resources in this group are designated [publication resources](#dfn-publication-resource), which are all the resources used in rendering an EPUB publication to the user. [EPUB creators](#dfn-epub-creator) always have to list these resources in the ``[`manifest`](#dfn-manifest)`` element.

Publication resources are further classified by their use(s) in the [spine plane](#dfn-spine-plane) and [content plane](#dfn-content-plane).

The manifest plane also contains a set of [linked resources](#dfn-linked-resource). These resources are tangential to the direct rendering. They include, for example, metadata records and links to external content (e.g., where to purchase an EPUB publication).

Unlike publication resources, they are not listed in the package document manifest (i.e., because they are not essential to rendering the EPUB publication). They are instead defined in ``[`link`](#dfn-link)`` elements in the package document metadata. These elements define their nature and purpose similar to how manifest ``[`item`](#dfn-item)`` elements define publication resource. (In this way, they are like an extension of the manifest.)

Refer to [5.5.6 The `link` element](#sec-link-elem) for more information about linked resources.

Resources in the manifest plane are also sometimes broken down by where they are located. Although most publication resources have to be located in the EPUB container (called [container resources](#dfn-container-resource)), EPUB 3 allows [audio, video, font and script data resources](#sec-resource-locations) to be hosted outside the container. These exceptions were made to speed up the download and loading of EPUB publications, as these resources are typically quite large, and, in the case of fonts, not essential to the presentation. When remotely hosted, these publication resources are referred to as [remote resources](#dfn-remote-resource).

Since linked resources are not essential to the rendering of an EPUB publication, there are no requirements on where they are located and consequently no special naming of them based on their location. They may be located within the EPUB container or outside it.

Note

Hyperlinked content outside the EPUB container (e.g., web pages) are not publication resources, and consequently are not listed in the manifest. Reading systems will normally open these links in a separate browser instance, not as part of the EPUB publication.

#### 3.1.2 The spine plane

[](#sec-spine-plane)

The spine plane defines resources used in the default reading order established by the [spine](#dfn-epub-spine), which includes both [linear and non-linear content](#attrdef-itemref-linear). The spine instructs [reading systems](#dfn-epub-reading-system) on how to load these resources as the user progresses through the [EPUB publication](#dfn-epub-publication). Although many resources may be bundled in an [EPUB container](#dfn-epub-container), they are not all allowed by default in the spine.

EPUB 3 defines a special class of resources called [EPUB content documents](#dfn-epub-content-document) that [EPUB creators](#dfn-epub-creator) can use in the spine without any restrictions. EPUB content documents encompass both [XHTML content documents](#dfn-xhtml-content-document) and [SVG content documents](#dfn-svg-content-document).

To use any other type of resource in the spine, called a [foreign content document](#dfn-foreign-content-document), requires including a fallback to an EPUB content document. This extensibility model allows EPUB creators to experiment with formats while ensuring that reading systems are always able to render something for the user to read, as there is no guarantee of support for foreign content documents.

A mechanism called [manifest fallbacks](#sec-manifest-fallbacks) allows EPUB creators to provide fallbacks for foreign content documents. In this model, the [manifest](#dfn-epub-manifest) entry for the foreign content document must include a [`fallback` attribute](#attrdef-item-fallback) that points to the next possible resource for reading systems to try when they do not support its format. Although not common, a fallback resource can specify another fallback, thereby making chains many resources deep. The one requirement is that there must be at least one EPUB content document in a [manifest fallback chain](#dfn-manifest-fallback-chain).

Although they are not directly listed in the spine, all of the resources in the fallback chain are considered part of the spine, and by extension part of the spine plane, since any may be used by a reading system.

Refer to [3.5.1 Manifest fallbacks](#sec-manifest-fallbacks) for more information.

Caution

Although manifest fallbacks fulfill the technical requirements of EPUB, there is little practical support for them in reading systems. Their use is strongly discouraged as it can lead to unreadable publications.

Note

It is possible to provide manifest fallbacks for EPUB content documents, but this is not required or common. For example, a [scripted content document](#dfn-scripted-content-document) could have a fallback to an unscripted alternative for reading systems that do not support scripting.

#### 3.1.3 The content plane

[](#sec-content-plane)

The content plane classifies resources that are used when rendering [EPUB content documents](#dfn-epub-content-document) and [foreign content documents](#dfn-foreign-content-document). These types of resources include embedded media, CSS style sheets, scripts, and fonts. These resources fall into three categories based on their reading system support: [core media type resources](#dfn-core-media-type-resource), [foreign resources](#dfn-foreign-resource), and [exempt resources](#dfn-exempt-resource).

A core media type resource is one that [reading systems](#dfn-epub-reading-system) have to support, so it can be used without restriction in EPUB or foreign content documents. For more information about core media type resources, refer to [3.2 Core media types](#sec-core-media-types).

Note

Being a core media type resource does not mean that reading systems will always render the resource, as not all reading systems support all features of EPUB 3. A reading system without a [viewport](#dfn-viewport), for example, will not render visual content such as images.

The opposite of core media type resources are foreign resources. These are resources that reading systems are not guaranteed to support the rendering of. As a result, similar to how using foreign content documents in the spine requires fallbacks to ensure their rendering, using foreign resources in content documents also requires fallbacks. These fallbacks are provided in one of two ways: using the capabilities of the host format or via manifest fallbacks.

The preferred method is to use the fallback capabilities of the host format. Many HTML elements, for example, have intrinsic fallback capabilities. One example is the `[picture](https://html.spec.whatwg.org/multipage/embedded-content.html#the-picture-element)` element \[[html](#bib-html "HTML Standard")\], which allows [EPUB creators](#dfn-epub-creator) to specify multiple alternative image formats.

If an intrinsic fallback method is not available, it is also possible to use manifest fallbacks, but this method, as [cautioned against](#caution-fallbacks) in the previous section, is discouraged. For more information about foreign resources, refer to [3.3 Foreign resources](#sec-foreign-resources).

Falling between core media type resources and foreign resources are exempt resources. These are most closely associated with foreign resources, as there is no guarantee that reading systems will render them. But like core media types, they do not require fallbacks.

Exempt resources tend to address specific cases for which there are no core media types defined, but for which providing a fallback would prove cumbersome or unnecessary. These include embedding video, adding accessibility tracks, and linking to resources from the \[[html](#bib-html "HTML Standard")\] [`link`](https://html.spec.whatwg.org/multipage/#the-link-element) element.

Refer to [3.4 Exempt resources](#sec-exempt-resources) for more information about these exceptions.

Note

A common point of confusion arising from core media type resources is the listing of XHTML and SVG as core media type resources with the requirement the markup conform to their respective EPUB content document definitions. This allows EPUB creators to embed both XHTML and SVG documents in EPUB content documents while keeping consistent requirements for authoring and reading system support.

In practice, it means that EPUB creators can put XHTML and SVG core media type resources in the spine without any modification or fallback (they are also conforming XHTML and SVG content documents), but this is a unique case. All other core media type resources become foreign content documents when used in the spine (i.e., foreign content documents include all foreign resources and all core media type resources except for XHTML and SVG).

### 3.2 Core media types

[](#sec-core-media-types)

[EPUB creators](#dfn-epub-creator) _MAY_ include [publication resources](#dfn-publication-resource) that conform to the MIME media type \[[rfc2046](#bib-rfc2046 "Multipurpose Internet Mail Extensions (MIME) Part Two: Media Types")\] specifications defined in the following table without fallbacks when they are used in [EPUB content documents](#dfn-epub-content-document) and [foreign content documents](#dfn-foreign-content-document). These resources are classified as [core media type resources](#dfn-core-media-type-resource).

With the exception of [XHTML content documents](#dfn-xhtml-content-document) and [SVG content documents](#dfn-svg-content-document), EPUB creators _MUST_ provide [manifest fallbacks](#sec-manifest-fallbacks) for core media type resources referenced directly from the [spine](#dfn-epub-spine). In this case, they are [foreign content documents](#dfn-foreign-content-document).

The columns in the table represent the following information:

*   **Media Type**—The MIME media type \[[rfc2046](#bib-rfc2046 "Multipurpose Internet Mail Extensions (MIME) Part Two: Media Types")\] used to represent the given publication resource in the [manifest](#dfn-epub-manifest).
    
    If the table lists more than one media type, the first one is the preferred media type. EPUB creators should use the preferred media type for all new EPUB publications.
    
*   **Content Type Definition**—The specification to which the given core media type resource must conform.
*   **Applies to**—The publication resource type(s) that the Media Type and Content Type Definition applies to.

| Media Type | Content Type Definition | Applies to |
| --- | --- | --- |
| Images |
| `image/gif` | \[[gif](#bib-gif "Graphics Interchange Format")\] | GIF Images |
| `image/jpeg` | \[[jpeg](#bib-jpeg "JPEG File Interchange Format")\] | JPEG Images |
| `image/png` | \[[png](#bib-png "Portable Network Graphics (PNG) Specification (Third Edition)")\] | PNG Images |
| `image/svg+xml` | [SVG content documents](#sec-svg) | SVG documents |
| `image/webp` | \[[rfc9649](#bib-rfc9649 "WebP Image Format")\] | WebP Images |
| Audio |
| `audio/mpeg` | \[[mp3](#bib-mp3 "Information technology — Coding of moving pictures and associated audio for digital storage media at up to about 1,5 Mbit/s — Part 3: Audio")\] | MP3 audio |
| `audio/mp4` | \[[mpeg4-audio](#bib-mpeg4-audio "Information technology — Coding of audio-visual objects — Part 3: Audio")\], \[[mp4](#bib-mp4 "Information technology — Coding of audio-visual objects — Part 14: MP4 file format")\] | AAC LC audio using MP4 container |
| `audio/ogg; codecs=opus` | \[[rfc7845](#bib-rfc7845 "Ogg Encapsulation for the Opus Audio Codec")\] | OPUS audio using OGG container |
| Style |
| `text/css` | [CSS Style Sheets](#sec-css) | CSS Style Sheets. |
| Fonts |
| 
1.  `font/ttf`
2.  `application/font-sfnt`

 | \[[truetype](#bib-truetype "TrueType™ Reference Manual")\] | TrueType fonts |
| 

1.  `font/otf`
2.  `application/font-sfnt`
3.  `application/vnd.ms-opentype`

 | \[[opentype](#bib-opentype "OpenType specification")\] | OpenType fonts |
| 

1.  `font/woff`
2.  `application/font-woff`

 | \[[woff](#bib-woff "WOFF File Format 1.0")\] | WOFF fonts |
| `font/woff2` | \[[woff2](#bib-woff2 "WOFF File Format 2.0")\] | WOFF2 fonts |
| Other |
| `application/xhtml+xml` | [XHTML content documents](#sec-xhtml) | HTML documents that use the [XML syntax](https://html.spec.whatwg.org/multipage/#the-xhtml-syntax) \[[html](#bib-html "HTML Standard")\]. |
| 

1.  `application/javascript`
2.  `application/ecmascript`
3.  `text/javascript`

 | \[[rfc4329](#bib-rfc4329 "Scripting Media Types")\] | Scripts. |
| `application/x-dtbncx+xml` | \[[opf-201](#bib-opf-201 "Open Packaging Format 2.0.1")\] | The [legacy](#sec-pkg-legacy-intro) NCX. |
| `application/smil+xml` | [Media overlays](#sec-media-overlays) | EPUB media overlay documents |

Note

Inclusion as a core media type resource does not mean that all reading systems will support the rendering of a resource. Reading system support also depends on the capabilities of the application (e.g., a reading system with a [viewport](#dfn-viewport) must support image core media type resources, but a reading system without a viewport does not). Refer to [Core media types](https://www.w3.org/TR/epub-rs-33/#sec-epub-rs-conf-cmt) \[[epub-rs-33](#bib-epub-rs-33 "EPUB Reading Systems 3.3")\] for more information about which reading systems rendering capabilities require support for which core media type resources.

The Working Group typically only includes formats as core media type resources when they have broad support in web browser cores — the rendering engines that EPUB 3 reading systems build upon. They are an agreement between reading system developers and EPUB creators to ensure the predictability of rendering of EPUB publications.

### 3.3 Foreign resources

[](#sec-foreign-resources)

A [foreign resource](#dfn-foreign-resource), unlike a [core media type resource](#sec-core-media-types) is one which is not guaranteed [reading system](#dfn-epub-reading-system) support when used in an [EPUB content document](#dfn-epub-content-document) or [foreign content document](#dfn-foreign-content-document).

[EPUB creators](#dfn-epub-creator) _MUST_ provide fallbacks for foreign resources, where fallbacks take one of the following forms:

*   intrinsic fallback mechanisms provided by the host format (e.g., \[[html](#bib-html "HTML Standard")\] elements often provide the ability to reference more than one media type or to display an alternate embedded message when a media type cannot be rendered); or
    
*   [manifest fallback chains](#sec-manifest-fallbacks) defined on ``[`item`](#dfn-item)`` elements in the [package document](#dfn-package-document).
    

Note

Refer to the \[[html](#bib-html "HTML Standard")\] and \[[svg](#bib-svg "SVG")\] specifications for the intrinsic fallback capabilities their elements provide.

[3.5.2 Intrinsic fallbacks](#sec-intrinsic-fallbacks) also provides additional information about how fallbacks are interpreted for specific elements.

### 3.4 Exempt resources

[](#sec-exempt-resources)

An [exempt resource](#dfn-exempt-resource) shares properties with both [foreign resources](#dfn-foreign-resource) and [core media type resources](#dfn-core-media-type-resource). It is most similar to a [foreign resource](#dfn-foreign-resource) in that it is not guaranteed [reading system](#dfn-epub-reading-system) support, but, like a core media type resource, does not require a fallback.

There are only a small set of special cases for exempt resources. Video, for example, are exempt from fallbacks because there is no consensus on a core media type video format at this time (i.e., there is no format to fallback to). Similarly, audio and video tracks are exempt to allow [EPUB creators](#dfn-epub-creator) to meet accessibility requirements using whatever format reading systems support best.

The following list details cases of content-specific exempt resources, including any restrictions on where EPUB creators can use them.

Fonts

All font resources not already covered as [font core media types](#cmt-grp-font) are exempt resources.

This exemption allows EPUB creators to use any font format without a fallback, regardless of reading system support expectations, as CSS rules will ensure a fallback font in case of no support.

Refer to the [reading system support requirements for fonts](https://www.w3.org/TR/epub-rs-33/#confreq-css-rs-fonts) \[[epub-rs-33](#bib-epub-rs-33 "EPUB Reading Systems 3.3")\] for more information.

Linked resources

Any resource referenced from the \[[html](#bib-html "HTML Standard")\] [`link`](https://html.spec.whatwg.org/multipage/#the-link-element) element that is not already a core media type resource (e.g., CSS style sheets) is an exempt resource.

Tracks

All audio and video tracks (e.g., \[[webvtt](#bib-webvtt "WebVTT: The Web Video Text Tracks Format")\] captions, subtitles and descriptions) referenced from the \[[html](#bib-html "HTML Standard")\] `[track](https://html.spec.whatwg.org/multipage/media.html#the-track-element)` element are exempt resources.

Video

All video codecs referenced from the \[[html](#bib-html "HTML Standard")\] `[video](https://html.spec.whatwg.org/multipage/media.html#video)` — including any child `[source](https://html.spec.whatwg.org/multipage/embedded-content.html#the-source-element)` elements — are exempt resources.

Note

Although reading systems are encouraged to support at least one of the H.264 \[[h264](#bib-h264 "H.264 : Advanced video coding for generic audiovisual services")\] and VP8 \[[rfc6386](#bib-rfc6386 "VP8 Data Format and Decoding Guide")\] video codecs, support for video codecs is not a conformance requirement. EPUB creators must consider factors such as breadth of adoption, playback quality, and technology royalties when deciding which video formats to include.

Note

The exemptions made above do not apply to the [spine](#dfn-epub-spine). If an exempt resource is used in the spine, and it is not also an [EPUB content document](#dfn-epub-content-document), it will require a fallback in that context.

In addition to the content-specific exemptions, a resource is classified as an exempt resource if:

*   it is not referenced from a spine ``[`itemref`](#dfn-itemref)`` element (i.e., used as a [foreign content document](#dfn-foreign-content-document)); **_and_**
    
*   it is not embedded directly in EPUB content documents (e.g., via \[[html](#bib-html "HTML Standard")\] [embedded content](https://html.spec.whatwg.org/multipage/dom.html#embedded-content-category) and \[[svg](#bib-svg "SVG")\] [`image`](https://www.w3.org/TR/SVG/embedded.html#ImageElement) and [`foreignObject`](https://www.w3.org/TR/SVG/embedded.html#ForeignObjectElement) elements).
    

This exemption allows EPUB creators to include resources in the [EPUB container](#dfn-epub-container) that are not for use by EPUB reading systems. The primary case for this exemption is to allow data files to travel with an [EPUB publication](#dfn-epub-publication), whether for scripts to use in their constituent EPUB content documents or for external applications to use (e.g., a scientific journal might include a data set with instructions on how to extract it from the EPUB container).

It also allows EPUB creators to use foreign resources in foreign content documents without reading systems or [EPUB conformance checkers](#dfn-epub-conformance-checker) having to understand the fallback capabilities of those resources (i.e., the requirement for a fallback for the foreign content document covers any rendering issues within it). As the resource is not referenced from an EPUB content document, it automatically becomes exempt from fallbacks.

### 3.5 Resource fallbacks

[](#sec-resource-fallbacks)

#### 3.5.1 Manifest fallbacks

[](#sec-manifest-fallbacks)

Manifest fallbacks are a feature of the [package document](#dfn-package-document) that create a manifest fallback chain for a [publication resource](#dfn-publication-resource), allowing [reading systems](#dfn-epub-reading-system) to select an alternative format they can render.

Fallback chains are created using the [`fallback` attribute](#attrdef-item-fallback) on [manifest](#dfn-epub-manifest) ``[`item`](#dfn-item)`` elements. This attribute references the [ID](https://www.w3.org/TR/xml/#id) \[[xml](#bib-xml "Extensible Markup Language (XML) 1.0 (Fifth Edition)")\] of another manifest `item` that is a fallback for the current `item`. The ordered list of all the references that a reading system can reach, starting from a given `item`'s `fallback` attribute, represents the full fallback chain for that `item`. This chain also represents the [EPUB creator's](#dfn-epub-creator) preferred fallback order.

There are two cases for manifest fallbacks:

Spine fallbacks

EPUB creators _MUST_ specify a fallback chain for a [foreign content document](#dfn-foreign-content-document) to ensure that reading systems can always render the [spine](#dfn-epub-spine) item. In this case, the chain _MUST_ contain at least one [EPUB content document](#dfn-epub-content-document).

EPUB creators _MAY_ provide fallbacks for EPUB content documents (e.g., to provide a [fallback for scripted content](#confreq-cd-scripted-flbk)).

When a fallback chain includes more than one EPUB content document, EPUB creators can use the [`properties` attribute](#attrdef-properties) to differentiate the purpose of each.

Content fallbacks

Note

The original purpose for content fallbacks was to specify fallback images for the \[[html](#bib-html "HTML Standard")\] `[img](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element)` element. As HTML now has intrinsic fallback mechanism for images, the use of content fallbacks is strongly discouraged. EPUB creators should always use the intrinsic fallback capabilities of \[[html](#bib-html "HTML Standard")\] and \[[svg](#bib-svg "SVG")\] to provide fallback content.

EPUB creators _MUST_ provide a content fallback for [foreign resources](#dfn-foreign-resource) when the elements that reference them do not have intrinsic fallback capabilities. In this case, the fallback chain _MUST_ contain at least one [core media type resource](#dfn-core-media-type-resource).

EPUB creators _MAY_ also provide manifest fallbacks for core media type resources (e.g., to allow reading systems to select from more than one image format).

Regardless of the type of manifest fallback specified, fallback chains _MUST NOT_ contain self-references or circular references to `item` elements in the chain.

Note

As it is not possible to use manifest fallbacks for resources represented in [data URLs](#sec-data-urls), EPUB creators can only represent foreign resources as data URLs where an intrinsic fallback mechanism is available.

#### 3.5.2 Intrinsic fallbacks

[](#sec-intrinsic-fallbacks)

The following sections provide additional clarifications about the intrinsic fallback requirements of specific elements.

##### 3.5.2.1 HTML `audio` and `video` fallbacks

[](#sec-fallbacks-audio)

[EPUB creators](#dfn-epub-creator) _MUST NOT_ use embedded \[[html](#bib-html "HTML Standard")\] [flow content](https://html.spec.whatwg.org/multipage/dom.html#flow-content-2) within a [media element](https://html.spec.whatwg.org/multipage/#media-elements) (i.e, [`audio`](https://html.spec.whatwg.org/multipage/#the-audio-element) or [`video`](https://html.spec.whatwg.org/multipage/#the-video-element)) as an intrinsic fallback for audio [foreign resources](#dfn-foreign-resource). Only child `[source](https://html.spec.whatwg.org/multipage/embedded-content.html#the-source-element)` elements \[[html](#bib-html "HTML Standard")\] provide intrinsic fallback capabilities.

Only older [reading systems](#dfn-epub-reading-system) that do not recognize the `audio` or the `video` elements (e.g., EPUB 2 reading systems) will render the embedded content. When reading systems support these elements but not the available media formats, they do not render the embedded content for the user.

Note

The requirement for fallbacks only applies to audio foreign resources referenced from `audio` and `video` elements. Fallbacks are not required for video resources; they are [exempt resources](#dfn-exempt-resource).

##### 3.5.2.2 HTML `img` fallbacks

[](#sec-fallbacks-img)

Due to the variety of sources that [EPUB creators](#dfn-epub-creator) can specify in the \[[html](#bib-html "HTML Standard")\] `[img](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element)` element, the following fallback conditions apply to its use:

*   If it is the child of a `[picture](https://html.spec.whatwg.org/multipage/embedded-content.html#the-picture-element)` element:
    
    *   it _MUST_ reference core media type resources from its `src` and `srcset` attributes, when EPUB creators specify those attributes; and
    *   each sibling `[source](https://html.spec.whatwg.org/multipage/embedded-content.html#the-source-element)` element _MUST_ reference a [core media type resource](#dfn-core-media-type-resource) from its `` `[src](https://html.spec.whatwg.org/multipage/embedded-content.html#attr-source-src)` `` and `` `[srcset](https://html.spec.whatwg.org/multipage/embedded-content.html#attr-source-srcset)` `` attributes unless it specifies the MIME media type \[[rfc2046](#bib-rfc2046 "Multipurpose Internet Mail Extensions (MIME) Part Two: Media Types")\] of a [foreign resource](#dfn-foreign-resource) in its `` `[type](https://html.spec.whatwg.org/multipage/embedded-content.html#attr-source-type)` `` attribute.
*   Otherwise, it _MAY_ reference foreign resources in its `` `[src](https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-src)` `` and `` `[srcset](https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-srcset)` `` attributes provided EPUB creators define a [manifest fallback](#sec-manifest-fallbacks).

##### 3.5.2.3 HTML `script` element

[](#html-script-element)

Although data blocks have a separate MIME media type \[[rfc2046](#bib-rfc2046 "Multipurpose Internet Mail Extensions (MIME) Part Two: Media Types")\] from their containing [XHTML content document](#dfn-xhtml-content-document), it is not possible to provide intrinsic fallbacks as no such mechanisms are specified for the \[[html](#bib-html "HTML Standard")\] `[script](https://html.spec.whatwg.org/multipage/scripting.html#script)` element. It is also not possible to provide manifest fallbacks because data blocks cannot be defined as standalone files in the EPUB container but are always embedded as inline `script` elements.

But, as the `script` element does not represent user content — [data blocks](https://html.spec.whatwg.org/multipage/#data-block) are not rendered unless manipulated by script, and content rendered by scripts already has [core media type requirements](#confreq-cd-scripted-flbk) — requiring fallbacks for the raw data does not serve a useful purpose.

Consequently, to ensure that [EPUB creators](#dfn-epub-creator) can include data blocks for scripting purposes, they are exempt from fallback requirements.

Note

This exemption aligns data blocks with the [exemption for data files](#confreq-foreign-no-fallback).

Note

\[[svg](#bib-svg "SVG")\] does not define data blocks as of publication, but the same exclusion would apply if a future update adds the concept.

### 3.6 Resource locations

[](#sec-resource-locations)

[EPUB creators](#dfn-epub-creator) _MAY_ host the following types of [publication resources](#dfn-publication-resource) outside the [EPUB container](#dfn-epub-container):

*   [Audio resources](#cmt-grp-audio).
    
*   [Video resources](#exempt-video).
    
*   Resources retrieved via scripting APIs (e.g., XmlHttpRequest \[[xhr](#bib-xhr "XMLHttpRequest Standard")\] and Fetch \[[fetch](#bib-fetch "Fetch Standard")\]).
    
*   [Font resources](#cmt-grp-font).
    

EPUB creators _MUST_ store all other resources within the EPUB container.

Storing all resources inside the EPUB container is strongly encouraged whenever possible as it allows users access to the entire presentation regardless of connectivity status.

When resources have to be located outside the EPUB container, EPUB creators are _RECOMMENDED_ to reference them via the secure `https` URI scheme \[[rfc9110](#bib-rfc9110 "HTTP Semantics")\] to limit the threat of exposing their publications, and users, to network attacks. [Reading systems](#dfn-epub-reading-system) might not load [remote resources](#dfn-remote-resource) referenced using insecure schemes such as `http`.

These rules for locating publication resource apply regardless of whether the given resource is a [core media type resource](#dfn-core-media-type-resource) or a [foreign resource](#dfn-foreign-resource).

Note

Refer to the [`remote-resources` property](#remote-resources) for more information on how to indicate that a [manifest](#dfn-epub-manifest) ``[`item`](#dfn-item)`` references a [remote resource](#dfn-remote-resource).

[Example 1](#example-referencing-a-container-resource): Referencing a container resource

In this example, the audio file referenced from the \[[html](#bib-html "HTML Standard")\] [`audio`](https://html.spec.whatwg.org/multipage/#the-audio-element) element is located inside the EPUB container.

```
<html …>
   …
   <body>
      …
      <audio
          src="audio/ch01.mp4"
          controls="controls"/>
      …
   </body>
</html>
```

[Example 2](#example-referencing-a-remote-resource): Referencing a remote resource

In this example, the audio file referenced from the \[[html](#bib-html "HTML Standard")\] [`audio`](https://html.spec.whatwg.org/multipage/#the-audio-element) element is hosted on the web.

```
<html …>
   …
   <body>
      …
         <audio
             src="http://www.example.com/book/audio/ch01.mp4"
             controls="controls"/>
      …
   </body>
</html>
```

### 3.7 Data URLs

[](#sec-data-urls)

The [`data:` URL scheme](https://www.rfc-editor.org/rfc/rfc2397#) \[[rfc2397](#bib-rfc2397 "The "data" URL scheme")\] is used to encode resources directly into a URL string. The advantage of this scheme is that it allows [EPUB creators](#dfn-epub-creator) to embed a resource within another, avoiding the need for an external file.

EPUB creators _MUST NOT_ use data URLs in the following scenarios where they can result in a [top-level content document](#dfn-top-level-content-document) or [top-level browsing context](https://html.spec.whatwg.org/multipage/document-sequences.html#top-level-browsing-context) \[[html](#bib-html "HTML Standard")\]:

*   in `href` attributes in the package document — this applies both to manifest ``[`item`](#dfn-item)`` elements and metadata ``[`link`](#dfn-link)`` elements;
    
*   in the `href` attribute on \[[html](#bib-html "HTML Standard")\] or \[[svg](#bib-svg "SVG")\] `a` elements, except when inside an `[iframe](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element)` element \[[html](#bib-html "HTML Standard")\];
    
*   in the `href` attribute on \[[html](#bib-html "HTML Standard")\] `area` elements, except when inside an `iframe` element;
    
*   in calls to \[[ecmascript](#bib-ecmascript "ECMAScript Language Specification")\] `window.open` or `document.open`.
    

Note

These restrictions on the use of data URLs are to prevent security issues and also to ensure that [reading systems](#dfn-epub-reading-system) can determine where to take a user next (i.e., because data URLs cannot be referenced from the [spine](#dfn-epub-spine)).

The list of prohibited uses for data URLs is subject to change as the respective standards that allow their use evolve.

A consequence of embedding is that the data in a data URL is not considered its own unique [publication resource](#dfn-publication-resource) for manifest reporting purposes (i.e., only its containing publication resource gets listed). As this data has its own media type, however, it is still subject to [foreign resource restrictions](#sec-foreign-resources). EPUB creators _MUST_ therefore encode data URLs as [core media type resources](#dfn-core-media-type-resource) or provide a fallback using the intrinsic fallback mechanisms of the host format.

### 3.8 File URLs

[](#sec-file-urls)

The [`file:` URL scheme](https://www.rfc-editor.org/rfc/rfc8089#) is defined in \[[rfc8089](#bib-rfc8089 "The "file" URI Scheme")\] as "identifying an object (a 'file') stored in a structured object naming and accessing environment on a host (a 'file system')." It is typically used to retrieve files from the local operating system.

Using a file URL in an [EPUB publication](#dfn-epub-publication), which can be transferred among different hosts, represents a security risk and is also non-interoperable. As a consequence, [EPUB creators](#dfn-epub-creator) _MUST NOT_ use file URLs in EPUB publications.

### 3.9 XML conformance

[](#sec-xml-constraints)

Any [publication resource](#dfn-publication-resource) that is an XML-based media type \[[rfc2046](#bib-rfc2046 "Multipurpose Internet Mail Extensions (MIME) Part Two: Media Types")\]:

*   _MUST_ be a conformant XML 1.0 Document as defined in [Conformance of Documents](https://www.w3.org/TR/xml-names/#Conformance) \[[xml-names](#bib-xml-names "Namespaces in XML 1.0 (Third Edition)")\].
    
*   _MAY_ only specify a [document type declaration](https://www.w3.org/TR/xml/#dt-doctype) that references an [external identifier](https://www.w3.org/TR/xml/#NT-ExternalID) appropriate for its media type — as defined in [B. Allowed external identifiers](#app-identifiers-allowed) — or that omits external identifiers \[[xml](#bib-xml "Extensible Markup Language (XML) 1.0 (Fifth Edition)")\].
    
*   _MUST NOT_ contain [external entity](https://www.w3.org/TR/xml/#dt-extent) declarations in the internal DTD subset \[[xml](#bib-xml "Extensible Markup Language (XML) 1.0 (Fifth Edition)")\].
    
*   _MUST NOT_ make use of XInclude \[[xinclude](#bib-xinclude "XML Inclusions (XInclude) Version 1.0 (Second Edition)")\].
    
*   _MUST_ be encoded in UTF-8 or UTF-16 \[[unicode](#bib-unicode "The Unicode Standard")\], with UTF-8 as the _RECOMMENDED_ encoding.
    

The above constraints apply regardless of whether the given publication resource is a [core media type resource](#dfn-core-media-type-resource) or a [foreign resource](#dfn-foreign-resource).

Note

\[[html](#bib-html "HTML Standard")\] and \[[svg](#bib-svg "SVG")\] are removing support for the XML `base` attribute \[[xmlbase](#bib-xmlbase "XML Base (Second Edition)")\]. EPUB creators should avoid using this feature.

4\. Open Container Format (OCF)
-------------------------------

[](#sec-ocf)

### 4.1 Introduction

[](#sec-ocf-intro)

_This section is non-normative._

OCF is the required container technology for [EPUB publications](#dfn-epub-publication). OCF may play a role in the following workflows:

*   During the preparation steps in producing an EPUB publication, OCF may be used as the container format when exchanging in-progress publications between different individuals and/or different organizations.
*   When providing an EPUB publication from publisher or conversion house to the distribution or sales channel, OCF is the recommended container format to be used as the transport format.
*   When delivering the final EPUB publication to an [EPUB reading system](#dfn-epub-reading-system) or user, OCF is the required format for the container that holds all of the assets that make up the publication.

This section defines the rules for structuring the file collection in the abstract: the "abstract container". It also defines the rules for the representation of this abstract container within a ZIP archive: the "physical container". The rules for ZIP physical containers build upon the ZIP technologies used by \[[odf](#bib-odf "Open Document Format for Office Applications (OpenDocument) v1.0")\].

OCF also defines a standard method for [obfuscating embedded fonts](#sec-font-obfuscation) for those EPUB publications that require this functionality.

### 4.2 OCF abstract container

[](#sec-container-abstract)

#### 4.2.1 Introduction

[](#sec-container-abstract-intro)

_This section is non-normative._

The [OCF abstract container](#dfn-ocf-abstract-container) file system model uses a single common [root directory](#dfn-root-directory). All [container resources](#dfn-container-resource) are located within the directory tree headed by the root directory, but no specific file system structure for them is mandated by this specification.

The file system model also includes a mandatory directory named `META-INF` that is a direct child of the root directory and stores the following special files:

`container.xml` `[required]`

Identifies one or more [package documents](#dfn-package-document) that define the [EPUB publication](#dfn-epub-publication).

`signatures.xml` `[optional]`

Contains digital signatures for various assets.

`encryption.xml` `[optional]`

Contains information about the encryption of [publication resources](#dfn-publication-resource). This file is mandatory when [EPUB creators](#dfn-epub-creator) use [font obfuscation](#sec-font-obfuscation).

`metadata.xml` `[optional]`

Used to store metadata about the [OCF ZIP container](#dfn-ocf-zip-container).

`rights.xml` `[optional]`

Used to store information about digital rights.

`manifest.xml` `[optional]`

A manifest of container contents as allowed by Open Document Format \[[odf](#bib-odf "Open Document Format for Office Applications (OpenDocument) v1.0")\].

Refer to [4.2.6 `META-INF` directory](#sec-container-metainf) for conformance requirements for the various files in the `META-INF` directory.

#### 4.2.2 File and directory structure

[](#sec-container-file-and-dir-structure)

The virtual file system for the [OCF abstract container](#dfn-ocf-abstract-container) _MUST_ have a single common [root directory](#dfn-root-directory) for all the contents of the container.

The OCF abstract container _MUST_ include a directory for configuration files named `META-INF` that is a direct child of the container's root directory. Refer to [4.2.6 `META-INF` directory](#sec-container-metainf) for the requirements for the contents of this directory.

The file name `mimetype` in the root directory is reserved for use by [OCF ZIP containers](#dfn-ocf-zip-container), as explained in [4.3 OCF ZIP container](#sec-container-zip).

Files in the `META-INF` directory and the `mimetype` file are not [publication resources](#dfn-publication-resource) so _MUST NOT_ be listed in the [manifest](#dfn-epub-manifest).

[EPUB creators](#dfn-epub-creator) _MAY_ locate all other files within the OCF abstract container in any location descendant from the root directory, provided they are not within the `META-INF` directory. EPUB creators _MUST NOT_ reference files in the `META-INF` directory from an [EPUB publication](#dfn-epub-publication).

Note

Some [reading systems](#dfn-epub-reading-system) do not provide access to resources outside the directory where the [package document](#dfn-package-document) is stored. EPUB creators should therefore place all resources at or below the directory containing the package document to avoid interoperability issues.

This problem is more commonly encountered when [creating multiple renditions](https://www.w3.org/TR/epub-multi-rend-11/#container) \[[epub-multi-rend-11](#bib-epub-multi-rend-11 "EPUB 3 Multiple-Rendition Publications 1.1")\] of the publication.

#### 4.2.3 File paths and file names

[](#sec-container-filenames)

In the context of the [OCF abstract container](#dfn-ocf-abstract-container), [file paths](#dfn-file-path) and [file names](#dfn-file-name) are [scalar value strings](https://infra.spec.whatwg.org/#scalar-value-string) \[[infra](#bib-infra "Infra Standard")\] (i.e., their values are case sensitive).

In addition, the following restrictions are designed to allow file paths and file names to be used without modification on most operating systems:

*   File names _MUST NOT_ exceed 255 bytes.
    
*   The file paths for any directory or file within the OCF abstract container _MUST NOT_ exceed 65535 bytes.
    
*   File names _MUST NOT_ use the following \[[unicode](#bib-unicode "The Unicode Standard")\] characters, as commonly used operating systems may not support these characters consistently:
    
    *   SOLIDUS: `/` (`U+002F`)
        
    *   QUOTATION MARK: `"` (`U+0022`)
        
    *   ASTERISK: `*` (`U+002A`)
        
    *   FULL STOP as the last character: `.` (`U+002E`)
        
    *   COLON: `:` (`U+003A`)
        
    *   LESS-THAN SIGN: `<` (`U+003C`)
        
    *   GREATER-THAN SIGN: `>` (`U+003E`)
        
    *   QUESTION MARK: `?` (`U+003F`)
        
    *   REVERSE SOLIDUS: `\` (`U+005C`)
        
    *   VERTICAL LINE: `|` (`U+007C`)
        
    *   DEL (`U+007F`)
        
    *   C0 range (`U+0000 … U+001F`)
        
    *   C1 range (`U+0080 … U+009F`)
        
    *   Private Use Area (`U+E000 … U+F8FF`)
        
    *   All Unicode Non Characters, specifically:
        
        *   The 32 contiguous characters in the Basic Multilingual Plane (`U+FDD0 … U+FDEF`)
            
        *   The last two code points of the Basic Multilingual Plane (`U+FFFE` and `U+FFFF`)
            
        *   The last two code points at the end of the Supplementary Planes (`U+1FFFE, U+1FFFF … U+EFFFE, U+EFFFF`)
            
    *   Specials (`U+FFF0 … U+FFFF`)
        
    *   Supplementary Private Use Area-A (`U+F0000 … U+FFFFF`)
        
    *   Supplementary Private Use Area-B (`U+100000 … U+10FFFF`)
        
    
    Note
    
    The Unicode Character Database \[[uax44](#bib-uax44 "Unicode Character Database")\] also includes a [list of deprecated characters](https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt). EPUB creators are advised to avoid these characters, as well, as it is expected that [EPUB conformance checkers](#dfn-epub-conformance-checker) will flag their use.
    
*   For compatibility with older [reading systems](#dfn-epub-reading-system), file names _SHOULD NOT_ contain SPACE (U+0020) characters.
    
*   All file names within the same directory _MUST_ be unique following Unicode canonical normalization \[[uax15](#bib-uax15 "Unicode Normalization Forms")\] and then full case folding \[[unicode](#bib-unicode "The Unicode Standard")\]. (Refer to [Unicode Canonical Case Fold Normalization Step](https://www.w3.org/TR/charmod-norm/#CanonicalFoldNormalizationStep) \[[charmod-norm](#bib-charmod-norm "Character Model for the World Wide Web: String Matching")\] for more information.)
    

Note

If [EPUB creators](#dfn-epub-creator) dynamically integrate resources (i.e., where the naming is beyond their control), they should be aware that automatic truncation of file names to keep them within the 255 bytes limit can lead to corruption. This is due to the difference between bytes and characters in multibyte encodings such as UTF-8; it is, therefore, important to avoid mid-character truncation. See the section on ["Truncating or limiting the length of strings"](https://www.w3.org/TR/international-specs/#char_truncation) in \[[international-specs](#bib-international-specs "Internationalization Best Practices for Spec Developers")\] for more information.

Note

EPUB creators should use an abundance of caution in their file naming when interoperability of content is key. The [list of restricted characters](#ocf-fn-chars) is intended to help avoid some known problem areas, but it does not ensure that all other Unicode characters are supported. Although Unicode support is much better now than in earlier iterations of EPUB, older tools and toolchains may still be encountered (e.g., ZIP tools that only support \[[us-ascii](#bib-us-ascii "&quot;Coded Character Set - 7-bit American Standard Code for Information Interchange&quot;, ANSI X3.4, 1986.")\]).

#### 4.2.4 Deriving file paths

[](#sec-file-names-to-path-names)

To **derive the file path**, given a file or directory file in the [OCF abstract container](#sec-container-abstract), apply the following steps (expressed using the terminology of \[[infra](#bib-infra "Infra Standard")\]):

1.  Let path be an empty [list](https://infra.spec.whatwg.org/#list).
2.  Let current be file.
3.  While current is not the [root directory](#dfn-root-directory):
    1.  [prepend](https://infra.spec.whatwg.org/#list-prepend) the [file name](#dfn-file-name) of current to path;
    2.  set current to the parent directory of current.
4.  Return the [concatenation](https://infra.spec.whatwg.org/#string-concatenate) of path using the `U+002F (/)` character.

#### 4.2.5 URLs in the OCF abstract container

[](#sec-container-iri)

The [container root URL](#dfn-container-root-url) is the [URL](https://url.spec.whatwg.org/#concept-url) \[[url](#bib-url "URL Standard")\] of the [root directory](#dfn-root-directory). It is implementation-specific, but [EPUB creators](#dfn-epub-creator) _MUST_ assume it has the following properties:

*   The result of [parsing](https://url.spec.whatwg.org/#concept-url-parser) "`/`" with the [container root URL](#dfn-container-root-url) as [base](https://url.spec.whatwg.org/#concept-base-url) is the [container root URL](#dfn-container-root-url).
*   The result of [parsing](https://url.spec.whatwg.org/#concept-url-parser) "`..`" with the [container root URL](#dfn-container-root-url) as [base](https://url.spec.whatwg.org/#concept-base-url) is the [container root URL](#dfn-container-root-url).

The [content URL](#dfn-content-url) of a file or directory in the [OCF abstract container](#dfn-ocf-abstract-container) is the result of [parsing](https://url.spec.whatwg.org/#concept-url-parser) the file's [file path](#dfn-file-path) with the container root URL as [base](https://url.spec.whatwg.org/#concept-base-url).

Note

The container root URL is the URL assigned by the [reading system](#dfn-epub-reading-system) to the root of the [EPUB container](#dfn-epub-container). It typically depends on how the reading system internally implements the container file system.

However, a reading system cannot arbitrarily use any URL, but one that honors the constraints defined above. These constraints ensure that any relative URL string found in the EPUB will always be parsed to a URL of a resource within the container (which may or may not exist). The primary reason for these constraints is to avoid potential run-time security issues that would be caused by parsed URLs "leaking" outside the container files.

For example, URLs like `https://localhost:12345/` or `https://www.example.org:12345/` honor these properties. But URLs like `https://localhost:12345/path/to.epub/`, `file:///path/to.epub#path=/`, or `jar:file:/path/to.epub!/EPUB/` do not (parsing the URL string "`..`" with these three examples as base would return `https://localhost:12345/path/`, `file:///path/`, and a parsing error, respectively). It is the responsibility of the reading system to assign a URL to the root directory that complies with the properties defined above.

Note

Parsing may replace some characters in the file path by their [percent encoded](https://url.spec.whatwg.org/#percent-encode) alternative. For example, `A/B/C/file name.xhtml` becomes `A/B/C/file%20name.xhtml`.

A string url is a valid-relative-ocf-URL-with-fragment string if it is a [path-relative-scheme-less-url string](https://url.spec.whatwg.org/#path-relative-scheme-less-url-string), optionally followed by `U+0023 (#)` and a [url-fragment string](https://url.spec.whatwg.org/#url-fragment-string), and if the following steps return true:

1.  Set the [container root URL](#dfn-container-root-url) to `https://a.example.org/A/`.
    
    Explanation
    
    The goal of the algorithm is to detect whether url could be seen as "leaking" outside the container. To do that, the standard [URL parsing algorithm](https://url.spec.whatwg.org/#concept-url-parser) is used with an artificial root URL; the detection of the "leak" is done by comparing the result of the parsing with the presence of the first test path segment (`A`). (Note that the artificial container root URL wilfully violates, for the purpose of this algorithm, the [required properties](#sec-root-url-properties) by using that first test path segment.)
    
2.  Let base be the [base URL](https://url.spec.whatwg.org/#concept-base-url) that must be used to parse url as defined by the context (document or environment) where url is used, and according to the content URL of the [package document](#dfn-package-document) (see [5.2 Parsing URLs in the package document](#sec-parse-package-urls)).
    
    Explanation
    
    In the case of a URL in the package document the base variable is set to the content URL of the package document. In the case of a document within the `META-INF` directory, the base variable is set to the container root URL (see [4.2.6.2 Parsing URLs in the `META-INF` directory](#sec-parsing-urls-metainf)). In the case of a URL in an [XHTML content document](#dfn-xhtml-content-document), the base URL used for parsing is defined by the [HTML standard](https://html.spec.whatwg.org/multipage/#resolving-urls). Typically, it will be the content URL of the content document (unless the [discouraged](#sec-xhtml-deviations-base) `base` element is used).
    
3.  Let testURLRecord be the result of applying the [URL parser](https://url.spec.whatwg.org/#concept-url-parser) to url, with base.
4.  Let testURLStringA be the result of applying the [URL Serializer](https://url.spec.whatwg.org/#concept-url-serializer) to testURLRecord.
5.  Set the [container root URL](#dfn-container-root-url) to `https://b.example.org/B/`.
    
    Explanation
    
    The reasons to repeat the same steps twice with different, and artificial, settings of the container root URL is to avoid collision which may occur if the url string also includes `/A/`. Consider, for example, the case where url is `../../A/doc.xhtml`.
    
6.  Set base to be the [base URL](https://url.spec.whatwg.org/#concept-base-url) that must be used to parse url as defined by the context (document or environment) where url is used, and according to the content URL of the package document (see [5.2 Parsing URLs in the package document](#sec-parse-package-urls)).
7.  Set testURLRecord to be the result of applying the [URL parser](https://url.spec.whatwg.org/#concept-url-parser) to url, with base.
8.  Let testURLStringB be the result of applying the [URL Serializer](https://url.spec.whatwg.org/#concept-url-serializer) to testURLRecord.
9.  If testURLStringA does not start with `https://a.example.org/` or testURLStringB does not start with `https://b.example.org/`, return true.
    
    Explanation
    
    If any of the result does not share the test URL host, it means that url, or its base URL (for example, in HTML, if it is explicitly set with the `base` element), was _absolute_ and points outside the container. This is acceptable.
    
10.  If testURLStringA starts with `https://a.example.org/A/` and testURLStringB starts with `https://b.example.org/B/`, return true.
    
    Explanation
    
    The presence of the first test path segments (`A`, respectively `B`) indicate that the URL doesn't leak outside the container.
    
11.  Return false.

In the OCF abstract container, any URL string _MUST_ be an [absolute-url-with-fragment string](https://url.spec.whatwg.org/#absolute-url-with-fragment-string) or a [valid-relative-ocf-URL-with-fragment string](#dfn-valid-relative-container-url-with-fragment-string).

In addition, all [relative-URL-with-fragment strings](https://url.spec.whatwg.org/#relative-url-with-fragment-string) \[[url](#bib-url "URL Standard")\] _MUST_, after [parsing](https://url.spec.whatwg.org/#concept-url-parser), be equal to the content URL of an existing file in the OCF abstract container.

Note

These constraints on URL strings mean that:

*   relative URL strings starting with a `/` (`U+002F`) (for example, `/EPUB/content.xhtml`) are disallowed;
*   relative URL strings containing more [double-dot URL path segments](https://url.spec.whatwg.org/#double-dot-path-segment) than needed to reach the target file (for example, `EPUB/../../../../config.xml`) are disallowed;
*   any other absolute or relative URL string is allowed.

Note that in any case, even the disallowed URL strings described above will not "leak" outside the container after parsing (as explained in the [first note](#note-cru-explanation) of this section). They are nevertheless disallowed for better interoperability with non-conforming or legacy reading systems and toolchains.

[Example 3](#example-referencing-a-file-in-the-same-directory): Referencing a file in the same directory

In this example, the file `image1.jpg` is in the same directory as the XHTML content document.

```
<html …>
   …
   <body>
      <img
          src="image1.jpg"
          alt="…" />
   …
   </body>
</html>
```

[Example 4](#example-an-out-of-container-url): An "out-of-container" URL

Given the following container structure:

```
/
├── mimetype
├── META-INF
│   └── container.xml
└── EPUB
    └── content.xhtml
```

A URL `../../../../EPUB/secret.xhtml` appearing in `content.xhtml` would be parsed by a reading system into a content URL with a path `EPUB/secret.xhtml`, following the constraints on the container root URL. However, as the URL could be perceived as one of a resource outside the container, and create interoperability issues; it would be reported as an error by a checker tool.

#### 4.2.6 `META-INF` directory

[](#sec-container-metainf)

##### 4.2.6.1 Inclusion in OCF abstract container

[](#sec-container-metainf-inc)

All [OCF abstract containers](#dfn-ocf-abstract-container) _MUST_ include a directory called `META-INF` in their [root directory](#dfn-root-directory).

This directory is reserved for configuration files, specifically those defined in [4.2.6.3 Reserved files](#sec-container-metainf-files).

##### 4.2.6.2 Parsing URLs in the `META-INF` directory

[](#sec-parsing-urls-metainf)

To parse a URL string url used in files located in the `META-INF` directory the [URL parser](https://url.spec.whatwg.org/#concept-url-parser) _MUST_ be applied to url, with the [container root URL](#dfn-container-root-url) as [base](https://url.spec.whatwg.org/#concept-base-url).

[Example 5](#example-resolving-paths-in-the-container-file): Resolving paths in the container file

If container file (`META-INF/container.xml`) has the following content:

```
<?xml version="1.0"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
   <rootfiles>
      <rootfile
          full-path="EPUB/Great_Expectations.opf"
          media-type="application/oebps-package+xml" />
   </rootfiles>
</container>
```

then the path `EPUB/Great_Expectations.opf` is relative to the [root directory](#dfn-root-directory) for the [OCF abstract container](#dfn-ocf-abstract-container) and not relative to the `META-INF` directory.

##### 4.2.6.3 Reserved files

[](#sec-container-metainf-files)

###### 4.2.6.3.1 Container file (`container.xml`)

[](#sec-container-metainf-container.xml)

The _REQUIRED_ `container.xml` file in the `META-INF` directory identifies the [package documents](#dfn-package-document) available in the [OCF abstract container](#dfn-ocf-abstract-container).

All \[[xml](#bib-xml "Extensible Markup Language (XML) 1.0 (Fifth Edition)")\] elements defined in this section are in the `urn:oasis:names:tc:opendocument:xmlns:container` namespace \[[xml-names](#bib-xml-names "Namespaces in XML 1.0 (Third Edition)")\] unless specified otherwise.

The contents of this file _MUST_ be valid to the definition in this section after removing all elements and attributes from other namespaces (including all attributes and contents of such elements).

Note

An [XML Schema](#app-schema-container) also informally defines the content of this file.

###### 4.2.6.3.1.1 The `container` element

[](#sec-container.xml-container-elem)

The `container` element encapsulates all the information in the `container.xml` file.

Element Name:

`container`

Usage:

_REQUIRED_ [root element](https://www.w3.org/TR/xml/#dt-root) \[[xml](#bib-xml "Extensible Markup Language (XML) 1.0 (Fifth Edition)")\] of the `container.xml` file.

Attributes:

`version` `[required]`

This attribute _MUST_ have the value "`1.0`".

Content Model:

In this order:

*   ``[`rootfiles`](#dfn-rootfiles)`` \[exactly one\]
*   ``[`links`](#dfn-links)`` \[0 or 1\]

###### 4.2.6.3.1.2 The `rootfiles` element

[](#sec-container.xml-rootfiles-elem)

The `rootfiles` element contains a list of [package documents](#dfn-package-document) available in the [EPUB container](#dfn-epub-container).

Element Name:

`rootfiles`

Usage:

_REQUIRED_ first child of ``[`container`](#dfn-container)``.

Attributes:

None

Content Model:

*   ``[`rootfile`](#dfn-rootfile)`` \[1 or more\]

###### 4.2.6.3.1.3 The `rootfile` element

[](#sec-container.xml-rootfile-elem)

Each `rootfile` element identifies the location of one [package document](#dfn-package-document) in the [EPUB container](#dfn-epub-container).

Element Name:

`rootfile`

Usage:

As child of the ``[`rootfiles`](#dfn-rootfiles)`` element. Repeatable.

Attributes:

`full-path` `[required]`

Identifies the location of a package document.

The value of the attribute _MUST_ be a [path-relative-scheme-less-URL string](https://url.spec.whatwg.org/#path-relative-scheme-less-url-string) \[[url](#bib-url "URL Standard")\]. The path is relative to the [root directory](#dfn-root-directory).

`media-type` `[required]`

Identifies the media type of the package document.

The value of the attribute _MUST_ be "`application/oebps-package+xml`".

Content Model:

Empty

If an [EPUB creator](#dfn-epub-creator) defines more than one `rootfile` element, each _MUST_ reference a package document that conforms to the same version of EPUB. Each package document represents one rendering of the [EPUB publication](#dfn-epub-publication).

Note

Although the EPUB container provides the ability to reference more than one package document, this specification does not define how to interpret, or select from, the available options. Refer to \[[epub-multi-rend-11](#bib-epub-multi-rend-11 "EPUB 3 Multiple-Rendition Publications 1.1")\] for more information on how to bundle more than one rendering of the content.

###### 4.2.6.3.1.4 The `links` element

[](#sec-container.xml-links-elem)

The `links` element identifies resources necessary for the processing of the [OCF ZIP container](#dfn-ocf-zip-container).

Element Name:

`links`

Usage:

_OPTIONAL_ second child of ``[`container`](#dfn-container)``. Repeatable.

Attributes:

None

Content Model:

*   [`link`](#elemdef-link) \[1 or more\]

Note

This specification currently does not define uses for the `links` element. Refer to \[[epub-multi-rend-11](#bib-epub-multi-rend-11 "EPUB 3 Multiple-Rendition Publications 1.1")\] for an example of its use.

###### 4.2.6.3.1.5 The `link` element

[](#sec-container.xml-link-elem)

Element Name:

`link`

Usage:

As child of the ``[`links`](#dfn-links)`` element. Repeatable.

Attributes:

`href` `[required]`

Identifies the location of a resource.

The value of the `link` element `href` attribute _MUST_ be a [path-relative-scheme-less-URL string](https://url.spec.whatwg.org/#path-relative-scheme-less-url-string) \[[url](#bib-url "URL Standard")\]. The path is relative to the [root directory](#dfn-root-directory).

`media-type` `[optional]`

Identifies the type and format of the referenced resource.

The value of the attribute _MUST_ be a media type \[[rfc2046](#bib-rfc2046 "Multipurpose Internet Mail Extensions (MIME) Part Two: Media Types")\].

`rel` `[required]`

Identifies the relationship of the resource.

The value of the attribute _MUST_ be a space-separated list of tokens.

Content Model:

Empty

###### 4.2.6.3.1.6 Examples

[](#sec-container-container.xml-example)

_This section is non-normative._

[Example 6](#example-a-basic-container-file): A basic container file

```
<?xml version="1.0"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
   <rootfiles>
      <rootfile
          full-path="EPUB/My_Crazy_Life.opf"
          media-type="application/oebps-package+xml" />
   </rootfiles>
</container>
```

###### 4.2.6.3.2 Encryption file (`encryption.xml`)

[](#sec-container-metainf-encryption.xml)

The _OPTIONAL_ `encryption.xml` file in the `META-INF` directory holds all encryption information on the contents of the container. If an [EPUB creator](#dfn-epub-creator) encrypts any resources within the container, they _MUST_ include an `encryption.xml` file to provide information about the encryption used.

###### 4.2.6.3.2.1 The `encryption` element

[](#sec-encryption.xml-encryption)

Element Name:

`encryption`

Namespace:

`urn:oasis:names:tc:opendocument:xmlns:container`

Usage:

_REQUIRED_ [root element](https://www.w3.org/TR/xml/#dt-root) \[[xml](#bib-xml "Extensible Markup Language (XML) 1.0 (Fifth Edition)")\] of the `encryption.xml` file.

Attributes:

None

Content Model:

In any order:

*   `EncryptedKey` \[1 or more\]
*   `EncryptedData` \[1 or more\]

The `encryption` element contains child elements of type `EncryptedKey` and `EncryptedData` as defined by \[[xmlenc-core1](#bib-xmlenc-core1 "XML Encryption Syntax and Processing Version 1.1")\].

An `EncryptedKey` element describes each encryption key used in the container, while an `EncryptedData` element describes each encrypted file. Each `EncryptedData` element refers to an `EncryptedKey` element, as described in XML Encryption.

Note

An [XML Schema](#app-schema-encryption) also informally defines the content of the `encryption.xml` file.

OCF encrypts individual files independently, trading off some security for improved performance, allowing the container contents to be incrementally decrypted. Encryption in this way exposes the directory structure and file naming of the whole package.

OCF uses XML Encryption \[[xmlenc-core1](#bib-xmlenc-core1 "XML Encryption Syntax and Processing Version 1.1")\] to provide a framework for encryption, allowing a variety of algorithms to be used. XML Encryption specifies a process for encrypting arbitrary data and representing the result in XML. Even though an [OCF abstract container](#dfn-ocf-abstract-container) may contain non-XML data, [EPUB creators](#dfn-epub-creator) can use XML Encryption to encrypt all data in an [OCF abstract container](#dfn-ocf-abstract-container). OCF encryption supports only the encryption of entire files within the container, not parts of files. EPUB creators _MUST NOT_ encrypt the `encryption.xml` file when present.

Encrypted data replaces unencrypted data in an OCF abstract container. For example, if an EPUB creator encrypts an image named `photo.jpeg`, they should replace the contents of the `photo.jpeg` resource with its encrypted contents. Within the ZIP directory, EPUB creators _SHOULD_ store encrypted files rather than Deflate-compress them.

Note that some situations require obfuscating the storage of embedded fonts referenced by an [EPUB publication](#dfn-epub-publication) to make them more difficult to extract for unrestricted use. Although obfuscation is not encryption, reading systems use the `encryption.xml` file in conjunction with the [font obfuscation algorithm](#sec-font-obfuscation) to identify fonts to deobfuscate.

EPUB creators _MUST NOT_ encrypt the following files:

*   `mimetype`
*   `META-INF/container.xml`
*   `META-INF/encryption.xml`
*   `META-INF/manifest.xml`
*   `META-INF/metadata.xml`
*   `META-INF/rights.xml`
*   `META-INF/signatures.xml`
*   \[= `package document` =\]

EPUB creators _MAY_ subsequently encrypt signed resources using the Decryption Transform for XML Signature \[[xmlenc-decrypt](#bib-xmlenc-decrypt "Decryption Transform for XML Signature")\]. This feature enables a [reading system](#dfn-epub-reading-system) to distinguish data encrypted before signing from data encrypted after signing.

[Example 7](#example-an-encrypted-image): An encrypted image

In this example, adapted from [Section 2.2.1](https://www.w3.org/TR/xmlenc-core1/#sec-eg-Symmetric-Key) of \[[xmlenc-core1](#bib-xmlenc-core1 "XML Encryption Syntax and Processing Version 1.1")\], the resource `image.jpeg` is encrypted using a symmetric key algorithm (AES) and the symmetric key is further encrypted using an asymmetric key algorithm (RSA) with a key of "John Smith".

```
<encryption
    xmlns ="urn:oasis:names:tc:opendocument:xmlns:container"
    xmlns:enc="http://www.w3.org/2001/04/xmlenc#"
    xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
   <enc:EncryptedKey Id="EK">
      <enc:EncryptionMethod
          Algorithm="http://www.w3.org/2001/04/xmlenc#rsa-1_5"/>
      <ds:KeyInfo>
         <ds:KeyName>
            John Smith
         </ds:KeyName>
      </ds:KeyInfo>
      <enc:CipherData>
         <enc:CipherValue>
            xyzabc
         </enc:CipherValue>
      </enc:CipherData>
   </enc:EncryptedKey>
   <enc:EncryptedData Id="ED1">
      <enc:EncryptionMethod
          Algorithm="http://www.w3.org/2001/04/xmlenc#kw-aes128"/>
      <ds:KeyInfo>
         <ds:RetrievalMethod
             URI="#EK"
             Type="http://www.w3.org/2001/04/xmlenc#EncryptedKey"/>
      </ds:KeyInfo>
      <enc:CipherData>
         <enc:CipherReference
             URI="image.jpeg"/>
      </enc:CipherData>
   </enc:EncryptedData>
</encryption>
```

###### 4.2.6.3.2.2 Order of compression and encryption

[](#sec-enc-compression)

When stored in an [OCF ZIP container](#dfn-ocf-zip-container), [EPUB creators](#dfn-epub-creator) _SHOULD_ compress streams of data with [non-codec](#dfn-non-codec) content types before encrypting them. EPUB creators _MUST_ use Deflate compression. This practice ensures that file entries stored in the ZIP container have a smaller size.

EPUB creators _SHOULD NOT_ compress streams of data with [codec](#dfn-codec) content types before encrypting them. In such cases, additional compression introduces unnecessary processing overhead at production time (especially with large resource files) and impacts audio/video playback performance at consumption time. In some cases, the combination of compression with some encryption schemes might even compromise the ability of [reading systems](#dfn-epub-reading-system) to handle partial content requests (e.g. HTTP byte ranges), due to the technical impossibility to determine the length of the full resource ahead of media playback (e.g. HTTP Content-Length header).

When EPUB creators compress streams of data before encrypting, they _SHOULD_ provide additional `EncryptionProperties` metadata to specify the size of the initial resource (i.e., before compression and encryption), as per the `Compression` XML element defined below. When EPUB creators do not compress streams of data before encrypting, they _MAY_ provide the additional `EncryptionProperties` metadata to specify the size of the initial resource (i.e., before encryption).

Element Name:

`Compression`

Namespace:

`http://www.idpf.org/2016/encryption#compression`

Usage:

_OPTIONAL_ child of `EncryptionProperty`.

Attributes:

Method `[required]`

Identifies the compression method used.

Value is either "`0`" (no compression) or "`8`" (Deflate algorithm).

OriginalLength `[required]`

Represents the size of the initial resource (number of bytes).

Value is a positive integer.

Content Model:

Empty

[Example 8](#example-a-compressed-video): A compressed video

In this example, the EPUB creator has Deflate compressed the MP4 file. Its original size was 3500000 bytes.

```
<encryption
    xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
   <enc:EncryptedData
       xmlns:enc="http://www.w3.org/2001/04/xmlenc#">
      …
      <enc:CipherData>
         <enc:CipherReference
             URI="OEPBS/video.mp4"/>
      </enc:CipherData>
      <enc:EncryptionProperties>
         <enc:EncryptionProperty
             xmlns:ns="http://www.idpf.org/2016/encryption#compression">
            <ns:Compression
                Method="8"
                OriginalLength="3500000"/>
         </enc:EncryptionProperty>
      </enc:EncryptionProperties>
      …
   </enc:EncryptedData>
</encryption>
```

###### 4.2.6.3.3 Manifest file (`manifest.xml`)

[](#sec-container-metainf-manifest.xml)

The _OPTIONAL_ `manifest.xml` file in the `META-INF` directory provides a manifest of files in the container.

The OCF specification does not mandate a format for the manifest.

Note that [package documents](#dfn-package-document) specify the only manifests used for processing [EPUB publications](#dfn-epub-publication). Reading systems do not use this file.

Note

This feature exists only for compatibility with \[[odf](#bib-odf "Open Document Format for Office Applications (OpenDocument) v1.0")\].

###### 4.2.6.3.4 Metadata file (`metadata.xml`)

[](#sec-container-metainf-metadata.xml)

The _OPTIONAL_ `metadata.xml` file in the `META-INF` directory is only for container-level metadata.

If [EPUB creators](#dfn-epub-creator) include a `metadata.xml` file, they _SHOULD_ use only namespace-qualified elements \[[xml-names](#bib-xml-names "Namespaces in XML 1.0 (Third Edition)")\] in it. The file _SHOULD_ contain the [root element](https://www.w3.org/TR/xml/#dt-root) \[[xml](#bib-xml "Extensible Markup Language (XML) 1.0 (Fifth Edition)")\] `metadata` in the namespace `http://www.idpf.org/2013/metadata`, but this specification allows other root elements for backwards compatibility.

This version of the specification does not define metadata for use in the `metadata.xml` file. Future versions of this specification _MAY_ define container-level metadata.

###### 4.2.6.3.5 Rights management file (`rights.xml`)

[](#sec-container-metainf-rights.xml)

This specification reserves the _OPTIONAL_ `rights.xml` file in the `META-INF` directory for the trusted exchange of [EPUB publications](#dfn-epub-publication) among rights holders, intermediaries, and users.

When [EPUB creators](#dfn-epub-creator) do not include a `rights.xml` file, no part of the [OCF abstract container](#dfn-ocf-abstract-container) is rights governed at the container level. Rights expressions might exist within the EPUB publications.

###### 4.2.6.3.6 Digital signatures file (`signatures.xml`)

[](#sec-container-metainf-signatures.xml)

Note

Adding a digital signature is not a guarantee that a malicious actor cannot tamper with an [EPUB publication](#dfn-epub-publication) as [reading systems](#dfn-epub-reading-system) do not have to check signatures.

The _OPTIONAL_ `signatures.xml` file in the `META-INF` directory holds digital signatures for the container and its contents.

###### 4.2.6.3.6.1 The `signatures` element

[](#sec-signatures.xml-signatures)

Element Name:

`signatures`

Namespace:

`urn:oasis:names:tc:opendocument:xmlns:container`

Usage:

_REQUIRED_ [root element](https://www.w3.org/TR/xml/#dt-root) \[[xml](#bib-xml "Extensible Markup Language (XML) 1.0 (Fifth Edition)")\] of the `signature.xml` file.

Attributes:

None

Content Model:

*   `Signature` \[1 or more\]

The `signature` element contains child elements of type `Signature`, as defined by \[[xmldsig-core1](#bib-xmldsig-core1 "XML Signature Syntax and Processing Version 1.1")\]. [EPUB creators](#dfn-epub-creator) can apply signatures to an EPUB publication as a whole or to its parts, and can specify the signing of any kind of data (i.e., not just XML).

Note

An [XML Schema](#app-schema-signatures) also informally defines the content of the `signatures.xml` file.

When an EPUB creator does not include a `signatures.xml` file, they are not signing any part of the [OCF abstract container](#dfn-ocf-abstract-container) at the container level. Digital signing might exist within the EPUB publication.

When an EPUB creator creates a data signature for the OCF abstract container, they _SHOULD_ add the signature as the last child `Signature` element of the `signatures` element.

Note

Each `Signature` in the `signatures.xml` file identifies by URL \[[url](#bib-url "URL Standard")\] the data to which the signature applies, using the \[[xmldsig-core1](#bib-xmldsig-core1 "XML Signature Syntax and Processing Version 1.1")\] `Manifest` element and its `Reference` sub-elements. EPUB creator may sign individual container files separately or together. Separately signing each file creates a digest value for the resource that reading systems can validate independently. This approach might make a Signature element larger. If EPUB creators sign files together, they can list the set of signed files in a single XML Signature `Manifest` element and reference them by one or more `Signature` elements.

EPUB creators can sign any or all files in the OCF abstract container in their entirety, except for the `signatures.xml` file since that file will contain the computed signature information. Whether and how EPUB creators sign the `signatures.xml` file depends on their objective.

If the EPUB creator wants to allow signatures to be added or removed from the OCF abstract container without invalidating their signature, they _SHOULD NOT_ sign the `signatures.xml` file.

If the EPUB creator wants any addition or removal of a signature to invalidate their signature, they can use the Enveloped Signature transform defined in [Section 6.6.4](https://www.w3.org/TR/xmldsig-core/#sec-EnvelopedSignature) of \[[xmldsig-core1](#bib-xmldsig-core1 "XML Signature Syntax and Processing Version 1.1")\] to sign the entire pre-existing signature file excluding the `Signature` being created. This transform would sign all previous signatures, and it would become invalid if a subsequent signature were added to the package.

Note

If the EPUB creator wants the removal of an existing signature to invalidate their signature, but also wants to allow the addition of signatures, they could use an XPath transform to sign just the existing signatures. The details of such a transform are outside the scope of this specification, however.

The \[[xmldsig-core1](#bib-xmldsig-core1 "XML Signature Syntax and Processing Version 1.1")\] specification does not associate any semantics with a signature; an agent might include semantic information, for example, by adding information to the Signature element that describes the signature. The \[[xmldsig-core1](#bib-xmldsig-core1 "XML Signature Syntax and Processing Version 1.1")\] specification describes how additional information can be added to a signature, such as by use the `SignatureProperties` element.

[Example 9](#example-signing-resources): Signing resources

In this example, based on the examples found in [Section 2](https://www.w3.org/TR/xmldsig-core1/#sec-Overview) of \[[xmldsig-core1](#bib-xmldsig-core1 "XML Signature Syntax and Processing Version 1.1")\], one signature applies to two resources (`EPUB/book.xhtml` and `EPUB/images/cover.jpeg`).

```
<signatures
    xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
   <Signature
       Id="sig"
       xmlns="http://www.w3.org/2000/09/xmldsig#">
      <SignedInfo>
         <CanonicalizationMethod
             Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"/>
            <SignatureMethod
                Algorithm="http://www.w3.org/2000/09/xmldsig#dsa-sha1"/>
            <Reference
                URI="#Manifest1">
               <DigestMethod
                   Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
               <DigestValue>j6lwx3rvEPO0vKtMup4NbeVu8nk=</DigestValue>
            </Reference>
      </SignedInfo>
      <SignatureValue>
         …
      </SignatureValue>
      <KeyInfo>
         <KeyValue>
            <DSAKeyValue>
               <P>…</P>
               <Q>…</Q>
               <G>…</G>
               <Y>…</Y>
            </DSAKeyValue>
         </KeyValue>
      </KeyInfo>
      <Object>
         <Manifest
             Id="Manifest1">
            <Reference
                URI="EPUB/book.xhtml">
               <Transforms>
                  <Transform
                      Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"/>
               </Transforms>
               <DigestMethod
                   Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
               <DigestValue>…</DigestValue>
            </Reference>
            <Reference URI="EPUB/images/cover.jpeg">
               <Transforms>
                  <Transform
                      Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"/>
               </Transforms>
               <DigestMethod
                   Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
               <DigestValue>…</DigestValue>
            </Reference>
         </Manifest>
      </Object>
   </Signature>
</signatures>
```

### 4.3 OCF ZIP container

[](#sec-container-zip)

#### 4.3.1 Introduction

[](#sec-container-zip-intro)

_This section is non-normative._

An [OCF ZIP container](#dfn-ocf-zip-container) is a physical single-file manifestation of an [OCF abstract container](#dfn-ocf-abstract-container). The container allows:

*   the exchange of in-progress [EPUB publication](#dfn-epub-publication) between different individuals and/or different organizations;
    
*   the transfer of EPUB publications from a publisher or conversion house to the distribution or sales channel; and
    
*   the delivery of EPUB publications to [EPUB reading systems](#dfn-epub-reading-system) or users.
    

#### 4.3.2 ZIP file requirements

[](#sec-zip-container-zipreqs)

An [OCF ZIP container](#dfn-ocf-zip-container) uses the ZIP format as specified by \[[zip](#bib-zip ".ZIP File Format Specification")\], but with the following constraints and clarifications:

*   The contents of the OCF ZIP container _MUST_ be a conforming [OCF abstract container](#sec-container-abstract).
    
*   OCF ZIP containers _MUST NOT_ use the features in the ZIP application note \[[zip](#bib-zip ".ZIP File Format Specification")\] that allow ZIP files to be spanned across multiple storage media or be split into multiple files.
    
*   OCF ZIP containers _MUST_ include only stored (uncompressed) and Deflate-compressed ZIP entries within the ZIP archive.
    
*   OCF ZIP containers _MAY_ use the ZIP64 extensions defined as "Version 1" in section V, subsection G of the application note \[[zip](#bib-zip ".ZIP File Format Specification")\] and _SHOULD_ use only those extensions when the content requires them.
    
*   OCF ZIP containers _MUST NOT_ use the encryption features defined by the ZIP format; instead, encryption _MUST_ be done using the features described in [4.2.6.3.2 Encryption file (`encryption.xml`)](#sec-container-metainf-encryption.xml).
    
*   OCF ZIP containers _MUST_ encode file system names using UTF-8 \[[unicode](#bib-unicode "The Unicode Standard")\].
    

The following constraints apply to specific fields in the OCF ZIP container archive:

*   In the local file header table, [EPUB creators](#dfn-epub-creator) _MUST_ set the `version needed to extract` fields to the values `10`, `20` or `45` to match the maximum version level needed by the given file (e.g., `20` for Deflate, `45` for ZIP64).
    
*   In the local file header table, EPUB creators _MUST_ set the `compression` method field to the values `0` or `8`.
    

#### 4.3.3 OCF ZIP container media type identification

[](#sec-zip-container-mime)

[EPUB creators](#dfn-epub-creator) _MUST_ include the `mimetype` file as the first file in the [OCF ZIP container](#dfn-ocf-zip-container). In addition:

*   The contents of the `mimetype` file _MUST_ be the MIME media type \[[rfc2046](#bib-rfc2046 "Multipurpose Internet Mail Extensions (MIME) Part Two: Media Types")\] string `application/epub+zip` encoded in US-ASCII \[[us-ascii](#bib-us-ascii "&quot;Coded Character Set - 7-bit American Standard Code for Information Interchange&quot;, ANSI X3.4, 1986.")\].
*   The `mimetype` file _MUST NOT_ contain any leading or trailing padding or whitespace.
*   The `mimetype` file _MUST NOT_ begin with the Unicode byte order mark U+FEFF.
*   EPUB creators _MUST NOT_ compress or encrypt the `mimetype` file.
*   EPUB creators _MUST NOT_ include an extra field in its ZIP header.

Note

Refer to [I.2 The `application/epub+zip` media type](#app-media-type) for further information about the `application/epub+zip` media type.

### 4.4 Font obfuscation

[](#sec-font-obfuscation)

Caution

Better methods of protecting fonts exist. Both \[[woff](#bib-woff "WOFF File Format 1.0")\] and \[[woff2](#bib-woff2 "WOFF File Format 2.0")\] fonts, for example, allow the embedding of licensing information and provide some protection through font table compression. The use of remotely hosted fonts also allows for font subsetting. [EPUB creators](#dfn-epub-creator) are advised to use font obfuscation as defined in this section only when no other options are available to them. See also the [limitations of obfuscation](#fobfus-limitations).

#### 4.4.1 Introduction

[](#fobfus-intro)

_This section is non-normative._

Since an [OCF ZIP container](#dfn-ocf-zip-container) is fundamentally a ZIP file, commonly available ZIP tools can be used to extract any unencrypted content stream from the package. Moreover, the nature of ZIP files means that their contents might appear like any other native container on some systems (e.g., a folder).

While this simplicity of ZIP files is quite useful, it also poses a problem when ease of extraction of fonts is not a desired side-effect of not encrypting them. An [EPUB creator](#dfn-epub-creator) who wishes to include a third-party font, for example, typically does not want that font extracted and re-used by others. More critically, many commercial fonts allow embedding, but embedding a font implies making it an integral part of the [EPUB publication](#dfn-epub-publication), not just providing the original font file along with the content.

Since integrated ZIP support is so ubiquitous in modern operating systems, simply placing a font in the [OCF ZIP container](#dfn-ocf-zip-container) is insufficient to signify that the font cannot be reused in other contexts. This uncertainty can undermine the otherwise useful font embedding capability of EPUB publications.

To discourage reuse of their fonts, some font vendors might only allow their use in EPUB publications if the fonts are bound in some way to the EPUB publication. That is, if the font file cannot be installed directly for use on an operating system with the built-in tools of that computing device, and it cannot be directly used by other EPUB publications.

It is beyond the scope of this specification to provide a digital rights management or enforcement system for fonts. This section instead defines a method of obfuscation that will require additional work on the part of the final OCF recipient to gain general access to any obfuscated fonts.

#### 4.4.2 Limitations

[](#fobfus-limitations)

_This section is non-normative._

This specification does not claim that obfuscation constitutes encryption, nor does it guarantee that the resource will be secure from copyright infringement. The hope is only that this algorithm will meet the requirements of vendors who require some assurance that their fonts cannot be extracted simply by unzipping the [OCF ZIP container](#dfn-ocf-zip-container) and copying the resource.

Obfuscation, like any protection scheme, cannot fully protect fonts from being accessed in their deobfuscated state. The mechanism only provides an obstacle for those who are unaware of the license details. It will not prevent a determined user from gaining full access to the font through such alternative means as:

*   applying the deobfuscation algorithm to extract the raw font file;
*   accessing the deobfuscated font through a [reading system](#dfn-epub-reading-system) that must deobfuscate it to render the content (e.g., by accessing the resources through a browser-based reading system); or
*   accessing the deobfuscated font through authoring tools that provide the visual rendering of the content.

As a result, whether this method of obfuscation satisfies the requirements of individual font licenses remains a question for the licensor and licensee. [EPUB creators](#dfn-epub-creator) are responsible for ensuring their use of obfuscation meets font licensing requirements.

EPUB creators should also be aware that obfuscation may lead to interoperability issues in reading systems as reading systems are not required to deobfuscate fonts. As a result, the visual presentation of their publications may differ from reading system to reading system.

Also note that the algorithm is restricted to obfuscating fonts. It is not intended as a general-purpose mechanism for obfuscating any resource in the EPUB container.

#### 4.4.3 Obfuscation key

[](#obfus-keygen)

[EPUB creators](#dfn-epub-creator) _MUST_ derive the key used in the obfuscation algorithm from the [unique identifier](#dfn-unique-identifier).

All whitespace characters, as defined in [section 2.3 of the XML 1.0 specification](https://www.w3.org/TR/xml/#sec-common-syn) \[[xml](#bib-xml "Extensible Markup Language (XML) 1.0 (Fifth Edition)")\], _MUST_ be removed from this identifier — specifically, the Unicode code points `U+0020`, `U+0009`, `U+000D` and `U+000A`.

EPUB creators _MUST_ generate a SHA-1 digest of the UTF-8 representation of the resulting string as specified by the Secure Hash Standard \[[fips-180-4](#bib-fips-180-4 "FIPS PUB 180-4: Secure Hash Standard (SHS)")\]. They can then use this digest as the key for the algorithm.

#### 4.4.4 Obfuscation algorithm

[](#obfus-algorithm)

The algorithm employed to obfuscate fonts consists of modifying the first 1040 bytes (~1KB) of the font file. (In the unlikely event that the font file is less than 1040 bytes, this process will modify the entire file.)

To obfuscate the original data, store, as the first byte of the embedded font, the result of performing a logical exclusive or (XOR) on the first byte of the raw font file and the first byte of the [obfuscation key](#obfus-keygen).

Repeat this process with the next byte of source and key and continue for all bytes in the key. At this point, the process continues starting with the first byte of the key and 21st byte of the source. Once 1040 bytes are encoded in this way (or the end of the source is reached), directly copy any remaining data in the source to the destination.

[EPUB creators](#dfn-epub-creator) _MUST_ obfuscate fonts before compressing and adding them to the [OCF ZIP container](#dfn-ocf-zip-container). Note that as obfuscation is not encryption, this requirement is not a violation of the one in [4.2.6.3.2 Encryption file (`encryption.xml`)](#sec-container-metainf-encryption.xml) to compress fonts before encrypting them.

The following pseudo-code exemplifies the obfuscation algorithm.

1.  set ocf to OCF ZIP container file
2.  set source to font file
3.  set destination to obfuscated font file
4.  set keyData to key for file
5.  set outer to 0
6.  while outer < 52 and not (source at EOF)
    
    1.  set inner to 0
    2.  while inner < 20 and not (source at EOF)
        
        1.  read 1 byte from source (Assumes read advances file position)
        2.  set sourceByte to result of read
        3.  set keyByte to byte inner of keyData
        4.  set obfuscatedByte to (sourceByte XOR keyByte)
        5.  write obfuscatedByte to destination
        6.  increment inner
        
        end while
    3.  increment outer
    
    end while
7.  if not (source at EOF) then
    
    1.  read source to EOF
    2.  write result of read to destination
    
    end if
8.  Deflate destination
9.  store destination as source in ocf

#### 4.4.5 Specifying obfuscated fonts

[](#obfus-specifying)

Although not technically encrypted data, all obfuscated fonts _MUST_ have an entry in the `encryption.xml` file accompanying the [EPUB publication](#dfn-epub-publication) (see [4.2.6.3.2 Encryption file (`encryption.xml`)](#sec-container-metainf-encryption.xml)).

[EPUB creators](#dfn-epub-creator) _MUST_ specify an `EncryptedData` element for each obfuscated font. Each `EncryptedData` element _MUST_ contain a child `EncryptionMethod` element whose `Algorithm` attribute has the value `http://www.idpf.org/2008/embedding`. The presence of this attribute signals the use of the algorithm described in this specification.

EPUB creators _MUST_ list the path to the obfuscated font in the `CipherReference` child of the `CipherData` element. As the obfuscation algorithm is restricted to fonts, the `URI` attribute of the `CipherReference` element _MUST_ reference a [Font core media type resource](#cmt-grp-font).

[Example 10](#example-an-entry-for-an-obfuscated-font): An entry for an obfuscated font

```
<encryption
    xmlns="urn:oasis:names:tc:opendocument:xmlns:container"
    xmlns:enc="http://www.w3.org/2001/04/xmlenc#">
   <enc:EncryptedData>
      <enc:EncryptionMethod
          Algorithm="http://www.idpf.org/2008/embedding"/>
      <enc:CipherData>
         <enc:CipherReference
             URI="EPUB/Fonts/BKANT.TTF"/>
      </enc:CipherData>
   </enc:EncryptedData>
</encryption>
```

To prevent trivial copying of the embedded font to other EPUB publications, EPUB creators _MUST NOT_ provide the [obfuscation key](#obfus-keygen) in the `encryption.xml` file.

5\. Package document
--------------------

[](#sec-package-doc)

All \[[xml](#bib-xml "Extensible Markup Language (XML) 1.0 (Fifth Edition)")\] elements defined in this section are in the `http://www.idpf.org/2007/opf` namespace \[[xml-names](#bib-xml-names "Namespaces in XML 1.0 (Third Edition)")\] unless otherwise specified.

### 5.1 Introduction

[](#sec-package-intro)

_This section is non-normative._

The [package document](#dfn-package-document) is an XML document that consists of a set of elements that each encapsulate information about a particular aspect of an [EPUB publication](#dfn-epub-publication). These elements serve to centralize metadata, detail the individual resources, and provide the reading order and other information necessary for its rendering.

The following list summarizes the information found in the package document:

*   [Metadata](#sec-pkg-metadata) — mechanisms to include and/or reference information about the EPUB publication.
    
*   A [manifest](#sec-manifest-elem) — identifies via URL \[[url](#bib-url "URL Standard")\], and describes via MIME media type \[[rfc4839](#bib-rfc4839 "Media Type Registrations for the Open eBook Publication Structure (OEBPS) Package File (OPF)")\], the set of [publication resources](#dfn-publication-resource).
    
*   A [spine](#sec-spine-elem) — an ordered sequence of ID references to top-level resources in the manifest from which [reading systems](#dfn-epub-reading-system) can reach or utilize all other resources in the set. The spine defines the default reading order.
    
*   [Collections](#sec-collection-elem) — a method of encapsulating and identifying subcomponents within the EPUB publication.
    
*   [Manifest fallback chains](#dfn-manifest-fallback-chain) — a mechanism that defines an ordered list of top-level resources as content equivalents. A reading system can then choose between the resources based on which it is capable of rendering.
    

Note

An EPUB publication can reference more than one package document, allowing for alternative representations of the content. For more information, refer to [4.2.6.3.1 Container file (`container.xml`)](#sec-container-metainf-container.xml)

Note

Refer to [I.1 The `application/oebps-package+xml` media type](#app-media-type-app-oebps-package) for information about the file properties of package documents.

### 5.2 Parsing URLs in the package document

[](#sec-parse-package-urls)

To parse a URL string url used in the [package document](#dfn-package-document), the [URL parser](https://url.spec.whatwg.org/#concept-url-parser) \[[url](#bib-url "URL Standard")\] _MUST_ be applied to url, with the [content URL](#dfn-content-url) of the package document as base.

### 5.3 Shared attributes

[](#sec-shared-attrs)

This section provides definitions for shared attributes (i.e., attributes allowed on two or more elements).

#### 5.3.1 The `dir` attribute (under-implemented)

[](#attrdef-dir)

Note

The `dir` attribute is marked [under-implemented](#under-implemented) as [reading systems](#dfn-epub-reading-system) often only support a single default directionality for text display. [EPUB creators](#dfn-epub-creator) are still strongly encouraged to set the proper directionality of text values in the [package document](#dfn-package-document) to ensure proper rendering once this situation improves.

Specifies the [base direction](https://www.unicode.org/reports/tr9/tr9-50.html#BD5) \[[bidi](#bib-bidi "Unicode Bidirectional Algorithm")\] of the textual content and attribute values of the carrying element and its descendants.

Allowed values are:

*   `ltr` — left-to-right base direction;
*   `rtl` — right-to-left base direction; and
*   `auto` — base direction is determined using the Unicode Bidi Algorithm \[[bidi](#bib-bidi "Unicode Bidirectional Algorithm")\].

Reading systems will assume the value `auto` when EPUB creators omit the attribute or use an invalid value.

Note

The base direction specified in the `dir` attribute does not affect the ordering of characters within directional runs, only the relative ordering of those runs and the placement of weak directional characters such as punctuation.

[Example 11](#example-setting-the-global-base-direction-for-package-document-text): Setting the global base direction for package document text

```
<package … dir="ltr">
   …
</package>
```

Allowed on: ``[`collection`](#dfn-collection)``, [Dublin Core elements](#sec-opf-dcmes), ``[`meta`](#dfn-meta)``, and ``[`package`](#dfn-package)``.

#### 5.3.2 The `href` attribute

[](#attrdef-href)

A [valid URL string](https://url.spec.whatwg.org/#valid-url-string) \[[url](#bib-url "URL Standard")\] that references a resource.

The URL string _MUST NOT_ reference resources via elements in the package document (e.g., via a manifest ``[`item`](#dfn-item)`` or spine ``[`itemref`](#dfn-itemref)`` declaration).

[Example 12](#example-linking-a-metadata-record): Linking a metadata record

```
<package …>
   <metadata …>
      …
      <link
          rel="record"
          href="meta/9780000000001.xml"
          media-type="application/marc"/>
      …
   </metadata>
   …
</package>
```

Allowed on: ``[`item`](#dfn-item)`` and ``[`link`](#dfn-link)``.

#### 5.3.3 The `id` attribute

[](#attrdef-id)

The [ID](https://www.w3.org/TR/xml/#id) \[[xml](#bib-xml "Extensible Markup Language (XML) 1.0 (Fifth Edition)")\] of the element, which _MUST_ be unique within the document scope.

[Example 13](#example-adding-an-identifier-attribute): Adding an identifier attribute

```
<dc:title id="pub-title">The Lord of the Rings</dc:title>
```

Allowed on: ``[`collection`](#dfn-collection)``, [Dublin Core elements](#sec-opf-dcmes), ``[`item`](#dfn-item)``, ``[`itemref`](#dfn-itemref)``, ``[`link`](#dfn-link)``, ``[`manifest`](#dfn-manifest)``, ``[`meta`](#dfn-meta)``, ``[`package`](#dfn-package)``, and ``[`spine`](#dfn-spine)``.

#### 5.3.4 The `media-type` attribute

[](#attrdef-media-type)

A media type \[[rfc2046](#bib-rfc2046 "Multipurpose Internet Mail Extensions (MIME) Part Two: Media Types")\] that specifies the type and format of the referenced resource.

[Example 14](#example-adding-the-media-type-for-a-linked-record): Adding the media type for a linked record

```
<package …>
   <metadata …>
      …
      <link
          rel="record"
          href="http://example.org/meta/12389347?format=onix"
          media-type="application/xml"
          properties="onix"/>
      …
   </metadata>
   …
</package>
```

Allowed on: ``[`item`](#dfn-item)`` and ``[`link`](#dfn-link)``.

#### 5.3.5 The `properties` attribute

[](#attrdef-properties)

A space-separated list of [property](#sec-property-datatype) values.

Refer to each element's definition for the [reserved vocabulary](#sec-default-vocab) for the attribute.

[Example 15](#example-identifying-the-epub-navigation-document-in-the-manifest): Identifying the EPUB navigation document in the manifest

```
<package …>
   …
   <manifest>
      …
      <item
          id="nav"
          href="nav.xhtml"
          properties="nav"
          media-type="application/xhtml+xml"/>
      …
   </manifest>
   …
</package>
```

Allowed on: ``[`item`](#dfn-item)``, ``[`itemref`](#dfn-itemref)``, and ``[`link`](#dfn-link)``.

#### 5.3.6 The `refines` attribute

[](#attrdef-refines)

Establishes an association between the current expression and the element or resource identified by its value. [EPUB creators](#dfn-epub-creator) _MUST_ use as the value a [path-relative-scheme-less-URL string](https://url.spec.whatwg.org/#path-relative-scheme-less-url-string), optionally followed by `U+0023 (#)` and a [URL-fragment string](https://url.spec.whatwg.org/#url-fragment-string) that references the resource or element they are describing.

[Example 16](#example-specifying-that-a-creator-is-the-illustrator): Specifying that a creator is the illustrator

```
<package …>
   <metadata …>
      …
      <dc:creator id="creator02">
         E.H. Shepard
      </dc:creator>
      <meta
          refines="#creator02"
          property="role"
          scheme="marc:relators">
         ill
      </meta>
      …
   </metadata>
   …
</package>
```

The `refines` attribute is _OPTIONAL_ depending on the type of metadata expressed. When omitted, the element defines a [primary expression](#primary-expression).

When creating expressions about a [publication resource](#dfn-publication-resource), the `refines` attribute _SHOULD_ specify a fragment identifier that references the [ID](https://www.w3.org/TR/xml/#id) \[[xml](#bib-xml "Extensible Markup Language (XML) 1.0 (Fifth Edition)")\] of the resource's [manifest entry](#sec-item-elem).

Refinement chains _MUST NOT_ contain circular references or self-references.

[Example 17](#example-setting-the-duration-of-a-media-overlay-document): Setting the duration of a media overlay document

```
<package …>
   <metadata …>
      …
      <meta
          property="media:duration"
          refines="#c01_overlay">
         0:32:29
      </meta>
      …
   </metadata>
   <manifest>
      …
      <item
          id="c01_overlay"
          href="overlays/chapter01.smil"
          media-type="application/smil+xml"/>
      …
   </manifest>
   …
</package>
```

Allowed on: ``[`link`](#dfn-link)`` and ``[`meta`](#dfn-meta)``.

#### 5.3.7 The `xml:lang` attribute

[](#attrdef-xml-lang)

Specifies the language of the textual content and attribute values of the carrying element and its descendants, as defined in section [2.12 Language Identification](https://www.w3.org/TR/xml/#sec-lang-tag) of \[[xml](#bib-xml "Extensible Markup Language (XML) 1.0 (Fifth Edition)")\]. The value of each `xml:lang` attribute _MUST_ be a [well-formed language tag](https://www.rfc-editor.org/rfc/rfc5646#section-2.2.9) \[[bcp47](#bib-bcp47 "Tags for Identifying Languages")\].

[Example 18](#example-setting-the-global-language-for-package-document-text): Setting the global language for package document text

```
<package … xml:lang="ja">
   …
</package>
```

Allowed on: ``[`collection`](#dfn-collection)``, [Dublin Core elements](#sec-opf-dcmes), ``[`meta`](#dfn-meta)``, and ``[`package`](#dfn-package)``.

### 5.4 The `package` element

[](#sec-package-elem)

The `package` element encapsulates all the information expressed in the [package document](#dfn-package-document).

Element Name:

`package`

Usage:

_REQUIRED_ [root element](https://www.w3.org/TR/xml/#dt-root) \[[xml](#bib-xml "Extensible Markup Language (XML) 1.0 (Fifth Edition)")\] of the package document.

Attributes:

*   [`dir`](#attrdef-dir) `[optional]`
    
*   [`id`](#attrdef-id) `[optional]`
    
*   [`prefix`](#attrdef-package-prefix) `[optional]`
    
*   [`xml:lang`](#attrdef-xml-lang) `[optional]`
    
*   [`unique-identifier`](#attrdef-package-unique-identifier) `[required]`
    
*   [`version`](#attrdef-package-version) `[required]`
    

Content Model:

In this order:

*   ``[`metadata`](#dfn-metadata)`` `[exactly 1]`
    
*   ``[`manifest`](#dfn-manifest)`` `[exactly 1]`
    
*   ``[`spine`](#dfn-spine)`` `[exactly 1]`
    
*   [`guide`](#sec-opf2-guide) `[0 or 1]` [(legacy)](#sec-pkg-legacy-intro)
    
*   [`bindings`](#sec-opf-bindings) `[0 or 1]` [(deprecated)](#deprecated)
    
*   ``[`collection`](#dfn-collection)`` `[0 or more]`
    

The `version` attribute specifies the EPUB specification version to which the given [EPUB publication](#dfn-epub-publication) conforms. The attribute _MUST_ have the value "`3.0`" to indicate conformance with EPUB 3.

Note

Updates to this specification do not represent new versions of EPUB 3 (i.e., each new 3.X specification is a continuation of the EPUB 3 format). The Working Group is committed to minimizing any changes that would invalidate existing content, allowing the `version` attribute value to remain unchanged.

The `unique-identifier` attribute takes an IDREF \[[xml](#bib-xml "Extensible Markup Language (XML) 1.0 (Fifth Edition)")\] that identifies the ``[`dc:identifier`](#dfn-dc-identifier)`` element that provides the preferred, or primary, identifier.

The `prefix` attribute provides a declaration mechanism for prefixes not [reserved by this specification](#sec-metadata-reserved-prefixes). Refer to [D.1.4 The `prefix` attribute](#sec-prefix-attr) for more information.

### 5.5 Metadata section

[](#sec-pkg-metadata)

#### 5.5.1 The `metadata` element

[](#sec-metadata-elem)

The `metadata` element encapsulates meta information.

Element Name:

`metadata`

Usage:

_REQUIRED_ first child of ``[`package`](#dfn-package)``.

Attributes:

None

Content Model:

In any order:

*   ``[`dc:identifier`](#dfn-dc-identifier)`` `[1 or more]`
    
*   ``[`dc:title`](#dfn-dc-title)`` `[1 or more]`
    
*   ``[`dc:language`](#dfn-dc-language)`` `[1 or more]`
    
*   [`Dublin Core Optional Elements`](#sec-opf-dcmes-optional) `[0 or more]`
    
*   ``[`meta`](#dfn-meta)`` `[1 or more]`
    
*   [OPF2 `meta`](#sec-opf2-meta) `[0 or more]` [(legacy)](#sec-pkg-legacy-intro)
    
*   ``[`link`](#dfn-link)`` `[0 or more]`
    

The [package document](#dfn-package-document) `metadata` element has two primary functions:

1.  to provide a minimal set of meta information for [reading systems](#dfn-epub-reading-system) to use to internally catalogue an [EPUB publication](#dfn-epub-publication) and make it available to a user (e.g., to present in a bookshelf).
    
2.  to provide access to all rendering metadata needed to control the layout and display of the content (e.g., [fixed-layout properties](#sec-fxl-package)).
    

The package document does not provide complex metadata encoding capabilities. If [EPUB creators](#dfn-epub-creator) need to provide more detailed information, they can associate metadata records (e.g., that conform to an international standard such as \[[onix](#bib-onix "ONIX for Books 3.0")\] or are created for custom purposes) using the ``[`link`](#dfn-link)`` element. This approach allows reading systems to process the metadata in its native form, avoiding the potential problems and information loss caused by translating to use the minimal package document structure.

In keeping with this philosophy, the package document only has the following minimal metadata requirements: it _MUST_ contain the \[[dcterms](#bib-dcterms "DCMI Metadata Terms")\] ``[`dc:title`](#dfn-dc-title)``, ``[`dc:identifier`](#dfn-dc-identifier)``, and ``[`dc:language`](#dfn-dc-language)`` elements together with the \[[dcterms](#bib-dcterms "DCMI Metadata Terms")\] ``[`dcterms:modified`](#dfn-dcterms-modified)`` property. All other metadata is _OPTIONAL_.

[Example 19](#example-the-minimal-set-of-metadata-required-in-the-package-document): The minimal set of metadata required in the package document

```
<package … unique-identifier="pub-id">
    …
    <metadata …>
       <dc:identifier
           id="pub-id">
          urn:uuid:A1B0D67E-2E81-4DF5-9E67-A64CBE366809
       </dc:identifier>
       <dc:title>
          Norwegian Wood
       </dc:title>
       <dc:language>
          en
       </dc:language>
       <meta
           property="dcterms:modified">
          2011-01-01T12:00:00Z
       </meta>
    </metadata>
    …
</package>
```

The ``[`meta`](#dfn-meta)`` element provides a generic mechanism for including [metadata properties from any vocabulary](#sec-vocab-assoc). Although EPUB creators _MAY_ use this mechanism for any metadata purposes, they will typically use it to include rendering metadata defined in EPUB specifications.

Note

See \[[epub-a11y-11](#bib-epub-a11y-11 "EPUB Accessibility 1.1")\] for accessibility metadata recommendations.

#### 5.5.2 Metadata values

[](#sec-metadata-values)

The Dublin Core elements \[[dcterms](#bib-dcterms "DCMI Metadata Terms")\] and ``[`meta`](#dfn-meta)`` element have mandatory [child text content](https://dom.spec.whatwg.org/#concept-child-text-content) \[[dom](#bib-dom "DOM Standard")\]. In the descriptions for these elements, this specification refers to this content as the element's value.

These elements _MUST_ have non-empty values after [leading and trailing ASCII whitespace](https://infra.spec.whatwg.org/#strip-leading-and-trailing-ascii-whitespace) \[[infra](#bib-infra "Infra Standard")\] is stripped (i.e., they must consist of at least one non-whitespace character).

Whitespace within these element values is not significant. Sequences of one or more whitespace characters are [collapsed to a single space](https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace) \[[infra](#bib-infra "Infra Standard")\] during processing .

#### 5.5.3 Dublin Core

[](#sec-opf-dcmes-hd)

##### 5.5.3.1 Required elements

[](#sec-opf-dcmes-required-hd)

###### 5.5.3.1.1 The `dc:identifier` element

[](#sec-opf-dcidentifier)

The `dc:identifier` element \[[dcterms](#bib-dcterms "DCMI Metadata Terms")\] contains an identifier such as a UUID, DOI or ISBN.

Element Name:

`dc:identifier`

Namespace:

`http://purl.org/dc/elements/1.1/`

Usage:

_REQUIRED_ child of ``[`metadata`](#dfn-metadata)``. Repeatable.

Attributes:

*   [`id`](#attrdef-id) `[conditionally required]`
    

Content Model:

Text

The [EPUB creator](#dfn-epub-creator) _MUST_ provide an identifier that is unique to one and only one [EPUB publication](#dfn-epub-publication) — its [unique identifier](#dfn-unique-identifier) — in an `dc:identifier` element. This `dc:identifier` element _MUST_ specify an `id` attribute whose value is referenced from the ``[`package`](#dfn-package)`` element's [`unique-identifier` attribute](#attrdef-package-unique-identifier).

[Example 20](#example-specifying-the-element-with-the-unique-identifier): Specifying the element with the unique identifier

```
<package … unique-identifier="pub-id">
    <metadata …>
       <dc:identifier id="pub-id">
           urn:uuid:A1B0D67E-2E81-4DF5-9E67-A64CBE366809
       </dc:identifier>
       …
    </metadata>
</package>
```

Although not static, EPUB creators should make changes to the unique identifier for an EPUB publication as infrequently as possible. Unique Identifiers should have maximal persistence both for referencing and distribution purposes. EPUB creators should not issue new identifiers when making minor revisions such as updating metadata, fixing errata, or making similar minor changes.

EPUB creators _MAY_ specify additional identifiers.

Note

EPUB creators are advised to use [absolute-URL strings](https://url.spec.whatwg.org/#absolute-url-string) \[url\] for identifiers whenever possible. The inclusion of a domain owned by the EPUB creator can improve the uniqueness of the identifier, for example, while the use of a URN with a [namespace identifier](https://datatracker.ietf.org/doc/html/rfc8141#section-2.1) \[[rfc8141](#bib-rfc8141 "Uniform Resource Names (URNs)")\] improves processing by reading systems.

EPUB creators _MAY_ use the [`identifier-type` property](#identifier-type) to indicate that the value of a `dc:identifier` element conforms to an established system or an issuing authority granted it.

[Example 21](#example-specifying-the-type-of-the-identifier): Specifying the type of the identifier

In this example, the `identifier-type` property is used with the [ONIX codelist 5](https://ns.editeur.org/onix/en/5) scheme to indicate the product identifier type is a [DOI](https://www.doi.org) (i.e., the value `06` in codelist 5 is for DOIs).

```
<metadata …>
   <dc:identifier
       id="pub-id">
      urn:doi:10.1016/j.iheduc.2008.03.001
   </dc:identifier>
   <meta
       refines="#pub-id"
       property="identifier-type"
       scheme="onix:codelist5">
      06
   </meta>
   …
</metadata>
```

###### 5.5.3.1.2 The `dc:title` element

[](#sec-opf-dctitle)

The `dc:title` element \[[dcterms](#bib-dcterms "DCMI Metadata Terms")\] represents an instance of a name for the [EPUB publication](#dfn-epub-publication).

Element Name:

`dc:title`

Namespace:

`http://purl.org/dc/elements/1.1/`

Usage:

_REQUIRED_ child of ``[`metadata`](#dfn-metadata)``. Repeatable.

Attributes:

*   [`dir`](#attrdef-dir) `[optional]`
    
*   [`id`](#attrdef-id) `[optional]`
    
*   [`xml:lang`](#attrdef-xml-lang) `[optional]`
    

Content Model:

Text

The first `dc:title` element in document order is the main title of the EPUB publication (i.e., the primary one reading systems present to users).

[Example 22](#example-a-basic-title-element): A basic title element

```
<metadata …>
   <dc:title>
      Norwegian Wood
   </dc:title>
   …
</metadata>
```

[EPUB creators](#dfn-epub-creator) should use only a single `dc:title` element to ensure consistent rendering of the title in [reading systems](#dfn-epub-reading-system).

Note

Although it is possible to include more than one `dc:title` element for multipart titles, reading system support for additional `dc:title` elements is inconsistent. Reading systems may ignore the additional segments or combine them in unexpected ways.

For example, the following example shows a basic multipart title:

```
<metadata …>
   <dc:title>
      THE LORD OF THE RINGS
   </dc:title>
   <dc:title>
      Part One: The Fellowship of the Ring
   </dc:title>
   …
</metadata>
```

The same title could instead be expressed using a single `dc:title` element as follows:

```
<metadata …>
   <dc:title>
       THE LORD OF THE RINGS, Part One:
       The Fellowship of the Ring
   </dc:title>
   …
</metadata>
```

Previous versions of this specification recommended using the [`title-type`](#sec-title-type) and [`display-seq`](#sec-display-seq) properties to identify and format the segments of multipart titles (see the [Great Cookbooks example](#cookbook-ex)). It is still possible to add these semantics, but they are also not well supported.

###### 5.5.3.1.3 The `dc:language` element

[](#sec-opf-dclanguage)

The `dc:language` element \[[dcterms](#bib-dcterms "DCMI Metadata Terms")\] specifies the language of the content of the [EPUB publication](#dfn-epub-publication).

Element Name:

`dc:language`

Namespace:

`http://purl.org/dc/elements/1.1/`

Usage:

_REQUIRED_ child of ``[`metadata`](#dfn-metadata)``. Repeatable.

Attributes:

[`id`](#attrdef-id) `[optional]`

Content Model:

Text

The [value](#dfn-value) of each `dc:language` element _MUST_ be a [well-formed language tag](https://www.rfc-editor.org/rfc/rfc5646#section-2.2.9) \[[bcp47](#bib-bcp47 "Tags for Identifying Languages")\].

[Example 23](#example-specifying-u-s-english-as-the-language-of-the-epub-publication): Specifying U.S. English as the language of the EPUB publication

```
<metadata …>
   …
   <dc:language>
      en-US
   </dc:language>
   …
</metadata>
```

Although [EPUB creators](#dfn-epub-creator) _MAY_ specify additional `dc:language` elements for multilingual Publications, [reading systems](#dfn-epub-reading-system) will treat the first `dc:language` element in document order as the primary language of the EPUB publication.

Note

[Publication resources](#dfn-publication-resource) do not inherit their language from the `dc:language` element(s). EPUB creators must set the language of a resource using the intrinsic methods of the format.

##### 5.5.3.2 Optional elements

[](#sec-opf-dcmes-optional-hd)

###### 5.5.3.2.1 General definition

[](#sec-opf-dcmes-optional-def)

All \[[dcterms](#bib-dcterms "DCMI Metadata Terms")\] elements except for ``[`dc:identifier`](#dfn-dc-identifier)``, ``[`dc:language`](#dfn-dc-language)``, and ``[`dc:title`](#dfn-dc-title)`` are designated as _OPTIONAL_. These elements conform to the following generalized definition:

Element Name:

`dc:contributor` | `dc:coverage` | `dc:creator` | `dc:date` | `dc:description` | `dc:format` | `dc:publisher` | `dc:relation` | `dc:rights` | `dc:source` | `dc:subject` | `dc:type`

Namespace:

`http://purl.org/dc/elements/1.1/`

Usage:

_OPTIONAL_ child of ``[`metadata`](#dfn-metadata)``. Repeatable.

Attributes:

*   [`dir`](#attrdef-dir) `[optional]`
    
*   [`id`](#attrdef-id) `[optional]`
    
*   [`xml:lang`](#attrdef-xml-lang) `[optional]`
    

Content Model:

Text

This specification does not modify the \[[dcterms](#bib-dcterms "DCMI Metadata Terms")\] element definitions except as noted in the following sections.

###### 5.5.3.2.2 The `dc:contributor` element

[](#sec-opf-dccontributor)

The `dc:contributor` element \[[dcterms](#bib-dcterms "DCMI Metadata Terms")\] is used to represent the name of a person, organization, etc. that played a secondary role in the creation of the content.

The requirements for the `dc:contributor` element are identical to those for the ``[`dc:creator`](#dfn-dc-creator)`` element in all other respects.

###### 5.5.3.2.3 The `dc:creator` element

[](#sec-opf-dccreator)

The `dc:creator` element \[[dcterms](#bib-dcterms "DCMI Metadata Terms")\] represents the name of a person, organization, etc. responsible for the creation of the content. [EPUB creators](#dfn-epub-creator) _MAY_ [associate](#subexpression) a [`role` property](#role) with the element to indicate the function the creator played.

[Example 24](#example-specifying-that-a-creator-is-an-author): Specifying that a creator is an author

In this example, the [MARC relators](https://id.loc.gov/vocabulary/relators.html) scheme is used to indicate the role (i.e., the value `aut` indicates an author in MARC).

```
<metadata …>
   …
   <dc:creator
       id="creator">
      Haruki Murakami
   </dc:creator>
   <meta
       refines="#creator"
       property="role"
       scheme="marc:relators"
       id="role">
      aut
   </meta>
   …
</metadata>
```

The `dc:creator` element should contain the name of the creator as EPUB creators intend [reading systems](#dfn-epub-reading-system) to display it to users.

EPUB creators _MAY_ use the [`file-as` property](#file-as) [to associate](#subexpression) a normalized form of the creator's name, and the [`alternate-script` property](#alternate-script) to represent the creator's name in another language or script.

[Example 25](#example-expressing-sorting-and-rendering-information-for-a-creator): Expressing sorting and rendering information for a creator

```
<metadata …>
   …
   <dc:creator
       id="creator">
      Haruki Murakami
   </dc:creator>
   <meta
       refines="#creator"
       property="alternate-script"
       xml:lang="ja">
      村上 春樹
   </meta>
   <meta
       refines="#creator"
       property="file-as">
      Murakami, Haruki
   </meta>
   …
</metadata>
```

If an [EPUB publication](#dfn-epub-publication) has more than one creator, EPUB creators should specify each in a separate `dc:creator` element.

The document order of `dc:creator` elements in the `metadata` section determines the display priority, where the first `dc:creator` element encountered is the primary creator.

[Example 26](#example-expressing-the-primary-creator): Expressing the primary creator

In this example, Lewis Carroll is the primary creator because he is listed first.

```
<metadata …>
   …
   <dc:creator
       id="creator01">
      Lewis Carroll
   </dc:creator>
   <dc:creator
       id="creator02">
      John Tenniel
   </dc:creator>
   …
</metadata>
```

EPUB creators should represent secondary contributors using the ``[`dc:contributor`](#dfn-dc-contributor)`` element.

###### 5.5.3.2.4 The `dc:date` element

[](#sec-opf-dcdate)

The `dc:date` element \[[dcterms](#bib-dcterms "DCMI Metadata Terms")\] defines the publication date of the [EPUB publication](#dfn-epub-publication). The publication date is not the same as the [last modified date](#last-modified-date) (the last time the [EPUB creator](#dfn-epub-creator) changed the EPUB publication).

It is _RECOMMENDED_ that the date string conform to \[[iso8601-1](#bib-iso8601-1 "Date and time — Representations for information interchange — Part 1: Basic rules. ISO 8601-1:2019.")\], particularly the subset expressed in W3C Date and Time Formats \[[datetime](#bib-datetime "Date and Time Formats")\], as such strings are both human and machine readable.

[Example 27](#example-expressing-the-publication-date): Expressing the publication date

```
<metadata …>
   …
   <dc:date>
      2000-01-01T00:00:00Z
   </dc:date>
   …
</metadata>
```

EPUB creators should express additional dates using the specialized date properties available in the \[[dcterms](#bib-dcterms "DCMI Metadata Terms")\] vocabulary, or similar.

EPUB publications _MUST NOT_ contain more than one `dc:date` element.

###### 5.5.3.2.5 The `dc:subject` element

[](#sec-opf-dcsubject)

The `dc:subject` element \[[dcterms](#bib-dcterms "DCMI Metadata Terms")\] identifies the subject of the [EPUB publication](#dfn-epub-publication). [EPUB creators](#dfn-epub-creator) should set the [value](#dfn-value) of the element to the human-readable heading or label, but may use a code value if the subject taxonomy does not provide a separate descriptive label.

EPUB creators _MAY_ identify the system or scheme they drew the element's [value](#dfn-value) from using the [`authority` property](#authority).

When a scheme is identified, EPUB creators _MUST_ [associate](#subexpression) a subject code using the [`term` property](#term).

[Example 28](#example-specifying-a-bisac-code-and-heading): Specifying a BISAC code and heading

```
<metadata …>
   <dc:subject id="subject01">
      FICTION / Occult &amp; Supernatural
   </dc:subject>
   <meta
       refines="#subject01"
       property="authority">
      BISAC
   </meta>
   <meta
       refines="#subject01"
       property="term">
      FIC024000
   </meta>
</metadata>
```

[Example 29](#example-specifying-a-url-for-the-scheme): Specifying a URL for the scheme

```
<metadata …>
   <dc:subject id="sbj01">
      Number Theory
   </dc:subject>
   <meta
       refines="#sbj01"
       property="authority">
      http://www.ams.org/msc/msc2010.html
   </meta>
   <meta
      refines="#sbj01"
      property="term">
     11
  </meta>
</metadata>
```

The `term` property _MUST NOT_ be [associated with a `dc:subject` element](#subexpression) that does not specify a scheme.

The [values](#dfn-value) of the `dc:subject` element and `term` property are case sensitive only when the designated scheme requires.

###### 5.5.3.2.6 The `dc:type` element

[](#sec-opf-dctype)

The `dc:type` element \[[dcterms](#bib-dcterms "DCMI Metadata Terms")\] is used to indicate that the [EPUB publication](#dfn-epub-publication) is of a specialized type (e.g., annotations or a dictionary packaged in EPUB format).

[EPUB creators](#dfn-epub-creator) _MAY_ use any text string as a [value](#dfn-value).

Note

The former IDPF EPUB 3 Working Group maintained a [non-normative registry of specialized EPUB publication types](http://idpf.org/epub/vocab/package/types/) for use with this element. This Working Group no longer maintains the registry and does not anticipate developing new specialized publication types.

#### 5.5.4 The `meta` element

[](#sec-meta-elem)

The `meta` element provides a generic means of including package metadata.

Element Name:

`meta`

Usage:

As child of the ``[`metadata`](#dfn-metadata)`` element. Repeatable.

Attributes:

*   [`dir`](#attrdef-dir) `[optional]`
    
*   [`id`](#attrdef-id) `[optional]`
    
*   [`property`](#attrdef-meta-property) `[required]`
    
*   [`refines`](#attrdef-refines) `[optional]`
    
*   [`scheme`](#attrdef-scheme) `[optional]`
    
*   [`xml:lang`](#attrdef-xml-lang) `[optional]`
    

Content Model:

Text

Each `meta` element defines a metadata expression. The `property` attribute takes a [property data type value](#sec-property-datatype) that defines the statement made in the expression, and the text content of the element represents the assertion. (Refer to [D.1 Vocabulary association mechanisms](#sec-vocab-assoc) for more information.)

This specification defines two types of metadata expressions that [EPUB creators](#dfn-epub-creator) can define using the `meta` element:

*   A _primary expression_ is one in which the expression defined in the `meta` element establishes some aspect of the [EPUB publication](#dfn-epub-publication). A `meta` element that omits a refines attribute defines a primary expression.
*   A _subexpression_ is one in which the expression defined in the `meta` element is associated with another expression or resource using the `refines` attribute to enhance its meaning. A subexpression might refine a media clip, for example, by expressing its duration, or refine a creator or contributor expression by defining the role of the person.

EPUB creators _MAY_ use subexpressions to refine the meaning of other subexpressions, thereby creating chains of information.

Note

All the \[[dcterms](#bib-dcterms "DCMI Metadata Terms")\] elements represent primary expressions, and permit refinement by meta element subexpressions.

The [Meta Properties Vocabulary](#app-meta-property-vocab) is the [default vocabulary](#sec-default-vocab) for use with the `property` attribute.

EPUB creators _MAY_ add terms from other vocabularies as defined in [D.1 Vocabulary association mechanisms](#sec-vocab-assoc).

[Example 30](#example-using-properties-with-reserved-prefixes): Using properties with reserved prefixes

For the full list of reserved prefixes, refer to [D.1.5 Reserved prefixes](#sec-reserved-prefixes).

```
<metadata …>
   …
   <meta
       property="dcterms:modified">
      2016-02-29T12:34:56Z
   </meta>
   <meta
       property="rendition:layout">
      pre-paginated
   </meta>
   <meta
       property="media:active-class">
      my-active-item
   </meta>
   …
</metadata>
```

The `scheme` attribute identifies the system or scheme the EPUB creator obtained the element's [value](#dfn-value) from. The value of the attribute _MUST_ be a [property data type value](#sec-property-datatype) that resolves to the resource that defines the scheme. The `scheme` attribute does not have a [default vocabulary](#sec-default-vocab) (i.e., all values require a [prefix](#property.ebnf.prefix)).

[Example 31](#example-using-values-from-a-scheme): Using values from a scheme

In this example, the `scheme` attribute indicates that the [value](#dfn-value) of the tag is from \[[onix](#bib-onix "ONIX for Books 3.0")\] code list 5 (i.e., the value `15` indicates a 13 digit ISBN).

```
<metadata …>
   …
   <meta
       refines="#isbn-id"
       property="identifier-type"
       scheme="onix:codelist5">
      15
   </meta>
   …
</metadata>
```

#### 5.5.5 Last modified date

[](#sec-metadata-last-modified)

The `metadata` section _MUST_ contain exactly one `dcterms:modified` property \[[dcterms](#bib-dcterms "DCMI Metadata Terms")\] containing the last modification date. The [value](#dfn-value) of this property _MUST_ be an \[[iso8601-1](#bib-iso8601-1 "Date and time — Representations for information interchange — Part 1: Basic rules. ISO 8601-1:2019.")\] complete representation of a date and time of day matching the extended format: `YYYY-MM-DDThh:mm:ssZ`

[EPUB creators](#dfn-epub-creator) _MUST_ express the last modification date in Coordinated Universal Time (UTC) and _MUST_ terminate it with the "`Z`" (Zulu) time zone indicator.

[Example 32](#example-expressing-a-last-modification-date): Expressing a last modification date

```
<metadata …>
   …
   <meta
       property="dcterms:modified">
      2016-01-01T00:00:01Z
   </meta>
   …
</metadata>
```

EPUB creators should update the last modified date whenever they make changes to the [EPUB publication](#dfn-epub-publication).

EPUB creators _MAY_ specify additional modified properties in the [package document](#dfn-package-document) metadata, but they _MUST_ have a different subject (i.e., they require a `refines` attribute that references an element or resource).

Note

The requirements for the last modification date are to ensure compatibility with earlier versions of EPUB 3 that defined a [release identifier](https://www.w3.org/publishing/epub32/epub-packages.html#sec-metadata-elem-identifiers-pid) \[[epubpackages-32](#bib-epubpackages-32 "EPUB Packages 3.2")\] for EPUB publications.

#### 5.5.6 The `link` element

[](#sec-link-elem)

The `link` element associates resources with an [EPUB publication](#dfn-epub-publication), such as metadata records.

Element Name:

`link`

Usage:

As a child of ``[`metadata`](#dfn-metadata)``. Repeatable.

Attributes:

*   [`href`](#attrdef-href) `[required]`
    
*   [`hreflang`](#attrdef-hreflang) `[optional]`
    
*   [`id`](#attrdef-id) `[optional]`
    
*   [`media-type`](#attrdef-link-media-type) `[conditionally required]`
    
*   [`properties`](#attrdef-properties) `[optional]`
    
*   [`refines`](#attrdef-refines) `[optional]`
    
*   [`rel`](#attrdef-link-rel) `[required]`
    

Content Model:

Empty

The ``[`metadata`](#dfn-metadata)`` element _MAY_ contain zero or more `link` elements, each of which identifies the location of a [publication resource](#dfn-publication-resource) or a [linked resource](#dfn-linked-resource) in its _REQUIRED_ `href` attribute.

Resources referenced from the `link` element are [publication resources](#dfn-publication-resource) only when they are:

*   referenced from the [spine](#dfn-epub-spine); or
    
*   included or embedded in an [EPUB content document](#dfn-epub-content-document) (e.g., a metadata record serialized as RDFa \[[rdfa-core](#bib-rdfa-core "RDFa Core 1.1 - Third Edition")\] or as JSON-LD \[[json-ld11](#bib-json-ld11 "JSON-LD 1.1")\] embedded in an \[[html](#bib-html "HTML Standard")\] `[script](https://html.spec.whatwg.org/multipage/scripting.html#script)` element).
    

In all other cases (e.g., when linking to standalone \[[onix](#bib-onix "ONIX for Books 3.0")\] records), the resources referenced are not [publication resources](#dfn-publication-resource) (i.e., are not subject to [core media type requirements](#sec-core-media-types)) and [EPUB creators](#dfn-epub-creator) _MUST NOT_ list them in the [manifest](#sec-manifest-elem).

[Example 33](#example-reference-to-a-record-embedded-in-an-xhtml-content-document): Reference to a record embedded in an XHTML content document

In this example, the metadata record is embedded in a `script` element. Note that the media type of the embedded record (i.e., `application/ld+json`) is obtained from the `type` attribute on the `script` element; it is not specified in the `link` element.

```
Package document:

<package …>
   <metadata …>
      …
      <link rel="record"
          href="front.xhtml#meta-json"
          media-type="application/xhtml+xml"
          hreflang="en"/>
      …
   </metadata>
   …
</package>

XHTML:

<html …>
   <head>
      …
      <script id="meta-json" type="application/ld+json">
          "@context" : "http://schema.org",
          "name" : "…",
         …
      </script>
      …
   </head>
   <body>
      …
   </body>
</html>
```

EPUB creators _MAY_ locate linked resources within the [EPUB container](#dfn-epub-container) or externally, but should consider that [reading systems](#dfn-epub-reading-system) are not required to retrieve resources outside the EPUB container.

The [`media-type` attribute](#attrdef-media-type) is _OPTIONAL_ when a linked resource is located outside the EPUB container, as more than one media type could be served from the same URL \[[url](#bib-url "URL Standard")\]. EPUB creators _MUST_ specify the attribute for all linked resources within the EPUB container.

The _OPTIONAL_ `hreflang` attribute identifies the language of the linked resource. The value _MUST_ be a [well-formed language tag](https://www.rfc-editor.org/rfc/rfc5646#section-2.2.9) \[[bcp47](#bib-bcp47 "Tags for Identifying Languages")\].

The _REQUIRED_ `rel` attribute takes a space-separated list of [property](#sec-property-datatype) values that establish the relationship the linked resource has with the EPUB publication.

[Example 34](#example-linking-to-a-marc-xml-record): Linking to a MARC XML record

```
<metadata …>
   …
   <link
       rel="record"
       href="meta/9780000000001.xml"
       media-type="application/marc"/>
   …
</metadata>
```

The value of the `media-type` attribute is not always sufficient to identify the type of linked resource (e.g., many XML-based record formats use the media type "`application/xml`"). To aid reading systems in the identification of such generic resources, EPUB creators _MAY_ specify a semantic identifier in the `properties` attribute.

[Example 35](#example-identifying-a-record-type-via-a-property): Identifying a record type via a property

In this example, the `properties` attribute identifies the link is to an ONIX record.

```
<metadata …>
   …
   <link rel="record"
       href="http://example.org/meta/12389347?format=onix"
       media-type="application/xml"
       properties="onix"/>
   …
</metadata>
```

The [Metadata Link Vocabulary](#app-link-vocab) is the [default vocabulary](#sec-default-vocab) for the `rel` and `properties` attributes.

EPUB creators _MAY_ add relationships and properties from other vocabularies as defined in [D.1 Vocabulary association mechanisms](#sec-vocab-assoc).

[Example 36](#example-declaring-a-new-link-relationship): Declaring a new link relationship

In this example, the `link` element is used to associate an author's home page using the FOAF vocabulary. Note that as `foaf` is not a [reserved prefix](#sec-metadata-reserved-prefixes), it must be declared in the [prefix attribute](#attrdef-package-prefix).

```
<package
    …
    prefix="foaf: http://xmlns.com/foaf/spec/">
   <metadata …>
      …
      <link
          refines="#creator01"
          rel="foaf:homepage"
          href="http://example.org/book-info/12389347" />
      …
   </metadata>
   …
</package>
```

EPUB creators _MAY_ provide one or more [linked metadata records](#record).

[Example 37](#example-specifying-linked-records): Specifying linked records

In this example, an ONIX record is hosted remotely while a JSON-LD record is included in the EPUB container.

```
<metadata …>
   <link rel="record"
       href="http://example.org/onix/12389347"
       media-type="application/xml"
       properties="onix" />

   <link rel="record"
       href="meta/meta.jsonld"
       media-type="application/ld+json" />
    …
</metadata>
```

Note

Due to the variety of metadata record formats and serializations that an EPUB creator can link to an EPUB publication, and the complexity of comparing metadata properties between them, this specification does not require reading systems to process linked records.

In addition to full records, EPUB creators _MAY_ also use the `link` element to identify individual metadata properties available in an alternative format.

[Example 38](#example-link-to-a-description): Link to a description

In this example, the description of the EPUB publication is contained in an HTML document.

```
<metadata …>
   …
   <link
       rel="dcterms:description"
       href="description.html"
       media-type="text/html"/>
   …
</metadata>
```

### 5.6 Manifest section

[](#sec-pkg-manifest)

#### 5.6.1 The `manifest` element

[](#sec-manifest-elem)

The `manifest` element provides an exhaustive list of [publication resources](#dfn-publication-resource) used in the rendering of the content.

Element Name:

`manifest`

Usage:

_REQUIRED_ second child of ``[`package`](#dfn-package)``, following ``[`metadata`](#dfn-metadata)``.

Attributes:

[`id`](#attrdef-id) `[optional]`

Content Model:

``[`item`](#dfn-item)`` `[1 or more]`

With the exception of the [package document](#dfn-package-document), the `manifest` _MUST_ list all publication resources regardless of whether they are [container resources](#dfn-container-resource) or [remote resources](#dfn-remote-resource).

As the package document is already identified by the [`container.xml` file](#sec-container-metainf-container.xml), the `manifest` _MUST NOT_ specify an `item` element for it (i.e., a self-reference serves no purpose).

Note

The manifest is only for listing publication resources. [Linked resources](#dfn-linked-resource) and [the special files for processing the OCF Container](#sec-container-file-and-dir-structure) (i.e., files in the `META-INF` directory, and the `mimetype` file) are restricted from inclusion.

Failure to provide a complete manifest of publication resources may lead to rendering issues. [Reading systems](#dfn-epub-reading-system) might not unzip such resources or could prevent access to them for security reasons.

#### 5.6.2 The `item` element

[](#sec-item-elem)

The `item` element represents a [publication resource](#dfn-publication-resource).

Element Name:

`item`

Usage:

As a child of ``[`manifest`](#dfn-manifest)``. Repeatable.

Attributes:

*   [`fallback`](#attrdef-item-fallback) `[conditionally required]`
    
*   [`href`](#attrdef-item-href) `[required]`
    
*   [`id`](#attrdef-id) `[required]`
    
*   [`media-overlay`](#attrdef-item-media-overlay) `[optional]`
    
*   [`media-type`](#attrdef-item-media-type) `[required]`
    
*   [`properties`](#sec-item-resource-properties) `[optional]`
    

Content Model:

Empty

Each `item` element identifies a publication resource by the URL \[[url](#bib-url "URL Standard")\] in its [`href` attribute](#attrdef-href). The value _MUST_ be an [absolute-](https://url.spec.whatwg.org/#absolute-url-string) or [path-relative-scheme-less-URL](https://url.spec.whatwg.org/#path-relative-scheme-less-url-string) string \[[url](#bib-url "URL Standard")\]. [EPUB creators](#dfn-epub-creator) _MUST_ ensure each URL is unique within the `manifest` scope after [parsing](#sec-parse-package-urls).

The publication resource identified by an `item` element _MUST_ conform to the applicable specification(s) as inferred from the MIME media type \[[rfc2046](#bib-rfc2046 "Multipurpose Internet Mail Extensions (MIME) Part Two: Media Types")\] provided in the [`media-type` attribute](#attrdef-media-type). For [core media type resources](#dfn-core-media-type-resource), EPUB creators _MUST_ use the media type designated in [3.2 Core media types](#sec-core-media-types).

The `fallback` attribute specifies the fallback for the referenced publication resource. The `fallback` attribute's [IDREF](https://www.w3.org/TR/xml/#idref) \[[xml](#bib-xml "Extensible Markup Language (XML) 1.0 (Fifth Edition)")\] value _MUST_ resolve to another `item` in the `manifest`.

The fallback for one `item` _MAY_ specify a fallback to another `item`, and so on, creating a chain of fallback options. Refer to [3.5.1 Manifest fallbacks](#sec-manifest-fallbacks) for additional requirements related to the use of fallback chains.

The `media-overlay` attribute takes an IDREF \[[xml](#bib-xml "Extensible Markup Language (XML) 1.0 (Fifth Edition)")\] that identifies the [media overlay document](#dfn-media-overlay-document) for the resource described by this `item`. Refer to [9.3.5 Media overlays packaging](#sec-docs-package) for more information.

Note

The order of `item` elements in the `manifest` is not significant. The ``[`spine`](#dfn-spine)`` element provides the presentation sequence of content documents.

##### 5.6.2.1 Resource properties

[](#sec-item-resource-properties)

The [`properties` attribute](#attrdef-properties) provides information to [reading systems](#dfn-epub-reading-system) about the content of a resource. This information enables discovery of key resources, such as the cover image and [EPUB navigation document](#dfn-epub-navigation-document). It also allows reading systems to optimize rendering by indicating, for example, whether the resource contains embedded scripting, MathML, or SVG.

The [Manifest Properties Vocabulary](#app-item-properties-vocab) is the [default vocabulary](#sec-default-vocab) for the `properties` attribute.

[EPUB creators](#dfn-epub-creator) _MUST_ set the following properties whenever a resource referenced by an `item` element matches their respective definitions:

*   [mathml](#sec-mathml)
*   [remote-resources](#sec-remote-resources)
*   [scripted](#sec-scripted)
*   [svg](#sec-svg)
*   [switch](#sec-switch)

[Example 39](#example-item-properties-scripted-mathml): Identifying a scripted content document with embedded MathML

```
<item
    properties="scripted mathml"
    id="c2"
    href="c2.xhtml"
    media-type="application/xhtml+xml" />
```

These properties do not apply recursively to content included into a resource (e.g., via the \[[html](#bib-html "HTML Standard")\] `[iframe](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element)` element). For example, if a non-scripted [XHTML content document](#dfn-xhtml-content-document) embeds a [scripted content document](#dfn-scripted-content-document), only the embedded document's manifest `item` `properties` attribute will have the `scripted` value.

EPUB creators _MUST_ declare exactly one `item` as the EPUB navigation document using the [`nav` property](#sec-nav-prop).

[Example 40](#example-item-properties-nav): Identifying the EPUB navigation document

```
<item
    properties="nav"
    id="c1"
    href="c1.xhtml"
    media-type="application/xhtml+xml" />
```

If an EPUB publication contains a cover image, it is recommended to set the [`cover-image` property](#sec-cover-image), but setting this property is _OPTIONAL_.

[Example 41](#example-item-properties-cover-image): Identifying the cover image

```
<item
    properties="cover-image"
    id="ci"
    href="cover.svg"
    media-type="image/svg+xml" />
```

EPUB creators _MAY_ add terms from other vocabularies as defined in [D.1 Vocabulary association mechanisms](#sec-vocab-assoc).

##### 5.6.2.2 Examples

[](#sec-item-elem-examples)

[Example 42](#example-manifest-cmt): A manifest with only core media type resources

```
<package …>
   …
   <manifest>
      <item
          id="nav"
          href="nav.xhtml"
          properties="nav"
          media-type="application/xhtml+xml"/>
      <item
          id="intro"
          href="intro.xhtml"
          media-type="application/xhtml+xml"/>
      <item
          id="c1"
          href="chap1.xhtml"
          media-type="application/xhtml+xml"/>
      <item
          id="c1-answerkey"
          href="chap1-answerkey.xhtml"
          media-type="application/xhtml+xml"/>
      <item
          id="c2"
          href="chap2.xhtml"
          media-type="application/xhtml+xml"/>
      <item
          id="c2-answerkey"
          href="chap2-answerkey.xhtml"
          media-type="application/xhtml+xml"/>
      <item
          id="c3"
          href="chap3.xhtml"
          media-type="application/xhtml+xml"/>
      <item
          id="c3-answerkey"
          href="chap3-answerkey.xhtml"
          media-type="application/xhtml+xml"/>
      <item
          id="notes"
          href="notes.xhtml"
          media-type="application/xhtml+xml"/>
      <item
          id="cover"
          href="./images/cover.svg"
          properties="cover-image"
          media-type="image/svg+xml"/>
      <item
          id="f1"
          href="./images/fig1.jpg"
          media-type="image/jpeg"/>
      <item
          id="f2"
          href="./images/fig2.jpg"
          media-type="image/jpeg"/>
      <item
          id="css"
          href="./style/book.css"
          media-type="text/css"/>
   </manifest>
   …
</package>
```

[Example 43](#example-manifest-flbk): Foreign content document in spine with fallback

The following example shows the [manifest fallback chain](#dfn-manifest-fallback-chain) allowing a [foreign content document](#dfn-foreign-content-document) (JPEG) to be listed in the spine with fallback to an SVG content document.

```
<package …>
   …
   <manifest>
      …
      <item
          id="page-001"
          href="images/page-001.jpg"
          media-type="image/jpeg"
          fallback="page-001-svg"/>

      <item
          id="page-001-svg"
          href="images/page-001.svg"
          media-type="image/svg+xml"/>
      …
      …
   </manifest>
   <spine>
      …
      <itemref idref="page-001"/>
      …
   </spine>
</package>
```

[Example 44](#example-embedded-core-media-type-resource-with-link-to-view-as-top-level-content-document): Embedded core media type resource with Link to View as top-level content document

The following example shows a JPEG embedded in an [EPUB content document](#dfn-epub-content-document) (via the `img` tag) with a hyperlink that allows it to open as a separate page (e.g., for easier zooming). Although embedding the image using the `img` tag does not require it to be listed in the [spine](#dfn-epub-spine) or have a fallback, adding the hyperlink causes the document to open as a [top-level content document](#dfn-top-level-content-document). As its use in the spine makes it a [foreign content document](#dfn-foreign-content-document), the [EPUB creator](#dfn-epub-creator) must include a fallback to an EPUB content document.

```
XHTML:
<html …>
   …
   <body>
      …
      <img
          src="images/infographic.jpg"
          alt="…"/>
      <a
          href="images/infographic.jpg">
         Expand Image
      </a>
      …
   </body>
</html>

Package document:
<package …>
   …
   <manifest>
      …
      <item
          id="img01"
          href="images/infographic.jpg"
          media-type="image/jpeg"
          fallback="infographic-svg"/>

      <item
          id="infographic-svg"
          href="images/infographic.svg"
          media-type="image/svg+xml"/>
      …
   </manifest>
   <spine>
      …
      <itemref
          idref="img01"
          properties="layout-pre-paginated"
          linear="no"/>
      …
   </spine>
</package>
```

[Example 45](#example-link-to-view-foreign-resource-as-top-level-content-document): Link to View foreign resource as top-level content document

The following example shows a link to the raw CSV data file. As the data will open in the [reading system](#dfn-epub-reading-system) as a [top-level content document](#dfn-top-level-content-document), the [EPUB creator](#dfn-epub-creator) must list it in the spine. As its use in the spine makes it a [foreign content document](#dfn-foreign-content-document), the EPUB creator must also provide a fallback to an [EPUB content document](#dfn-epub-content-document). Because there is no guarantee users will be able to access the data in its raw form, instructions on how to extract the file from the [EPUB container](#dfn-epub-container) are also provided.

```
XHTML:
<html …>
   …
   <body>
      …
      <p>
         <a href="../data/raw.csv">
            [Open the raw CSV data for this project.]
         </a>
      </p>
      <p class="small">To extract the data file
         from this publication, unzip the EPUB file.
         The data is located in the
      	<code>/EPUB/data/raw.csv</code> file.
      </p>
      …
   </body>
</html>

Package document:
<package …>
   …
   <manifest>
      …
      <item
          id="data01"
          href="data/raw.csv"
          media-type="text/csv"
          fallback="data-html"/>

      <item
          id="data-html"
          href="xhtml/data-table.html"
          media-type="application/xhtml+xml"/>
      …
   </manifest>
   <spine>
      …
      <itemref
          idref="data01"
          linear="no"/>
      …
   </spine>
</package>
```

[Example 46](#example-remote-resources-that-are-publication-resources): Remote resources that are publication resources

The following example shows a reference to a remote audio file. Because the `audio` element embeds the audio in its [EPUB content document](#dfn-epub-content-document), the file is considered a [publication resource](#dfn-publication-resource). The [EPUB creator](#dfn-epub-creator) therefore must list the audio file in the manifest and indicate that its host EPUB content document contains a [remote resource](#dfn-remote-resource).

```
XHTML:
<html …>
   …
   <body>
      …
      <audio
          src="http://www.example.com/book/audio/ch01.mp4"
          controls="controls"/>
      …
   </body>
</html>

Package document:
<package …>
   …
   <manifest>
      …
      <item
          id="audio01"
          href="http://www.example.com/book/audio/ch01.mp4"
          media-type="audio/mp4"/>

      <item
          id="c01"
          href="XHTML/chapter001.xhtml"
          media-type="application/xhtml+xml"
          properties="remote-resources"/>
      …
   </manifest>
   …
</package>
```

[Example 47](#example-external-resources-that-are-not-publication-resources): External Resources that are not publication resources

The following example shows a hyperlink to an audio file hosted on the web. [Reading systems](#dfn-epub-reading-system) will open such external content in a new browser window; the audio file is not rendered within the publication. In this case, the [EPUB creator](#dfn-epub-creator) does not list the file in the manifest because it is not a [publication resource](#dfn-publication-resource).

```
XHTML:
<html …>
   …
   <body>
      …
      <a
          href="http://www.example.com/book/audio/ch01.mp4">
         Listen to audio
      </a>
      …
   </body>
</html>

Manifest:
No Entry
```

#### 5.6.3 The `bindings` element (deprecated)

[](#sec-opf-bindings)

The `bindings` element defines a set of custom handlers for media types not supported by this specification.

Use of the element is [deprecated](#deprecated).

Refer to the [`bindings` element definition](https://idpf.org/epub/301/spec/epub-publications-20140626.html#sec-bindings-elem) in \[[epubpublications-301](#bib-epubpublications-301 "EPUB Publications 3.0.1")\] for more information.

### 5.7 Spine section

[](#sec-pkg-spine)

#### 5.7.1 The `spine` element

[](#sec-spine-elem)

The `spine` element defines an ordered list of [manifest `item` references](#sec-itemref-elem) that represent the default reading order.

Element Name:

`spine`

Usage:

_REQUIRED_ third child of ``[`package`](#dfn-package)``, following ``[`manifest`](#dfn-manifest)``.

Attributes:

*   [`id`](#attrdef-id) `[optional]`
    
*   [`page-progression-direction`](#attrdef-spine-page-progression-direction) `[optional]`
    
*   [`toc`](#sec-opf2-ncx) `[optional]` [(legacy)](#sec-pkg-legacy-intro)
    

Content Model:

``[`itemref`](#dfn-itemref)`` `[1 or more]`

The `spine` _MUST_ specify at least one [EPUB content document](#dfn-epub-content-document) or [foreign content document](#dfn-foreign-content-document).

[EPUB creators](#dfn-epub-creator) _MUST_ list in the `spine` all EPUB and foreign content documents that are hyperlinked to from publication resources in the `spine`, where hyperlinking encompasses any linking mechanism that requires the user to navigate away from the current resource. Common hyperlinking mechanisms include the `[href](https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-href)` attribute of the \[[html](#bib-html "HTML Standard")\] `[a](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element)` and `[area](https://html.spec.whatwg.org/multipage/image-maps.html#the-area-element)` elements and scripted links (e.g., using DOM Events and/or form elements). The requirement to list hyperlinked resources applies recursively (i.e., EPUB creators must list all EPUB and foreign content documents hyperlinked to from hyperlinked documents, and so on.).

EPUB creators also _MUST_ list in the `spine` all EPUB and foreign content documents hyperlinked to from the [EPUB navigation document](#dfn-epub-navigation-document), regardless of whether EPUB creators include the EPUB navigation document in the `spine`.

Note

As hyperlinks to resources outside the EPUB container are not [publication resources](#dfn-publication-resource), they are not subject to the requirement to include in the spine (e.g., web pages and web-hosted resources).

Publication resources used in the rendering of spine items (e.g., referenced from \[[html](#bib-html "HTML Standard")\] [embedded content](https://html.spec.whatwg.org/multipage/dom.html#embedded-content-category)) similarly do not have to be included in the spine.

The `page-progression-direction` attribute sets the global direction in which the content flows. Allowed values are `ltr` (left-to-right), `rtl` (right-to-left) and `default`. When EPUB creators specify the `default` value, they are expressing no preference and the [reading system](#dfn-epub-reading-system) can choose the rendering direction.

Although the `page-progression-direction` attribute sets the global flow direction, individual EPUB content documents and parts of EPUB content documents _MAY_ override this setting (e.g., via the `writing-mode` CSS property). Reading systems may also provide mechanisms to override the default direction (e.g., buttons or settings that allow the application of alternate style sheets).

The [legacy](#sec-pkg-legacy-intro) `toc` attribute takes an [IDREF](https://www.w3.org/TR/xml/#idref) \[[xml](#bib-xml "Extensible Markup Language (XML) 1.0 (Fifth Edition)")\] that identifies the manifest item that represents the [NCX](#sec-opf2-ncx).

#### 5.7.2 The `itemref` element

[](#sec-itemref-elem)

The `itemref` element identifies an [EPUB content document](#dfn-epub-content-document) or [foreign content document](#dfn-foreign-content-document) in the default reading order.

Element Name:

`itemref`

Usage:

As a child of ``[`spine`](#dfn-spine)``. Repeatable.

Attributes:

*   [`id`](#attrdef-id) `[optional]`
    
*   [`idref`](#attrdef-itemref-idref) `[required]`
    
*   [`linear`](#attrdef-itemref-linear) `[optional]`
    
*   [`properties`](#attrdef-properties) `[optional]`
    

Content Model:

Empty

Each `itemref` element _MUST_ reference the [ID](https://www.w3.org/TR/xml/#id) \[[xml](#bib-xml "Extensible Markup Language (XML) 1.0 (Fifth Edition)")\] of an ``[`item`](#dfn-item)`` in the [manifest](#dfn-epub-manifest) via the [IDREF](https://www.w3.org/TR/xml/#idref) \[[xml](#bib-xml "Extensible Markup Language (XML) 1.0 (Fifth Edition)")\] in its `idref` attribute. `item` element IDs _MUST NOT_ be referenced more than once.

Each referenced manifest `item` _MUST_ be either a) an [EPUB content document](#dfn-epub-content-document) or b) a [foreign content document](#dfn-foreign-content-document) that includes an EPUB content document in its [manifest fallback chain](#dfn-manifest-fallback-chain).

Note

Although [EPUB publications](#dfn-epub-publication) [require an EPUB navigation document](#confreq-nav), it is not mandatory to include it in the [spine](#dfn-epub-spine).

The `linear` attribute indicates whether the referenced `item` contains content that contributes to the primary reading order and that [reading systems](#dfn-epub-reading-system) must read sequentially ("`yes`"), or auxiliary content that enhances or augments the primary content that reading systems can access out of sequence ("`no`"). Examples of auxiliary content include notes, descriptions, and answer keys.

The `linear` attribute allows reading systems to distinguish content that a user should access as part of the default reading order from supplementary content which a reading system might, for example, present in a popup window or omit from an aural rendering.

Specifying that content is non-linear does not require reading systems to present it in a specific way, however; it is only a hint to the purpose. Reading systems may present non-linear content where it occurs in the spine, for example, or may skip it until users reach the end of the spine.

Note

[EPUB creators](#dfn-epub-creator) should list non-linear content at the end of the spine except when it makes sense for users to encounter it between linear spine items.

A linear `itemref` element is one whose `linear` attribute value is explicitly set to "`yes`" or that omits the attribute — reading systems will assume the value "`yes`" for `itemref` elements without the attribute. The spine _MUST_ contain at least one linear `itemref` element.

EPUB creators _MUST_ provide a means of accessing all non-linear content (e.g., hyperlinks in the content or from the [EPUB navigation document](#sec-nav)).

The [Spine Properties Vocabulary](#app-itemref-properties-vocab) is the [default vocabulary](#sec-default-vocab) for the `properties` attribute.

EPUB creators _MAY_ add terms from other vocabularies as defined in [D.1 Vocabulary association mechanisms](#sec-vocab-assoc).

[Example 48](#example-a-basic-spine): A basic spine

In this example, the spine entries correspond to [the manifest example above](#example-manifest-cmt).

```
<spine
    page-progression-direction="ltr">
   <itemref
       idref="intro"/>
   <itemref
       idref="c1"/>
   <itemref
       idref="c1-answerkey"
       linear="no"/>
   <itemref
       idref="c2"/>
   <itemref
       idref="c2-answerkey"
       linear="no"/>
   <itemref
       idref="c3"/>
   <itemref
       idref="c3-answerkey"
       linear="no"/>
   <itemref
       idref="notes"
       linear="no"/>
</spine>
```

### 5.8 Collections

[](#sec-pkg-collections)

#### 5.8.1 The `collection` element

[](#sec-collection-elem)

The `collection` element defines a related group of resources.

Element Name:

`collection`

Usage:

_OPTIONAL_ sixth element of `package`. Repeatable.

Attributes:

*   [`dir`](#attrdef-dir) `[optional]`
    
*   [`id`](#attrdef-id) `[optional]`
    
*   [`role`](#attrdef-collection-role) `[required]`
    
*   [`xml:lang`](#attrdef-xml-lang) `[optional]`
    

Content Model:

In this order: `metadata` `[0 or 1]`, ( ``[`collection`](#dfn-collection)`` `[1 or more]` or ( ``[`collection`](#dfn-collection)`` `[0 or more]`, `link` `[1 or more]` ))

The `collection` element allows [EPUB creators](#dfn-epub-creator) to assemble resources into logical groups for a variety of potential uses: enabling reassembly into a meaningful unit of content split across multiple [EPUB content documents](#dfn-epub-content-document) (e.g., an index split across multiple documents), identifying resources for specialized purposes (e.g., preview content), or collecting together resources that present additional information about the [EPUB publication](#dfn-epub-publication).

EPUB creators _MUST_ identify the role of each `collection` element in its `role` attribute, whose value _MUST_ be one or more NMTOKENs \[[xmlschema-2](#bib-xmlschema-2 "XML Schema Part 2: Datatypes Second Edition")\] and/or [absolute-URL-with-fragment strings](https://url.spec.whatwg.org/#absolute-url-with-fragment-string) \[[url](#bib-url "URL Standard")\].

The requirements for authoring specialized collections are defined by their respective specifications.

Note

The former IDPF EPUB 3 Working Group maintained both a [registry of role extensions](https://idpf.org/epub/registries/roles/) and a list of [custom extension roles](https://idpf.org/epub/extensions/roles/). This Working Group no longer maintains these registries.

[Example 49](#example-a-multi-document-index): A multi-document index

```
<collection role="index">
   <link href="subjectIndex01.xhtml"/>
   <link href="subjectIndex02.xhtml"/>
   <link href="subjectIndex03.xhtml"/>
</collection>
```

#### 5.8.2 Defining collection types (deprecated)

[](#sec-defining-collection-types)

The creation of new `collection` element roles is now [deprecated](#deprecated).

Refer to the [`collection` element definition](https://www.w3.org/publishing/epub32/epub-packages.html#sec-collection-elem) in \[[epubpackages-32](#bib-epubpackages-32 "EPUB Packages 3.2")\] for more information about the creation of specialized collections, including the requirements and restrictions on their use.

### 5.9 Legacy features

[](#sec-pkg-legacy)

#### 5.9.1 Introduction

[](#sec-pkg-legacy-intro)

The package document **legacy** features are retained from EPUB 2 only to allow [EPUB creators](#dfn-epub-creator) to author content that can function, to some degree, in [reading systems](#dfn-epub-reading-system) that only support EPUB 2 publications.

These features were added primarily to address the overlap period as EPUB 3 reading systems were developed, as there was still a high probability at that time that users would be opening EPUB 3 publications on EPUB 2 reading systems.

As reading systems that only handle EPUB 2 publications are now rare, EPUB creators should consider the likelihood of their publications still being opened on these types of older devices before making the effort to add these legacy features.

#### 5.9.2 Support

[](#pkg-legacy-support)

[EPUB creators](#dfn-epub-creator) _MAY_ include the legacy features defined in this section for compatibility purposes with EPUB 2 reading systems.

EPUB 3 reading systems will not use these features when presenting publications to users.

Note

[EPUB conformance checkers](#dfn-epub-conformance-checker) should not alert EPUB creators about the presence of legacy features in an [EPUB publication](#dfn-epub-publication), as their inclusion is valid for backwards compatibility. EPUB conformance checkers must alert EPUB creators if a legacy feature does not conform to its definition or otherwise breaks a usage requirement.

#### 5.9.3 The `meta` element

[](#sec-opf2-meta)

The [`meta` element](https://idpf.org/epub/20/spec/OPF_2.0.1_draft.htm#Section2.2) \[[opf-201](#bib-opf-201 "Open Packaging Format 2.0.1")\] provides a means of including generic metadata for EPUB 2 [reading systems](#dfn-epub-reading-system).

Refer to the [`meta` element definition](https://idpf.org/epub/20/spec/OPF_2.0.1_draft.htm#Section2.2) in \[[opf-201](#bib-opf-201 "Open Packaging Format 2.0.1")\] for more information.

Note

The EPUB 3 ``[`meta`](#dfn-meta)`` element, which uses different attributes and requires text content, provides metadata capabilities for EPUB 3 reading systems.

The \[[opf-201](#bib-opf-201 "Open Packaging Format 2.0.1")\] `meta` element also allows [EPUB creators](#dfn-epub-creator) to identify a cover image for EPUB 2 reading systems. In EPUB 3, the cover image must be identified using the [`cover-image` property](#sec-cover-image) on the manifest ``[`item`](#dfn-item)`` for the image.

#### 5.9.4 The `guide` element

[](#sec-opf2-guide)

The [`guide` element](https://idpf.org/epub/20/spec/OPF_2.0.1_draft.htm#Section2.6) \[[opf-201](#bib-opf-201 "Open Packaging Format 2.0.1")\] provides machine-processable navigation to key structures in EPUB 2 [reading systems](#dfn-epub-reading-system).

Refer to the [`guide` element definition](https://idpf.org/epub/20/spec/OPF_2.0.1_draft.htm#Section2.6) in \[[opf-201](#bib-opf-201 "Open Packaging Format 2.0.1")\] for more information.

Note

The [landmarks nav](#sec-nav-landmarks) in the [EPUB navigation document](#dfn-epub-navigation-document) provides this functionality in EPUB 3 reading systems.

#### 5.9.5 NCX

[](#sec-opf2-ncx)

The [NCX](https://idpf.org/epub/20/spec/OPF_2.0.1_draft.htm#Section2.4.1) \[[opf-201](#bib-opf-201 "Open Packaging Format 2.0.1")\] provides a table of contents for EPUB 2 [reading systems](#dfn-epub-reading-system).

Refer to the [NCX definition](https://idpf.org/epub/20/spec/OPF_2.0.1_draft.htm#Section2.4.1) in \[[opf-201](#bib-opf-201 "Open Packaging Format 2.0.1")\] for more information.

Note

The [EPUB navigation document](#sec-nav) replaces the NCX for EPUB 3 reading systems.

6\. EPUB content documents
--------------------------

[](#sec-contentdocs)

### 6.1 XHTML content documents

[](#sec-xhtml)

#### 6.1.1 Introduction

[](#sec-xhtml-intro)

_This section is non-normative._

This section defines a profile of \[[html](#bib-html "HTML Standard")\] for creating [XHTML content documents](#dfn-xhtml-content-document). An instance of an XML document that conforms to this profile is a [core media type resource](#dfn-core-media-type-resource) and is referred to in this specification as an XHTML content document.

#### 6.1.2 XHTML requirements

[](#sec-xhtml-req)

An [XHTML content document](#dfn-xhtml-content-document):

*   _MUST_ be an \[[html](#bib-html "HTML Standard")\] document that conforms to the [XML](https://html.spec.whatwg.org/multipage/#the-xhtml-syntax) syntax.
    
*   _MUST_ conform to the conformance criteria for all document constructs defined by \[[html](#bib-html "HTML Standard")\] unless explicitly overridden in [6.1.4 HTML deviations and constraints](#sec-xhtml-deviations).
    
*   _MAY_ include extensions to the \[[html](#bib-html "HTML Standard")\] grammar as defined in [6.1.3 HTML extensions](#sec-xhtml-extensions), and _MUST_ conform to all content conformance constraints defined therein.
    

Unless specified otherwise, XHTML content documents inherit all definitions of semantics, structure, and processing behaviors from the \[[html](#bib-html "HTML Standard")\] specification.

Note

The recommendation that [EPUB publications](#dfn-epub-publication) follow the accessibility requirements in \[[epub-a11y-11](#bib-epub-a11y-11 "EPUB Accessibility 1.1")\] applies to XHTML content documents. See [Accessibility](#confreq-a11y).

#### 6.1.3 HTML extensions

[](#sec-xhtml-extensions)

This section defines EPUB 3 [XHTML content document](#dfn-xhtml-content-document) extensions to the underlying \[[html](#bib-html "HTML Standard")\] document model.

Note

Although \[[html](#bib-html "HTML Standard")\] allows user agents to support [vendor-neutral extensions](https://html.spec.whatwg.org/multipage/#extensibility-2), unless such extensions are listed in this section, they are not supported features of EPUB 3.

##### 6.1.3.1 Structural semantics

[](#sec-xhtml-structural-semantics)

[EPUB creators](#dfn-epub-creator) _MAY_ use the ``[`epub:type`](#dfn-epub-type)`` attribute in [XHTML content documents](#dfn-xhtml-content-document) to express [structural semantics](#sec-structural-semantics-intro).

The attribute _MUST NOT_ be used on the [`head`](https://html.spec.whatwg.org/multipage/#the-head-element) element or [metadata content](https://html.spec.whatwg.org/multipage/dom.html#metadata-content-2) \[[html](#bib-html "HTML Standard")\].

##### 6.1.3.2 RDFa

[](#sec-xhtml-rdfa)

The \[[html-rdfa](#bib-html-rdfa "HTML+RDFa 1.1 - Second Edition")\] specification defines a set of attributes that [EPUB creators](#dfn-epub-creator) _MAY_ use in [XHTML content documents](#dfn-xhtml-content-document) to semantically enrich the content. The use of these attributes _MUST_ conform to the requirements defined in \[[html-rdfa](#bib-html-rdfa "HTML+RDFa 1.1 - Second Edition")\].

The \[[html-rdfa](#bib-html-rdfa "HTML+RDFa 1.1 - Second Edition")\] specification defines changes to the \[[html](#bib-html "HTML Standard")\] content model when authors use RDFa attributes. This modified content model is valid in XHTML content documents.

Note

The listing of RDFa does not express a preference on the part of the Working Group, only that these attributes represent an extension of the HTML grammar. EPUB creators can also specify [microdata attributes](https://html.spec.whatwg.org/multipage/#microdata) \[[html](#bib-html "HTML Standard")\] and [linked data](https://www.w3.org/TR/json-ld11/#) \[[json-ld11](#bib-json-ld11 "JSON-LD 1.1")\] in XHTML content documents as both are natively supported.

##### 6.1.3.3 Content switching (deprecated)

[](#sec-xhtml-content-switch)

The `switch` element provides a simple mechanism through which [EPUB creators](#dfn-epub-creator) can tailor the content displayed to users, one that is not dependent on the scripting capabilities of the [EPUB reading system](#dfn-epub-reading-system).

Use of the element is [deprecated](#deprecated).

Refer to the [`switch` element definition](https://idpf.org/epub/301/spec/epub-contentdocs-20140626.html#sec-xhtml-epub-switch) in \[[epubcontentdocs-301](#bib-epubcontentdocs-301 "EPUB Content Documents 3.0.1")\] for more information.

##### 6.1.3.4 The `epub:trigger` element (deprecated)

[](#sec-xhtml-epub-trigger)

The `trigger` element enables the creation of markup-defined user interfaces for controlling multimedia objects, such as audio and video playback, in both scripted and non-scripted contexts.

Use of the element is [deprecated](#deprecated).

Refer to the [`epub:trigger` element definition](https://idpf.org/epub/301/spec/epub-contentdocs-20140626.html#sec-xhtml-epub-trigger) in \[[epubcontentdocs-301](#bib-epubcontentdocs-301 "EPUB Content Documents 3.0.1")\] for more information.

##### 6.1.3.5 Custom attributes

[](#sec-xhtml-custom-attributes)

[XHTML content documents](#dfn-xhtml-content-document) _MAY_ contain custom attributes, which are [prefixed](https://www.w3.org/TR/xml-names/#NT-Prefix) \[[xml-names](#bib-xml-names "Namespaces in XML 1.0 (Third Edition)")\] attributes whose namespace URL does not include either of the following strings in its [domain](https://url.spec.whatwg.org/#concept-domain) \[[url](#bib-url "URL Standard")\]:

*   `w3.org`
*   `idpf.org`

When using custom attributes, the content _MUST_ remain consumable by a user without any information loss or other significant deterioration, regardless of the [reading system](#dfn-epub-reading-system) it is rendered on.

Note

Custom attributes are usually defined in a reading system-specific manner and are not intended for use by other reading systems. This specification should be extended to provide extensions that multiple independent reading systems can use.

#### 6.1.4 HTML deviations and constraints

[](#sec-xhtml-deviations)

This section defines deviations from, and constraints on, the underlying \[[html](#bib-html "HTML Standard")\] document model applicable to EPUB 3 [XHTML content documents](#dfn-xhtml-content-document).

##### 6.1.4.1 Embedded MathML

[](#sec-xhtml-mathml)

[XHTML content documents](#dfn-xhtml-content-document) support embedded \[[mathml3](#bib-mathml3 "Mathematical Markup Language (MathML) Version 3.0 2nd Edition")\]. Occurrences of MathML markup _MUST_ conform to the constraints expressed in the MathML specification \[[mathml3](#bib-mathml3 "Mathematical Markup Language (MathML) Version 3.0 2nd Edition")\], with the following additional restrictions:

Presentation MathML

The `math` element _MUST_ contain only [Presentation MathML](https://www.w3.org/TR/MathML3/chapter3.html#), except within the `annotation-xml` element.

Content MathML

[EPUB creators](#dfn-epub-creator) _MAY_ include [Content MathML](https://www.w3.org/TR/MathML3/chapter4.html#) within MathML markup in XHTML content documents, and, when present, _MUST_ include it within an `annotation-xml` child element of a `semantics` element.

When EPUB creators include Content MathML per the previous condition, they _MUST_ set the given `annotation-xml` element's `encoding` attribute to either of the functionally-equivalent values `MathML-Content` or `application/mathml-content+xml`, and the `name` attribute to `contentequiv`.

This subset eases the implementation burden on [reading systems](#dfn-epub-reading-system) and promotes accessibility, while retaining compatibility with \[[html](#bib-html "HTML Standard")\] user agents.

Note

The [`mathml` property](#mathml) of the [manifest](#dfn-epub-manifest) `item` element indicates that an XHTML content document contains embedded MathML.

##### 6.1.4.2 Embedded SVG

[](#sec-xhtml-svg)

[XHTML content documents](#dfn-xhtml-content-document) support the embedding of SVG:

*   _by reference_ — for example, from an \[[html](#bib-html "HTML Standard")\] `[img](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element)` or `[object](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-object-element)` element. SVGs embedded by reference are [SVG core media types](#cmt-svg) so their requirements are already defined in [6.2 SVG content documents](#sec-svg).
*   _by inclusion_ — via direct inclusion of an [SVG document fragment](https://www.w3.org/TR/SVG/conform.html#ConformingSVGXMLFragments) \[[svg](#bib-svg "SVG")\] in an XHTML content document. SVGs embedded by inclusion have the same content conformance constraints as those defined for [SVG content documents](#dfn-svg-content-document) in [6.2.3 Restrictions on SVG](#sec-svg-restrictions).

Note

The [`svg` property](#svg) of the [manifest](#dfn-epub-manifest) ``[`item`](#dfn-item)`` element indicates that an XHTML content document contains embedded SVG (either by reference or by inclusion).

##### 6.1.4.3 Discouraged constructs

[](#sec-xhtml-deviations-discouraged)

_This section is non-normative._

###### 6.1.4.3.1 The `base` element

[](#sec-xhtml-deviations-base)

The \[[html](#bib-html "HTML Standard")\] [`base`](https://html.spec.whatwg.org/multipage/semantics.html#the-base-element) element can be used to specify the [document base URL](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#document-base-url) for the purposes of parsing URLs. When using it in an [EPUB publication](#dfn-epub-publication), the interpretation of the `base` element may inadvertently result in references to [remote resources](#dfn-remote-resource). It may also cause [reading systems](#dfn-epub-reading-system) to misinterpret the location of hyperlinks (e.g., relative links to other documents in the publication might appear as links to a web site if the `base` element specifies an absolute URL). To avoid significant interoperability issues, [EPUB creators](#dfn-epub-creator) should not use the `base` element.

###### 6.1.4.3.2 The `rp` element

[](#sec-xhtml-deviations-rp)

The \[[html](#bib-html "HTML Standard")\] `[rp](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-rp-element)` element is intended to provide a fallback for older [reading systems](#dfn-epub-reading-system) that do not recognize ruby markup (i.e., a parenthesis display around `ruby` markup). As EPUB 3 reading systems are ruby-aware, and can provide fallbacks, [EPUB creators](#dfn-epub-creator) should not use `rp` elements.

###### 6.1.4.3.3 The `embed` element

[](#sec-xhtml-deviations-embed)

Since the \[[html](#bib-html "HTML Standard")\] [`embed` element](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-embed-element) element does not include intrinsic facilities to provide fallback content for [reading systems](#dfn-epub-reading-system) that do not support scripting, [EPUB creators](#dfn-epub-creator) are discouraged from using the element when the referenced resource includes scripting. The \[[html](#bib-html "HTML Standard")\] `[object](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-object-element)` element is a better alternative, as it includes intrinsic fallback capabilities.

### 6.2 SVG content documents

[](#sec-svg)

Caution

[Reading systems](#dfn-epub-reading-system) may not support all the features of \[[svg](#bib-svg "SVG")\] or support them across all platforms that reading systems run on. When utilizing such features, [EPUB creators](#dfn-epub-creator) should consider the inherent risks on interoperability and document longevity.

#### 6.2.1 Introduction

[](#sec-svg-intro)

_This section is non-normative._

The Scalable Vector Graphics (SVG) specification \[[svg](#bib-svg "SVG")\] defines a format for representing final-form vector graphics and text.

Although [EPUB creators](#dfn-epub-creator) typically use [XHTML content documents](#sec-xhtml) as the [top-level](#dfn-top-level-content-document) document type, the use of [SVG content documents](#dfn-svg-content-document) is also permitted. EPUB creators will typically only need SVGs for certain special cases, such as when final-form page images are the only suitable representation of the content (e.g., for cover art or in the context of manga or comic books).

This section defines a profile for \[[svg](#bib-svg "SVG")\] documents. An instance of an XML document that conforms to this profile is a [core media type resource](#dfn-core-media-type-resource) and is referred to in this specification as an [SVG content document](#dfn-svg-content-document).

Note

This section defines conformance requirements for SVG content documents. Refer to [6.1.4.2 Embedded SVG](#sec-xhtml-svg) for the conformance requirements for SVG embedded in XHTML content documents.

#### 6.2.2 SVG requirements

[](#sec-svg-req)

An [SVG content document](#dfn-svg-content-document) _MUST_ be a [conforming SVG stand-alone file](https://www.w3.org/TR/SVG/conform.html#ConformingSVGStandAloneFiles) \[[svg](#bib-svg "SVG")\] and conform to all content conformance constraints expressed in [6.2.3 Restrictions on SVG](#sec-svg-restrictions).

Note

The recommendation that [EPUB publications](#dfn-epub-publication) follow the accessibility requirements in \[[epub-a11y-11](#bib-epub-a11y-11 "EPUB Accessibility 1.1")\] applies to SVG content documents. See [Accessibility](#confreq-a11y).

#### 6.2.3 Restrictions on SVG

[](#sec-svg-restrictions)

This specification restricts the content model of [SVG content documents](#dfn-svg-content-document) and [SVG embedded by inclusion in XHTML content documents](#sec-xhtml-svg-inclusion) as follows:

*   The \[[svg](#bib-svg "SVG")\] [`foreignObject`](https://www.w3.org/TR/SVG/embedded.html#ForeignObjectElement) element:
    
    *   _MUST_ contain either \[[html](#bib-html "HTML Standard")\] [flow content](https://html.spec.whatwg.org/multipage/dom.html#flow-content-2) or exactly one \[[html](#bib-html "HTML Standard")\] [`body`](https://html.spec.whatwg.org/multipage/#the-body-element) element.
        
        Note
        
        In the case of [SVGs embedded by inclusion](#sec-xhtml-svg-inclusion), a `body` element is not permitted per the [restrictions on SVG](https://html.spec.whatwg.org/multipage/#svg-0) defined in \[[html](#bib-html "HTML Standard")\].
        
    *   _MUST_ contain a valid document fragment that conforms to the XHTML content document model defined in [6.1.2 XHTML requirements](#sec-xhtml-req).
        
*   If the \[[svg](#bib-svg "SVG")\] `[title](https://www.w3.org/TR/SVG/struct.html#elementdef-title)` element contains marked-up text, the markup _MUST_ contain only elements declared in the [HTML namespace](https://infra.spec.whatwg.org/#html-namespace) \[[infra](#bib-infra "Infra Standard")\].
    
    Note
    
    Although the \[[svg](#bib-svg "SVG")\] `title` element allows markup elements, support for this feature is limited. [EPUB creators](#dfn-epub-creator) are advised to use text-only titles for maximum interoperability.
    
*   When specified, the ``[`epub:type`](#dfn-epub-type)`` attribute _MUST_ only be included on [renderable elements](https://www.w3.org/TR/SVG/render.html#TermRenderableElement) \[[svg](#bib-svg "SVG")\].
    
    Note
    
    The SVG content model allows authors to [include namespaced attributes](https://www.w3.org/TR/SVG/struct.html#ForeignNamespaces), so this specification does not need to allow the ``[`epub:type`](#dfn-epub-type)`` attribute or [vocabulary association mechanisms](#sec-vocab-assoc).
    
    One key difference between SVGs embedded by reference and by inclusion, however, is that SVGs embedded by inclusion cannot have an [`epub:prefix`](#sec-prefix-attr) attribute on their root `[svg](https://www.w3.org/TR/SVG/struct.html#elementdef-svg)` element \[[svg](#bib-svg "SVG")\]. For more information, refer to [D.1.4 The `prefix` attribute](#sec-prefix-attr).
    

### 6.3 Common resource requirements

[](#sec-common-resource-req)

This section defines requirements for technologies usable in both [XHTML](#dfn-xhtml-content-document) and [SVG content documents](#dfn-svg-content-document).

#### 6.3.1 Cascading Style Sheets (CSS)

[](#sec-css)

##### 6.3.1.1 Introduction

[](#sec-css-intro)

_This section is non-normative._

CSS is an integral part of the Open Web Platform. Readers, publishers, and document authors expect CSS to "just work," as they expect HTML to just work.

In the past, EPUB defined a profile of CSS that mandated support for certain properties and provided prefixed versions of numerous other properties. Although the CSS Working Group no longer recommends the use of prefixed properties, this specification maintains some prefixed properties to avoid breaking existing content. But with the minor exceptions defined in this section, EPUB defers to the W3C to define CSS.

Note

Keep in mind that some [reading systems](#dfn-epub-reading-system) will not support all desired features of CSS. The following are known to be particularly problematic:

*   Reading system-induced pagination can interact poorly with style sheets as reading systems sometimes paginate using columns. This may result in incorrect values for viewport sizes. Fixed and absolute positioning are particularly problematic.
    
*   Some types of screens will render animations and transitions poorly (e.g., those with high latency).
    

##### 6.3.1.2 CSS requirements

[](#sec-css-req)

A CSS style sheet:

*   _MAY_ include any CSS properties, with the following exceptions:
    
    *   It _MUST NOT_ include the [`direction` property](https://www.w3.org/TR/css-writing-modes-3/#direction) \[[css-writing-modes-3](#bib-css-writing-modes-3 "CSS Writing Modes Level 3")\].
        
    *   It _MUST NOT_ include the [`unicode-bidi` property](https://www.w3.org/TR/css-writing-modes-3/#unicode-bidi) \[[css-writing-modes-3](#bib-css-writing-modes-3 "CSS Writing Modes Level 3")\].
        
*   _MAY_ include the prefixed properties defined in [6.3.1.3 Prefixed properties](#sec-css-prefixed).
    
*   _MUST_ be encoded in UTF-8 or UTF-16 \[[unicode](#bib-unicode "The Unicode Standard")\], with UTF-8 as the _RECOMMENDED_ encoding.
    

Note

This specification restricts the use of the `direction` and `unicode-bidi` properties because [reading systems](#dfn-epub-reading-system) might not implement, or might switch off, CSS processing. [EPUB creators](#dfn-epub-creator) must use the following format-specific methods when they need control over these aspects of the rendering:

*   the `[dir](https://html.spec.whatwg.org/multipage/dom.html#attr-dir)` attribute \[[html](#bib-html "HTML Standard")\] and [`direction`](https://www.w3.org/TR/SVG/text.html#DirectionProperty) attribute \[[svg](#bib-svg "SVG")\] for inline base directionality.
    
*   the `[bdo](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-bdo-element)` element with the `[dir](https://html.spec.whatwg.org/multipage/dom.html#attr-dir)` attribute \[[html](#bib-html "HTML Standard")\] and the [presentation attribute alternative](https://www.w3.org/TR/SVG/styling.html#PresentationAttributes) for `unicode-bidi` \[[svg](#bib-svg "SVG")\] for bidirectionality.
    

##### 6.3.1.3 Prefixed properties

[](#sec-css-prefixed)

Earlier version of EPUB included prefixed CSS properties, as many CSS features related to world languages were not yet mature. To ensure backwards compatibility for content authored using these prefixes, they have been retained in this specification. Unless otherwise noted, prefixed properties and values behave exactly as their unprefixed equivalents as described in the appropriate CSS specification. The prefixed properties are documented in [E. Prefixed CSS properties](#css-prefixes).

Caution

[EPUB creators](#dfn-epub-creator) should use unprefixed properties and [reading systems](#dfn-epub-reading-system) should support current CSS specifications. This specification retains the widely used prefixed properties from \[[epubcontentdocs-301](#bib-epubcontentdocs-301 "EPUB Content Documents 3.0.1")\] but removes support for the less-used ones. EPUB creators should use CSS-native solutions for the removed properties whenever available.

The Working Group recommends that EPUB creators currently using these prefixed properties move to unprefixed versions as soon as support allows, as the Working Group does not anticipate supporting them in the next major version of EPUB.

#### 6.3.2 Scripting

[](#sec-scripted-content)

##### 6.3.2.1 Script inclusion

[](#sec-scripted-support)

[EPUB content documents](#dfn-epub-content-document) _MAY_ contain scripting using the facilities defined for this in the respective underlying specifications (\[[html](#bib-html "HTML Standard")\] and \[[svg](#bib-svg "SVG")\]). When an EPUB content document contains scripting, this specification refers to it as a [scripted content document](#dfn-scripted-content-document). This label also applies to [XHTML content documents](#dfn-xhtml-content-document) that contain \[[html](#bib-html "HTML Standard")\] `[form](https://html.spec.whatwg.org/multipage/forms.html#the-form-element)` elements.

The [`scripted` property](#scripted) of the [manifest](#dfn-epub-manifest) `item` element is used to indicate that an EPUB content document is a scripted content document.

When an \[[html](#bib-html "HTML Standard")\] `script` element contains a [data block](https://html.spec.whatwg.org/multipage/#data-block) \[[html](#bib-html "HTML Standard")\], it does not represent scripted content.

Note

\[[svg](#bib-svg "SVG")\] does not define data blocks as of publication, but the same exclusion would apply if a future update adds the concept.

[EPUB creators](#dfn-epub-creator) should note that [reading systems](#dfn-epub-reading-system) are required to behave as though a unique [origin](https://html.spec.whatwg.org/multipage/#origin) \[[html](#bib-html "HTML Standard")\] has been assigned to each [EPUB publication](#dfn-epub-publication). In practice, this means that it is not possible for scripts to share data between EPUB publications.

Which [context](#sec-scripted-context) a script is used in also determines the rights and restrictions that a reading system places on it (refer to [Scripting](https://www.w3.org/TR/epub-rs-33/#sec-scripted-content) \[[epub-rs-33](#bib-epub-rs-33 "EPUB Reading Systems 3.3")\] for more information).

Note

Reading systems may render scripted content documents in a manner that disables other EPUB capabilities and/or provides a different rendering and user experience (e.g., by disabling pagination).

##### 6.3.2.2 Scripting contexts

[](#sec-scripted-context)

EPUB 3 defines two contexts for script execution:

*   [container constrained](#sec-scripted-container-constrained) — when the execution of a script occurs within an \[[html](#bib-html "HTML Standard")\] `[iframe](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element)` element; and
*   [spine level](#sec-scripted-spine) — when the execution of a script occurs directly within a [top-level content document](#dfn-top-level-content-document).

Note

Scripts may execute in other contexts, but [reading system](#dfn-epub-reading-system) support for these contexts is optional. For example, a scripted SVG document may be referenced from an \[[html](#bib-html "HTML Standard")\] `[object](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-object-element)` element.

Refer to the [processing of scripts](https://www.w3.org/TR/epub-rs-33/#sec-scripted-content) \[[epub-rs-33](#bib-epub-rs-33 "EPUB Reading Systems 3.3")\] for more information.

Whether [EPUB creators](#dfn-epub-creator) embed the code directly in a `script` element or reference it via the element's `src` attribute makes no difference to its executing context.

Which context EPUB creators use for their scripts affects both what actions the scripts can perform and the likelihood of support in reading systems, as described in the following subsections.

Note

Refer to [H.2 Scripting contexts](#scripted-contexts-example) for an example of the difference between the two contexts.

###### 6.3.2.2.1 Container-constrained scripts

[](#sec-scripted-container-constrained)

A _container-constrained script_ is either of the following:

*   An instance of the \[[html](#bib-html "HTML Standard")\] `[script](https://html.spec.whatwg.org/multipage/scripting.html#script)` element contained in an [XHTML content document](#dfn-xhtml-content-document) that is embedded in an XHTML content document using the \[[html](#bib-html "HTML Standard")\] `[iframe](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element)` element.
    
*   An instance of the \[[svg](#bib-svg "SVG")\] [`script`](https://www.w3.org/TR/SVG/interact.html#ScriptElement) element contained in an [SVG content document](#dfn-svg-content-document) that is embedded in a XHTML content document using the \[[html](#bib-html "HTML Standard")\] `[iframe](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element)` element.
    

A container-constrained script _MUST NOT_ contain instructions for modifying the DOM of the [EPUB content document](#dfn-epub-content-document) that embeds it (i.e., the one that contains the `iframe` element). It also _MUST NOT_ contain instructions for manipulating the size of its containing rectangle.

[EPUB creators](#dfn-epub-creator) should note that [support for container-constrained scripting in reading systems](https://www.w3.org/TR/epub-rs-33/#sec-scripted-content) is only recommended in reflowable documents \[[epub-rs-33](#bib-epub-rs-33 "EPUB Reading Systems 3.3")\]. Furthermore, [reading system](#dfn-epub-reading-system) support in [fixed-layout documents](#dfn-fixed-layout-document) is optional.

EPUB creators should ensure container-constrained scripts degrade gracefully in reading systems without scripting support (see [6.3.2.5 Scripting fallbacks](#sec-scripted-fallbacks)).

Note

EPUB creators choosing to restrict the usage of scripting to the container-constrained model will ensure a more consistent user experience between scripted and non-scripted content (e.g., consistent pagination behavior).

###### 6.3.2.2.2 Spine-level scripts

[](#sec-scripted-spine)

A _spine-level script_ is an instance of the \[[html](#bib-html "HTML Standard")\] `[script](https://html.spec.whatwg.org/multipage/scripting.html#script)` or \[[svg](#bib-svg "SVG")\] [`script`](https://www.w3.org/TR/SVG/interact.html#ScriptElement) element contained in a [top-level content document](#dfn-top-level-content-document).

[EPUB creators](#dfn-epub-creator) should note that support for spine-level scripting in [reading systems](#dfn-epub-reading-system) is only recommended in [fixed-layout documents](https://www.w3.org/TR/epub-rs-33/#confreq-rs-scripted-fxl-support) and [reflowable documents set to scroll](https://www.w3.org/TR/epub-rs-33/#confreq-rs-scripted-scrolled) \[[epub-rs-33](#bib-epub-rs-33 "EPUB Reading Systems 3.3")\]. Furthermore, reading system support in all other contexts is optional.

[Top-level content documents](#dfn-top-level-content-document) that include spine-level scripting _SHOULD_ remain consumable by the user without any information loss or other significant deterioration when scripting is disabled or not available (e.g., by employing progressive enhancement techniques or [fallbacks](#sec-scripted-fallbacks)). Failing to account for non-scripted environments in top-level content documents can result in [EPUB publications](#dfn-epub-publication) being unreadable.

##### 6.3.2.3 Event model

[](#sec-scripted-content-events)

_This section is non-normative._

[EPUB creators](#dfn-epub-creator) should consider the wide variety of possible [reading system](#dfn-epub-reading-system) implementations when adding scripting functionality to their [EPUB publications](#dfn-epub-publication) (e.g., not all devices have physical keyboards, and in many cases a soft keyboard is activated only for text input elements). Consequently, EPUB creators should not rely on keyboard events alone; they should always provide alternative ways to trigger a desired action.

##### 6.3.2.4 Scripting accessibility

[](#sec-scripted-a11y)

[EPUB content documents](#dfn-epub-content-document) that contain scripting _SHOULD_ employ relevant \[[wai-aria](#bib-wai-aria "Accessible Rich Internet Applications (WAI-ARIA)")\] accessibility techniques to ensure that the content remains consumable by all users.

##### 6.3.2.5 Scripting fallbacks

[](#confreq-cd-scripted-flbk)

[EPUB content documents](#dfn-epub-content-document) that contain scripting _MAY_ provide fallbacks for such content, either by using intrinsic fallback mechanisms (such as those available for the \[[html](#bib-html "HTML Standard")\] `[object](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-object-element)` and `[canvas](https://html.spec.whatwg.org/multipage/canvas.html#canvas)` elements) or, when an intrinsic fallback is not applicable, by using a [manifest-level fallback](#sec-manifest-fallbacks).

[EPUB creators](#dfn-epub-creator) _MUST_ ensure that scripts only generate [core media type resources](#sec-core-media-types) or fragments thereof.

7\. EPUB navigation document
----------------------------

[](#sec-nav)

### 7.1 Introduction

[](#sec-nav-intro)

_This section is non-normative._

The [EPUB navigation document](#dfn-epub-navigation-document) is a [mandatory component](#confreq-nav) of an [EPUB publication](#dfn-epub-publication). It allows [EPUB creators](#dfn-epub-creator) to include a human- and machine-readable global navigation layer, thereby ensuring increased usability and accessibility for the user.

The EPUB navigation document is a special type of [XHTML content document](#dfn-xhtml-content-document) that defines the [table of contents](#sec-nav-toc) for [reading systems](#dfn-epub-reading-system). It may also include other specialized navigation elements, such as a [page list](#sec-nav-pagelist) and a list of key [landmarks](#sec-nav-landmarks). These navigation elements have [additional restrictions](#sec-nav-def-model) on their content to facilitate their processing.

The EPUB navigation document is not exclusively for machine processing, however. There are no restrictions on the structure or content of the EPUB navigation document outside of the specialized navigation elements (i.e., EPUB creators can mark the rest of the document up like any other XHTML content document). As a result, it can also be part of the linear reading order, avoiding the need for duplicate tables of contents. EPUB creators can hide navigation elements that are only for machine processing (e.g., the page list) with the [`hidden` attribute](#sec-nav-doc-use-spine).

Note that reading systems may strip scripting, styling, and HTML formatting as they generate navigational interfaces from information found in the EPUB navigation document, and this may make the result difficult to read. If EPUB creators require such formatting and functionality, then they should also include the EPUB navigation document in the [spine](#dfn-epub-spine). The use of progressive enhancement techniques for scripting and styling of the navigation document will help ensure the content will retain its integrity when rendered in a non-browser context.

### 7.2 Navigation document requirements

[](#sec-nav-content-req)

A valid EPUB navigation document:

*   _MUST_ conform to the content conformance constraints for [XHTML content documents](#dfn-xhtml-content-document) defined in [6.1.2 XHTML requirements](#sec-xhtml-req);
    
*   _MUST_ conform to the `nav` element constraints defined [7.3 The `nav` element: restrictions](#sec-nav-def-model);
    
*   _MUST_ include exactly one `toc nav` element as defined in [7.4.2 The `toc nav` element](#sec-nav-toc).
    

### 7.3 The `nav` element: restrictions

[](#sec-nav-def-model)

When a `nav` element carries the ``[`epub:type`](#dfn-epub-type)`` attribute in an [EPUB navigation document](#dfn-epub-navigation-document), this specification restricts the content model of the element and its descendants as follows:

Content Model:

`[nav](https://html.spec.whatwg.org/multipage/sections.html#the-nav-element)`

In this order:

*   [`h1-h6`](https://html.spec.whatwg.org/multipage/#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements) `[0 or 1]`
    
*   `[ol](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ol-element)` `[exactly 1]`
    

`[ol](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ol-element)`

In this order:

*   `[li](https://html.spec.whatwg.org/multipage/grouping-content.html#the-li-element)` `[1 or more]`
    

`[li](https://html.spec.whatwg.org/multipage/grouping-content.html#the-li-element)`

In this order:

*   (`[span](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-span-element)` or `[a](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element)`) `[exactly 1]`
    
*   `[ol](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ol-element)` `[conditionally required]`
    

`[span](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-span-element)` and `[a](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element)`

In any order:

*   [HTML Phrasing content](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content-2) `[1 or more]`
    

Note that there are no restrictions on the attributes allowed on these elements.

Refer the definition below for additional requirements.

The following elaboration of the content model of the `nav` element explains the purpose and restrictions of the various elements:

*   The `ol` child of the `nav` element represents the primary level of content navigation.
    
*   Each list item of the ordered list represents a heading, structure, or other item of interest. A child `a` element describes the target that the link points to, while a `span` element serves as a heading for breaking down lists into distinct groups (for example, an EPUB creator could segment a large list of illustrations into several lists, one for each chapter).
    
*   The child `a` or `span` element _MUST_ provide a non-zero-length text label after concatenation of all child content and application of whitespace normalization rules. When determining compliance with this requirement, the concatenated label _MUST_ include text content contained in `title` or `alt` attributes for non-textual descendant elements.
    
*   If an `a` or `span` element contains instances of [HTML embedded content](https://html.spec.whatwg.org/multipage/dom.html#embedded-content-category) \[[html](#bib-html "HTML Standard")\] that do not provide intrinsic text alternatives, the element _MUST_ also contain a `title` attribute with an alternate text rendering of the link label.
    
*   The URL \[[url](#bib-url "URL Standard")\] reference provided in the `href` attribute of the `a` element:
    
    *   _MUST_, in the case of the [`toc nav`](#sec-nav-toc), [`landmarks nav`](#sec-nav-landmarks) and [`page-list nav`](#sec-nav-pagelist), resolve to a [top-level content document](#dfn-top-level-content-document) or fragment therein.
        
    *   _MAY_, for all other `nav` types, also reference content outside the [EPUB container](#dfn-epub-container) (e.g., web-hosted resources).
        
*   An `ol` (ordered list) element representing a subsidiary content level (e.g., all the subsection headings of a section) _MAY_ follow an `a` element.
    
*   An `ol` (ordered list) element _MUST_ follow a `span` element (`span` elements cannot occur in "leaf" `li` elements).
    
*   Regardless of whether an `a` or `span` element precedes it, every sublist _MUST_ adhere to the content requirements defined in this section for constructing the primary navigation list.
    

[Example 50](#example-basic-patterns-of-a-navigation-element): Basic patterns of a navigation element

```
<nav epub:type="…">
   <h1>…</h1>
   <ol>
      <li>
         <a href="chap1.xhtml">
            A basic leaf node
         </a>
      </li>
      <li>
         <a href="chap2.xhtml">
            A linked heading
         </a>
         <ol>
            …
         </ol>
      </li>
      <li>
         <span>An unlinked heading</span>
         <ol>
            …
         </ol>
      </li>
      <li>
         <a href="appendix.xhtml">
            <img src="app1.jpg" alt="An image-based heading"/>
         </a>
      </li>
   </ol>
</nav>
```

Caution

Although the headings and links in `nav` elements allow any \[[html](#bib-html "HTML Standard")\] [phrasing content](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content-2), app-based reading systems often only support simple text labels. Because these apps create their own navigation widgets that are not based on HTML rendering, they often cannot retain embedded images and multimedia, MathML, inline styling and other element- and attribute-based rendering instructions. EPUB creators should avoid using these types of elements where their absence may lead to usability issues.

As a conforming [XHTML content document](#dfn-xhtml-content-document), EPUB creators _MAY_ include the EPUB navigation document in the [spine](#dfn-epub-spine).

In the context of this specification, the default display style of list items within `nav` elements is equivalent to the [`list-style:` `none` property](https://www.w3.org/TR/CSS2/generate.html#propdef-list-style) \[[csssnapshot](#bib-csssnapshot "CSS Snapshot")\]. EPUB creators _MAY_ specify alternative list styling using CSS for rendering of the document in the spine.

### 7.4 The `nav` element: types

[](#sec-nav-def-types)

#### 7.4.1 Introduction

[](#sec-nav-def-types-intro)

_This section is non-normative._

The `nav` elements defined in an [EPUB navigation document](#dfn-epub-navigation-document) are distinguished semantically by the value of their ``[`epub:type`](#dfn-epub-type)`` attribute.

This specification defines three types of navigation aid:

[`toc`](#sec-nav-toc)

Identifies the `nav` element that contains the table of contents. The `toc nav` is the only navigation aid that [EPUB creators](#dfn-epub-creator) must include in the EPUB navigation document.

[`page-list`](#sec-nav-pagelist)

Identifies the `nav` element that contains a list of pages for a print or other statically paginated source.

[`landmarks`](#sec-nav-landmarks)

Identifies the `nav` element that contains a list of points of interest.

An EPUB navigation document may contain at most one navigation aid for each of these types.

The EPUB navigation document may include additional navigation types. See [7.4.5 Other `nav` elements](#sec-nav-def-types-other) for more information.

#### 7.4.2 The `toc nav` element

[](#sec-nav-toc)

The primary navigational hierarchy of an [EPUB publication](#dfn-epub-publication) is defined in a `[nav](https://html.spec.whatwg.org/multipage/sections.html#the-nav-element)` element \[[html](#bib-html "HTML Standard")\] whose ``[`epub:type`](#dfn-epub-type)`` attribute set to the value "[toc](https://www.w3.org/TR/epub-ssv-11/#toc-1)" \[[epub-ssv-11](#bib-epub-ssv-11 "EPUB 3 Structural Semantics Vocabulary 1.1")\] (i.e., the `toc nav` element). This element conceptually corresponds to a table of contents in a printed work — it provides navigation to the major structural sections of the publication.

[EPUB creators](#dfn-epub-creator) _SHOULD_ order the references in the `toc nav` element such that they reflect both:

*   the order of the [referenced EPUB content documents](#confreq-nav-a-href) in the [spine](#dfn-epub-spine); and
    
*   the order of the targeted elements within their respective [EPUB content documents](#dfn-epub-content-document).
    

#### 7.4.3 The `page-list nav` element

[](#sec-nav-pagelist)

The page list provides navigation to static page boundaries in the content. These boundaries may correspond to a statically paginated source such as print or may be defined exclusively for the [EPUB publication](#dfn-epub-publication).

The page list is defined in a `[nav](https://html.spec.whatwg.org/multipage/sections.html#the-nav-element)` element \[[html](#bib-html "HTML Standard")\] whose ``[`epub:type`](#dfn-epub-type)`` attribute is set to the value "[page-list](https://www.w3.org/TR/epub-ssv-11/#page-list)" \[[epub-ssv-11](#bib-epub-ssv-11 "EPUB 3 Structural Semantics Vocabulary 1.1")\] (i.e., the `page-list nav` element).

The `page-list nav` element is _OPTIONAL_ in [EPUB navigation documents](#dfn-epub-navigation-document) and _MUST NOT_ occur more than once.

The `page-list nav` element _SHOULD_ contain only a single `ol` descendant (i.e., no nested sublists).

[EPUB creators](#dfn-epub-creator) _MAY_ identify the destinations of the `page-list` references in their respective [EPUB content documents](#dfn-epub-content-document) using the [`pagebreak` term](https://www.w3.org/TR/epub-ssv-11/#pagebreak) \[[epub-ssv-11](#bib-epub-ssv-11 "EPUB 3 Structural Semantics Vocabulary 1.1")\].

#### 7.4.4 The `landmarks nav` element

[](#sec-nav-landmarks)

Landmarks identify fundamental structural components of the content to enable [reading systems](#dfn-epub-reading-system) to provide the user efficient access to them (e.g., through a dedicated button in the user interface).

Landmarks are defined in a `[nav](https://html.spec.whatwg.org/multipage/sections.html#the-nav-element)` element \[[html](#bib-html "HTML Standard")\] whose ``[`epub:type`](#dfn-epub-type)`` attribute is set to the value "[landmarks](https://www.w3.org/TR/epub-ssv-11/#landmarks)" \[[epub-ssv-11](#bib-epub-ssv-11 "EPUB 3 Structural Semantics Vocabulary 1.1")\] (i.e., the `landmarks nav` element).

The `landmarks nav` element is _OPTIONAL_ in [EPUB navigation documents](#dfn-epub-navigation-document) and _MUST NOT_ occur more than once.

The `landmarks nav` element _SHOULD_ contain only a single `ol` descendant (i.e., no nested sublists).

The ``[`epub:type`](#dfn-epub-type)`` attribute is _REQUIRED_ on `a` element descendants of the `landmarks nav` element. The structural semantics of each link target within the `landmarks nav` element is determined by the value of this attribute.

[Example 51](#example-a-basic-landmarks-nav): A basic landmarks nav

In this example, the `epub:type` attribute value are drawn from structural semantics drawn from \[[epub-ssv-11](#bib-epub-ssv-11 "EPUB 3 Structural Semantics Vocabulary 1.1")\].

```
<nav epub:type="landmarks">
   <h2>Guide</h2>
   <ol>
       <li>
          <a epub:type="toc"
             href="#toc">
            Table of Contents
          </a>
       </li>
       <li>
          <a epub:type="loi"
             href="content.html#loi">
            List of Illustrations
          </a>
       </li>
       <li>
          <a epub:type="bodymatter"
             href="content.html#bodymatter">
            Start of Content
          </a>
       </li>
   </ol>
</nav>
```

The `landmarks nav` _MUST NOT_ include multiple entries with the same `epub:type` value that reference the same resource, or fragment thereof.

[EPUB creators](#dfn-epub-creator) should limit the number of items they define in the `landmarks nav` to only items that a reading system is likely to use in its user interface. The element is not meant to repeat the table of contents.

The following landmarks are recommended to include when available:

*   [`bodymatter`](https://www.w3.org/TR/epub-ssv-11/#bodymatter) \[[epub-ssv-11](#bib-epub-ssv-11 "EPUB 3 Structural Semantics Vocabulary 1.1")\] — Reading systems often use this landmark to automatically jump users past the front matter when they begin reading.
*   [`toc`](https://www.w3.org/TR/epub-ssv-11/#toc-1) \[[epub-ssv-11](#bib-epub-ssv-11 "EPUB 3 Structural Semantics Vocabulary 1.1")\] — If the table of contents is available in the spine, reading systems may use this landmark to take users to the document containing it.

Other possibilities for inclusion in the `landmarks nav` are key reference sections such as indexes and glossaries.

Although the `landmarks nav` is intended for reading system use, EPUB creators should still ensure that the labels for the `landmarks nav` are human readable. Reading systems may expose the links directly to users.

#### 7.4.5 Other `nav` elements

[](#sec-nav-def-types-other)

[EPUB navigation documents](#dfn-epub-navigation-document) _MAY_ contain one or more `nav` elements in addition to the `toc`, `page-list`, and `landmarks nav` elements defined in the preceding sections. If these `nav` elements are intended for [reading system](#dfn-epub-reading-system) processing, they _MUST_ have an ``[`epub:type`](#dfn-epub-type)`` attribute and are subject to the content model restrictions defined in [7.3 The `nav` element: restrictions](#sec-nav-def-model).

This specification imposes no restrictions on the semantics of any additional `nav` elements: they _MAY_ represent navigational semantics for any information domain, and they _MAY_ contain link targets with homogeneous or heterogeneous semantics.

[Example 52](#example-adding-a-custom-navigation-element): Adding a custom navigation element

In this example, the `lot` semantic indicates that the EPUB creator is adding a "list of tables" navigation element.

```
<nav
    epub:type="lot"
    aria-labelledby="lot">
   <h2 id="lot">List of tables</h2>
   <ol>
      <li>
         <span>Tables in Chapter 1</span>
         <ol>
            <li>
               <a href="chap1.xhtml#table-1.1">
                  Table 1.1
               </a>
            </li>
            <li>
               <a href="chap1.xhtml#table-1.2">
                  Table 1.2
               </a>
            </li>
         </ol>
      </li>
      …
   </ol>
</nav>
```

### 7.5 Using in the spine

[](#sec-nav-doc-use-spine)

_This section is non-normative._

Although it is possible to reuse the [EPUB navigation document](#dfn-epub-navigation-document) in the [spine](#dfn-epub-spine), it is often the case that not all of the navigation structures, or branches within them, are needed. [EPUB creators](#dfn-epub-creator) will often want to hide the [page list](#sec-nav-pagelist) and [landmarks](#sec-nav-landmarks) navigation elements or trim the branches of the table of contents for books that have many levels of subsections.

While the [`display` property](https://www.w3.org/TR/CSS2/visuren.html#propdef-display) \[[csssnapshot](#bib-csssnapshot "CSS Snapshot")\] controls the visual rendering of EPUB navigation documents in [reading systems](#dfn-epub-reading-system) with [viewports](#dfn-viewport), reading systems without viewports may not support CSS. To better ensure the proper rendering in these reading systems, EPUB creators should use the \[[html](#bib-html "HTML Standard")\] `[hidden](https://html.spec.whatwg.org/multipage/interaction.html#attr-hidden)` attribute to indicate which (if any) portions of the navigation data are excluded from rendering in the content flow.

The `hidden` attribute has no effect on how reading systems render the navigation data outside of the content flow (such as in dedicated navigation user interfaces provided by reading systems).

Note

The `hidden` attribute can be used together with the `display` property to maximize interoperability across all reading systems.

[Example 53](#example-hiding-a-nav-element-in-spine): Hiding a nav element in spine

In this example, the presence of the `hidden` attribute on the `nav` element indicates the page list will be excluded from rendering in the content flow when the document is rendered in the spine.

```
<nav
    epub:type="page-list"
    hidden="hidden">
   <h2>Pagebreaks of the print version, third edition</h2>
   <ol>
      <li>
         <a href="frontmatter.xhtml#pi">
            I
         </a>
      </li>
      …
   </ol>
</nav>
```

[Example 54](#example-hiding-branches-of-a-nav-element): Hiding branches of a nav element

In this example, the branch (`ol` element) not wanted for rendering in the spine has the `hidden` attribute on it. When rendered, this limits the table of content to the two top-most hierarchical levels.

```
<nav
    epub:type="toc"
    id="toc">
   <h1>Table of contents</h1>
   <ol>
      <li>
         <a href="chap1.xhtml">
            Chapter 1
         </a>
         <ol>
            <li>
               <a href="chap1.xhtml#sec-1.1">
                  Chapter 1.1
               </a>
               <ol hidden="">
                  <li>
                     <a href="chap1.xhtml#sec-1.1.1">
                        Section 1.1.1
                     </a>
                  </li>
                  …
               </ol>
            </li>
            …
         </ol>
      </li>
      …
   </ol>
</nav>
```

8\. Layout rendering control
----------------------------

[](#sec-rendering-control)

### 8.1 Introduction

[](#sec-general-rendering-intro)

_This section is non-normative._

Not all rendering information can be expressed through the underlying technologies that EPUB is built upon. For example, although HTML with CSS provides powerful layout capabilities, those capabilities are limited to the scope of the document being rendered.

This section defines properties that allow [EPUB creators](#dfn-epub-creator) to express package-level rendering intentions (i.e., functionality that can only be implemented by the [EPUB reading system](#dfn-epub-reading-system)). If a reading system supports the desired rendering, these properties enable the user to be presented the content as the EPUB creator optimally designed it.

### 8.2 Fixed layouts

[](#sec-fixed-layouts)

#### 8.2.1 Introduction

[](#fxl-intro)

_This section is non-normative._

[EPUB publications](#dfn-epub-publication), unlike print books or PDF files, are designed to change. The content flows, or reflows, to fit the screen and to fit the needs of the user. As noted in [Rendering and CSS](https://www.w3.org/TR/epub-overview-33/#sec-rendering) "content presentation adapts to the user, rather than the user having to adapt to a particular presentation of content." \[[epub-overview-33](#bib-epub-overview-33 "EPUB 3 Overview")\]

But this principle does not work for all types of documents. Sometimes content and design are so intertwined it is not possible to separate them. Any change in appearance risks changing the meaning or losing all meaning. [Fixed-layout documents](#dfn-fixed-layout-document) give [EPUB creators](#dfn-epub-creator) greater control over presentation when a reflowable EPUB is not suitable for the content.

EPUB creators define fixed layouts using a [set of package document properties](#sec-fxl-package) to control the rendering in [reading systems](#dfn-epub-reading-system). In addition, they set [the dimensions of each fixed-layout document](#sec-fxl-package) in its respective [EPUB content document](#dfn-epub-content-document).

Note

EPUB 3 affords multiple mechanisms for representing fixed-layout content. When fixed-layout content is necessary, the EPUB creator's choice of mechanism will depend on many factors including desired degree of precision, file size, accessibility, etc. This section does not attempt to dictate the EPUB creator's choice of mechanism.

#### 8.2.2 Fixed-layout package settings

[](#sec-fxl-package)

##### 8.2.2.1 Layout

[](#layout)

The `rendition:layout` property specifies whether the content is reflowable or pre-paginated.

When the [`rendition:layout` property](#layout) is specified on a `meta` element, it indicates that the paginated or reflowable layout style applies globally (i.e., for all spine items).

[EPUB creators](#dfn-epub-creator) _MUST_ use one of the following values with the `rendition:layout` property:

reflowable

The content is not pre-paginated (i.e., [reading systems](#dfn-epub-reading-system) apply dynamic pagination when rendering). Default value.

pre-paginated

The content is pre-paginated (i.e., reading systems produce exactly one page per [spine](#dfn-epub-spine) ``[`itemref`](#dfn-itemref)`` when rendering).

Note

Reading systems typically restrict or deny the application of user or user agent style sheets to pre-paginated documents because dynamic style changes are likely to have unintended consequence on the intrinsic properties of such documents. EPUB creators should consider the negative impact on usability and accessibility that these restrictions have when choosing to use pre-paginated instead of reflowable content. Refer to [Guideline 1.4 - Provide text configuration](https://www.w3.org/TR/UAAG20/#gl-text-config) \[[uaag20](#bib-uaag20 "User Agent Accessibility Guidelines (UAAG) 2.0")\] for related information.

When the property is set to `pre-paginated` for a spine item, its content dimensions _MUST_ be set as defined in [8.2.2.6 Content document dimensions](#sec-fxl-content-dimensions).

EPUB creators _MUST NOT_ declare the `rendition:layout` property more than once.

They also _MUST NOT_ declare the property using the [`refines` attribute](#attrdef-refines). Refer to [8.2.2.1.1 Layout overrides](#layout-overrides) for setting the property for individual [EPUB content documents](#dfn-epub-content-document).

[Example 55](#fxl-ex1): Fixed Layout Document with media queries

In this example, the document's layout is set to `pre-paginated` (i.e., it is defined to be a [fixed-layout document](#dfn-fixed-layout-document)). Furthermore, media queries \[[mediaqueries-3](#bib-mediaqueries-3 "Media Queries Level 3")\] are used to apply different style sheets for three different device categories. Note that the media queries only affect the style sheet applied to the document; the size of the content area set in the `viewport meta` tag is static.

Package document:

```
<package …>
   <metadata …>
      …
      <meta
          property="rendition:layout">
         pre-paginated
      </meta>
      …
   </metadata>
   …
</package>
```

XHTML

```
<html …>
   <head>
      <meta
          name="viewport"
          content="width=1200,
          height=900"/>

      <link
          rel="stylesheet"
          href="eink-style.css"
          media="(max-monochrome: 3)"/>

      <link
          rel="stylesheet"
          href="skinnytablet-style.css"
          media="((color) and (max-height:600px) and (orientation:landscape),
                  (color) and (max-width:600px) and (orientation:portrait))"/>

      <link
          rel="stylesheet"
          href="fattablet-style.css"
          media="((color) and (min-height:601px) and (orientation:landscape),
                  (color) and (min-width:601px) and (orientation:portrait))"/>
   </head>
   …
</html>
```

###### 8.2.2.1.1 Layout overrides

[](#layout-overrides)

[EPUB creators](#dfn-epub-creator) _MAY_ specify the following properties locally on [spine](#dfn-epub-spine) ``[`itemref`](#dfn-itemref)`` elements to override the [global value](#property-layout-global) for the given spine item:

rendition:layout-pre-paginated

Specifies that the given spine item is pre-paginated.

rendition:layout-reflowable

Specifies that the given spine item is reflowable.

EPUB creators _MUST NOT_ use more than one of these overrides on any given spine item.

##### 8.2.2.2 Orientation

[](#orientation)

The `rendition:orientation` property specifies which orientation the [EPUB creator](#dfn-epub-creator) intends the content to be rendered in.

When the [`rendition:orientation` property](#orientation) is specified on a ``[`meta`](#dfn-meta)`` element, it indicates that the intended orientation applies globally (i.e., for all [spine](#dfn-epub-spine) items).

[EPUB creators](#dfn-epub-creator) _MUST_ use one of the following values with the `rendition:orientation` property:

landscape

[Reading systems](#dfn-epub-reading-system) should render the content in landscape orientation.

portrait

Reading systems should render the content in portrait orientation.

auto

The content is not orientation constrained. Default value.

EPUB creators _MUST NOT_ declare the `rendition:orientation` property more than once.

They also _MUST NOT_ declare the property using the [`refines` attribute](#attrdef-refines). Refer to [8.2.2.2.1 Orientation overrides](#orientation-overrides) for setting the property for individual [EPUB content documents](#dfn-epub-content-document).

[Example 56](#fxl-ex2): Specifying global landscape orientation

In this example, items in the spine are to be rendered in landscape mode.

```
<package …>
   <metadata …>
      …
      <meta
          property="rendition:layout">
         pre-paginated
      </meta>

      <meta
          property="rendition:orientation">
         landscape
      </meta>
   </metadata>
   …
</package>
```

###### 8.2.2.2.1 Orientation overrides

[](#orientation-overrides)

[EPUB creators](#dfn-epub-creator) _MAY_ specify the following properties locally on [spine](#dfn-epub-spine) ``[`itemref`](#dfn-itemref)`` elements to override the [global value](#property-orientation-global) for the given spine item:

rendition:orientation-auto

Specifies that the [reading system](#dfn-epub-reading-system) determines the orientation to render the spine item in.

rendition:orientation-landscape

Specifies that reading systems should render the given spine item in landscape orientation.

rendition:orientation-portrait

Specifies that reading systems should render the given spine item in portrait orientation.

EPUB creators _MUST NOT_ use more than one of these overrides on any given spine item.

##### 8.2.2.3 Synthetic spreads

[](#spread)

The `rendition:spread` property specifies the intended [reading system](#dfn-epub-reading-system) synthetic spread behavior.

When the `rendition:spread` property is specified on a `meta` element, it indicates that the intended [synthetic spread](#dfn-synthetic-spread) behavior applies globally (i.e., for all spine items).

[EPUB creators](#dfn-epub-creator) _MUST_ use one of the following values with the `rendition:spread` property:

none

Do not incorporate spine items in a synthetic spread. Reading systems should display the items in a single [viewport](#dfn-viewport) positioned at the center of the screen.

landscape

Render a synthetic spread for spine items only when the device is in landscape orientation.

portrait (deprecated)

The use of spreads only in portrait orientation is [deprecated](#deprecated).

EPUB creators should use the value "`both`" instead, as spreads that are readable in portrait orientation are also readable in landscape.

both

Render a synthetic spread regardless of device orientation.

auto

The EPUB creator is not defining an explicit synthetic spread behavior. Default value.

EPUB creators _MUST NOT_ declare the `rendition:spread` property more than once.

They also _MUST NOT_ declare the property using the [`refines` attribute](#attrdef-refines). Refer to [8.2.2.3.1 Synthetic spread overrides](#spread-overrides) for setting the property for individual [EPUB content documents](#dfn-epub-content-document).

Note

When synthetic spreads are used in the context of [XHTML](#dfn-xhtml-content-document) and [SVG content documents](#dfn-svg-content-document), the dimensions given via the [`viewport meta` element](#sec-fxl-icb-html) and [`viewBox` attribute](#sec-fxl-icb-svg) represents the size of one page in the spread, respectively.

Note

Refer to the ``[`spine`](#dfn-spine)`` element for information about declaration of global flow directionality using the `page-progression-direction` attribute and that of local page-progression-direction within content documents.

[Example 57](#spread-none-example): A fixed-layout EPUB publication without synthetic spread

```
<package …>
   <metadata …>
      …
      <meta
          property="rendition:layout">
         pre-paginated
      </meta>

      <meta
          property="rendition:spread">
         none
      </meta>
   </metadata>
   …
</package>
```

[Figure 1](#spread-none-figure) Rendering of three fixed-layout documents without synthetic spread.  
(Comics courtesy of [xkcd](https://xkcd.com/927/), licensed under [cc by-nc 2.5](https://creativecommons.org/licenses/by-nc/2.5/).)

![Progression of FXL pages both in portrait and in landscape modes, showing one page at a time everywhere](images/example_spread_none.svg)

Image description

Two rows of schematic views of tablets (three in each row). The tablets in the top row are in portrait mode, and in landscape mode in the bottom one. The schematic views of the tablets within a row are linked with left-to-right arrows.

In the tablets of each row the consecutive panels of a comics are displayed; the panels are centered in their respective tablets.

[Example 58](#spread-landscape-example): Specifying the usage of synthetic spreads in landscape orientation only

```
<package …>
   <metadata …>
      …
      <meta
          property="rendition:layout">
         pre-paginated
      </meta>

      <meta
          property="rendition:spread">
         landscape
      </meta>
   </metadata>
   …
</package>
```

[Figure 2](#spread-landscape-figure) Rendering of three fixed-layout documents, with synthetic spread in landscape orientation only.  
(Comics courtesy of [xkcd](https://xkcd.com/927/), licensed under [cc by-nc 2.5](https://creativecommons.org/licenses/by-nc/2.5/).)

![Progression of FXL pages both in portrait and in landscape modes, showing one page at a time in portrait and using synthetic spread in landscape.](images/example_spread_landscape.svg)

Image description

Two rows of schematic views of tablets (three in top row, and two in the bottom). The tablets in the top row are in portrait mode, and in landscape mode in the bottom one. The schematic views of the tablets within a row are linked with left-to-right arrows.

In both rows three panels of a comics are displayed. In the top row the panels are centered in their respective tablets. In the bottom row, the first tablet contains the first and second panels of the comics side by side; the second tablet contains the second and third panels of the comics side-by-side.

[Example 59](#spread-both-example): Specifying to use synthetic spreads both in portrait and in landscape orientations

See also [Figure 3](#spread-both-figure "Rendering of three fixed-layout documents, with synthetic spread in both portrait and landscape orientations. (Comics courtesy of xkcd, licensed under cc by-nc 2.5.)").

```
<package …>
   <metadata …>
      …
      <meta
          property="rendition:layout">
         pre-paginated
      </meta>

      <meta
          property="rendition:spread">
         both
      </meta>
   </metadata>
   …
</package>
```

[Figure 3](#spread-both-figure) Rendering of three fixed-layout documents, with synthetic spread in both portrait and landscape orientations.  
(Comics courtesy of [xkcd](https://xkcd.com/927/), licensed under [cc by-nc 2.5](https://creativecommons.org/licenses/by-nc/2.5/).)

![Progression of FXL pages both in portrait and in landscape modes, using synthetic spread in both cases.](images/example_spread_both.svg)

Image description

Two rows of schematic views of tablets (two in each row). The tablets in the top row are in portrait mode, and in landscape mode in the bottom one. The schematic views of the tablets within a row are linked with left-to-right arrows.

In both rows three panels of a comics are displayed. The first tablet in a row contains the first and second panels of the comics side by side; the second tablet contains the second and third panels of the comics side-by-side.

[Example 60](#spread-both-with-intro-example): Overriding the global spread behavior

In this example, the EPUB creator overrides the global reflowable setting in the spine for the introductory page. The intention is for reading systems to render it as a reflowable document.

```
<package …>
   <metadata …>
      …
      <meta
          property="rendition:layout">
         pre-paginated
      </meta>
      <meta
          property="rendition:spread">
         both
      </meta>
   </metadata>

   <spine>
      <itemref
          idref="introduction"
          properties="rendition:layout-reflowable"/>
      …
   </spine>
   …
</package>
```

[Figure 4](#spread-both-with-intro-figure) Rendering of an introduction document in reflowable layout, followed by three fixed-layout documents with synthetic spread in portrait orientation.  
(Comics courtesy of [xkcd](https://xkcd.com/927/), licensed under [cc by-nc 2.5](https://creativecommons.org/licenses/by-nc/2.5/).)

![Progression of FXL pages both in portrait using synthetic spread in both cases, preceded by an introduction with reflowable content.](images/example_spread_both_with_reflowable_intro.svg)

Image description

A row of schematic views of three tablets in portrait mode, and linked with left-to-right arrows.

The first tablet views includes a single, column-like strip (i.e., a rectangle without a bottom edge following beyond the bottom of the tablet) with a text flowing down the strip, and starting with the word "Introduction". This is followed by two schematic tablets with three panels of comics displayed. The first tablet in the row contains the first and second panels of the comics side by side; the second tablet contains the second and third panels of the comics side-by-side.

###### 8.2.2.3.1 Synthetic spread overrides

[](#spread-overrides)

[EPUB creators](#dfn-epub-creator) _MAY_ specify the following properties locally on [spine](#dfn-epub-spine) ``[`itemref`](#dfn-itemref)`` elements to override the [global value](#property-spread-global) for the given spine item:

rendition:spread-auto

Specifies the [reading system](#dfn-epub-reading-system) determines when to render a synthetic spread for the spine item.

rendition:spread-both

Specifies the reading system should render a synthetic spread for the spine item in both portrait and landscape orientations.

rendition:spread-landscape

Specifies the reading system should render a synthetic spread for the spine item only when in landscape orientation.

rendition:spread-none

Specifies the reading system should not render a synthetic spread for the spine item.

rendition:spread-portrait

The `rendition:spread-portrait` property is [deprecated](#deprecated).

Refer to the [`spread-portrait` property definition](https://idpf.org/epub/301/spec/epub-publications-20140626.html#spread-portrait) in \[[epubpublications-301](#bib-epubpublications-301 "EPUB Publications 3.0.1")\] for more information.

EPUB creators _MUST NOT_ use more than one of these overrides on any given spine item.

##### 8.2.2.4 Spread placement

[](#page-spread)

When a [reading system](#dfn-epub-reading-system) renders a [synthetic spread](#dfn-synthetic-spread), the default behavior is to populate the spread by rendering the next [EPUB content document](#dfn-epub-content-document) in the next available unpopulated [viewport](#dfn-viewport), where the next available viewport is determined by the given [page progression direction](#attrdef-spine-page-progression-direction) or by local declarations within [EPUB content documents](#dfn-epub-content-document). An [EPUB creator](#dfn-epub-creator) _MAY_ override this automatic population behavior and force reading systems to place a document in a particular viewport by specifying one of the following properties on its spine `itemref` element:

`rendition:page-spread-center`

The `rendition:page-spread-center` property is an alias of the [`spread-none` property](#spread-none) for centering a spine item.

`rendition:page-spread-left`

The `rendition:page-spread-left` property is an alias of the `[page-spread-left](#page-spread-left)` property for placing a spine item in the left-hand slot of a two-page spread.

`rendition:page-spread-right`

The `rendition:page-spread-right` property is an alias of the `[page-spread-right](#page-spread-right)` property for placing a spine item in the right-hand slot of a two-page spread.

The `rendition:page-spread-center`, `rendition:page-spread-left`, and `rendition:page-spread-right` properties apply to both pre-paginated and reflowable content. They only apply when the reading system is creating synthetic spreads.

Although EPUB creators often indicate to use a spread in certain device orientations, the content itself does not represent true spreads (i.e., two consecutive pages that reading systems must render side-by-side for readability, such as a two-page map). To indicate that two consecutive pages represent a true spread, EPUB creators _SHOULD_ use the `rendition:page-spread-left` and `rendition:page-spread-right` properties on the [spine](#dfn-epub-spine) items for the two adjacent EPUB content documents, and omit the properties on spine items where one-up or two-up presentation is equally acceptable.

EPUB creators _MUST NOT_ declare more than one `rendition:page-spread-*` property, and/or their unprefixed equivalents, on any given spine item (e.g., it is valid to specify both "`rendition:page-spread-left page-spread-left`" in case reading systems only support one of properties).

Note

The `rendition:page-spread-left` and `rendition:page-spread-right` properties were created to allow the use of a single vocabulary for all fixed-layout properties. EPUB creators can use either property set, but older reading systems might only recognize the unprefixed versions.

The `rendition:page-spread-center` was created to make it easier for EPUB creators to understand the process of switching between two-page spreads and single centered pages. EPUB creators can use either `rendition:page-spread-center` or `spread-none` to disable spread behavior in reading systems.

[Example 61](#spread-page-spread-right-example): Starting the first document on the right

```
<package …>
   <metadata …>
      …
      <meta
          property="rendition:layout">
          reflowable
      </meta>

      <meta
          property="rendition:spread">
          landscape
      </meta>
      …
   </metadata>
   <spine page-progression-direction="ltr">
      …
      <itemref
          idref="first-panel"
          properties="rendition:page-spread-right"/>
      …
   </spine>
</package>
```

[Figure 5](#spread-page-spread-right-figure) Rendering of three fixed-layout documents, with synthetic spread in landscape orientation starting on the right.  
(Comics courtesy of [xkcd](https://xkcd.com/927/), licensed under [cc by-nc 2.5](https://creativecommons.org/licenses/by-nc/2.5/).)

![Progression of FXL pages in landscape modes, showing synthetic spread in both cases but with the first page appearing on the right side of the first page.](images/example_spread_page_spread_right.svg)

Image description

A row of schematic views of two tablets in landscape mode, and linked with a left-to-right arrow.

Three panels of a comics are displayed in the tablets. The first tablet in the row contains the first panels of the comics on the right hand of the tablet, with the left side empty; the second tablet contains the second and third panels of the comics side-by-side.

[Example 62](#fxl-ex5): Placing individual spine items in a spread

In this example, the EPUB creator intends the reading system to create a two-page fixed-layout center plate using synthetic spreads in any device orientation. Note that the EPUB creator has left spread behavior for the other (reflowable) parts undefined, since the global value of `rendition:spread` initializes to `auto` by default.

```
<package …>
   …
   <spine page-progression-direction="ltr">
      …
      <itemref
          idref="center-plate-left"
          properties="rendition:spread-both rendition:page-spread-left"/>
      <itemref
          idref="center-plate-right"
          properties="rendition:spread-both rendition:page-spread-right"/>
      …
   </spine>
</package>
```

[Example 63](#fxl-ex6): Creating a centered layout

```
<package …>
   <metadata …>
      …
      <meta
          property="rendition:layout">
         pre-paginated
      </meta>
      <meta
          property="rendition:spread">
         auto
      </meta>
   </metadata>
   <spine>
      …
      <itemref
          idref="center-plate"
          properties="rendition:page-spread-center"/>
      …
   </spine>
   …
</package>
```

##### 8.2.2.5 Viewport dimensions (deprecated)

[](#viewport)

The `rendition:viewport` property allows [EPUB creators](#dfn-epub-creator) to express the CSS initial containing block (ICB) \[[css2](#bib-css2 "Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification")\] for [XHTML](#dfn-xhtml-content-document) and [SVG content documents](#dfn-svg-content-document) whose `rendition:layout` property has been set to `pre-paginated`.

Use of the property is [deprecated](#deprecated).

Refer to the [`rendition:viewport` property definition](https://idpf.org/epub/301/spec/epub-publications-20140626.html#fxl-property-viewport) in \[[epubpublications-301](#bib-epubpublications-301 "EPUB Publications 3.0.1")\] for more information.

##### 8.2.2.6 Content document dimensions

[](#sec-fxl-content-dimensions)

This section defines rules for the expression and interpretation of dimensional properties of [fixed-layout documents](#dfn-fixed-layout-document).

Fixed-layout documents specify their [initial containing block](https://www.w3.org/TR/CSS2/visudet.html#containing-block-details) \[[css2](#bib-css2 "Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification")\] in the manner applicable to their format:

Expressing in XHTML

For XHTML [fixed-layout documents](#dfn-fixed-layout-document), the [initial containing block](https://www.w3.org/TR/CSS2/visudet.html#containing-block-details) \[[css2](#bib-css2 "Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification")\] is obtained from the _REQUIRED_ `height` and `width` definitions in a [`viewport meta` tag](#app-viewport-meta), where:

*   the `height` [property](#viewport.ebnf.property) _MUST_ have as its [value](#viewport.ebnf.value) a positive [number](https://www.w3.org/TR/CSS2/syndata.html#numbers) \[[css2](#bib-css2 "Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification")\] or the keyword `device-height`; and
*   the `width` property _MUST_ have as its value a positive [number](https://www.w3.org/TR/CSS2/syndata.html#numbers) \[[css2](#bib-css2 "Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification")\] or the keyword `device-width`.

The `device-width` and `device-height` values refer to the 100% of the width and height, respectively, of the reading system's [viewport](#dfn-viewport).

The `height` and `width` definitions _MUST_ be specified in the first `viewport meta` tag in document order in the \[[html](#bib-html "HTML Standard")\] [`head`](https://html.spec.whatwg.org/multipage/#the-head-element) element. Reading systems will ignore subsequent `viewport meta` tags.

EPUB creators _MUST NOT_ specify more than one `height` or `width` definition within a `viewport meta` tag.

[Example 64](#example-specifying-the-initial-containing-block-in-a-viewport-meta-tag): Specifying the initial containing block in a viewport meta tag

```
<html …>
   <head>
      …
      <meta
          name="viewport"
          content="width=1200, height=600"/>
      …
   </head>
   …
</html>
```

Expressing in SVG

For SVG [fixed-layout documents](#dfn-fixed-layout-document), the initial containing block \[[css2](#bib-css2 "Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification")\] dimensions _MUST_ be expressed using the [`viewBox` attribute](https://www.w3.org/TR/SVG/coords.html#ViewBoxAttribute) \[[svg](#bib-svg "SVG")\].

[Example 65](#example-specifying-the-initial-containing-block-in-the-viewbox-attribute): Specifying the initial containing block in the viewBox attribute

In this example, the `viewBox` attribute sets the ICB to an aspect ratio of 844 pixels wide by 1200 pixels high.

```
<svg xmlns="http://www.w3.org/2000/svg"
     version="1.1"
     viewBox="0 0 844 1200">
   …
</svg>
```

Note

The initial containing block definition affects only the document where it is defined. The dimensions of the containing blocks in the other content documents within the same publication may be different.

### 8.3 Reflowable layouts

[](#sec-reflowable-layouts)

Although control over the rendering of [EPUB content documents](#dfn-epub-content-document) to create [fixed layouts](#sec-fixed-layouts) is an obvious need not handled by other technologies, there are also considerations for reflowable content that are unique to [EPUB publications](#dfn-epub-publication) (e.g., how to handle the flow of content in the [viewport](#dfn-viewport)). This section defines properties that allow [EPUB creators](#dfn-epub-creator) to control presentation aspects of reflowable content.

#### 8.3.1 The `rendition:flow` property

[](#flow)

The `rendition:flow` property specifies the [EPUB creator](#dfn-epub-creator) preference for how [reading systems](#dfn-epub-reading-system) should handle content overflow.

When the [`rendition:flow` property](#flow) is specified on a `meta` element, it indicates the EPUB creator's global preference for overflow content handling (i.e., for all [spine](#dfn-epub-spine) items). EPUB creators _MAY_ indicate a preference for dynamic pagination or scrolling. For scrolled content, it is also possible to specify whether consecutive [EPUB content documents](#dfn-epub-content-document) are to be rendered as a continuous scrolling view or whether each is to be rendered separately (i.e., with a dynamic page break between each).

EPUB creators _MUST_ use one of the following values with the `rendition:flow` property:

paginated

Dynamically paginate all overflow content.

scrolled-continuous

Render all EPUB content documents such that overflow content is scrollable, and the [EPUB publication](#dfn-epub-publication) is presented as one continuous scroll from spine item to spine item (except where [locally overridden](#flow-overrides)).

Note that EPUB creators _SHOULD NOT_ create publications in which different resources have different block flow directions, as continuous scrolled rendition in EPUB reading systems would be problematic.

scrolled-doc

Render all EPUB content documents such that overflow content is scrollable, and each spine item is presented as a separate scrollable document.

auto

Render overflow content using the reading system default method or a user preference, whichever is applicable. Default value.

Note that when two reflowable EPUB content documents occur sequentially in the spine, the default rendering for their \[[html](#bib-html "HTML Standard")\] [`body`](https://html.spec.whatwg.org/multipage/#the-body-element) elements is consistent with the [`page-break-before` property](https://www.w3.org/TR/CSS2/page.html#propdef-page-break-before) \[[csssnapshot](#bib-csssnapshot "CSS Snapshot")\] having been set to `always`. In addition to using the `rendition:flow` property, EPUB creators _MAY_ override this behavior through an appropriate style sheet declaration, if the reading system supports such overrides.

EPUB creators _MUST NOT_ declare the `rendition:flow` property more than once.

They also _MUST NOT_ declare the property using the [`refines` attribute](#attrdef-refines). Refer to [8.3.1.1 Spine overrides](#flow-overrides) for setting the property for individual EPUB content documents.

[Figure 6](#fig-flow-paginated-single) Rendering of an EPUB publication with a single spine item, and with the `rendition:flow` set to `paginated`.

![The continuous progression of paginated content produced for a single document.](images/example_rendering_paginated_single_spine.svg)

Image description

Three column-like rectangles linked left-to-middle and middle-to-right with respective arrows, with a text flowing from one rectangle to the next one. The text is sectioned with headers figuring 'Chapter 1', '2', and '3'. The leftmost rectangle is enclosed in a schematic view of a tablet.

[Figure 7](#fig-flow-paginated-multiple) Rendering of an EPUB publication with multiple spine items, and with the `rendition:flow` set to `paginated`.

![The continuous progression of paginated content produced for each document with transitions to
new pages between documents.](images/example_rendering_paginated_multiple_spine.svg)

Image description

Three column-like rectangles linked left-to-middle and middle-to-right with respective arrows, with a text flowing from one rectangle to the next one. The text is sectioned with headers figuring 'Chapter 1', '2'. The section with 'Chapter 2' starts at the top of the rightmost rectangle, leaving an empty space at the bottom of the middle rectangle. The leftmost rectangle is enclosed in a schematic view of a tablet.

[Figure 8](#fig-flow-scrolled-continuous) Rendering of an EPUB publication with a single spine item, and with the `rendition:flow` set to `scrolled-continuous`.

![The progression of a continuous scroll of content extends vertically off the user's screen,
with new documents added to the bottom as encountered.](images/example_rendering_scrolled_continuous.svg)

Image description

A single, column-like strip (i.e., a rectangle without a bottom edge) with a text flowing down the strip. The text is sectioned with headers figuring 'Chapter 1', '2'. The top part of the strip is enclosed in a schematic view of a tablet.

[Figure 9](#fig-flow-scrolled-doc) Rendering of an EPUB publication with multiple spine items, and with the `rendition:flow` set to `scrolled-doc`.

![The progression of scrollable documents depicting how only the content within each document
is scrollable.](images/example_rendering_scrolled_doc.svg)

Image description

Three column-like strips (i.e., a rectangles without bottom edges) linked left-to-middle and middle-to-right with respective arrows, each containing a text flowing down the strip. The text is sectioned with headers figuring 'Chapter 1', '2' and '3'. Each strip starts with a chapter header and flows down the strip. The top part of the leftmost strip is enclosed in a schematic view of a tablet.

##### 8.3.1.1 Spine overrides

[](#flow-overrides)

[EPUB creators](#dfn-epub-creator) _MAY_ specify the following properties locally on [spine](#dfn-epub-spine) ``[`itemref`](#dfn-itemref)`` elements to override the [global value](#property-flow-global) for the given spine item:

rendition:flow-auto

Indicates no preference for overflow content handling by the EPUB creator.

rendition:flow-paginated

Indicates the EPUB creator preference is to dynamically paginate content overflow.

rendition:flow-scrolled-continuous

Indicates the EPUB creator preference is to provide a scrolled view for overflow content, and that consecutive spine items with this property are to be rendered as a continuous scroll.

rendition:flow-scrolled-doc

Indicates the EPUB creator preference is to provide a scrolled view for overflow content, and each spine item with this property is to be rendered as a separate scrollable document.

EPUB creators _MUST NOT_ use more than one of these overrides on any given spine item.

[Example 66](#property-flow-ex1): Overriding a global paginated flow declaration

In this example, the EPUB creator's intent is to have a paginated [EPUB publication](#dfn-epub-publication) with a scrollable table of contents.

```
<package …>
<metadata …>
	…
	<meta
		property="rendition:flow">
		paginated
	</meta>
	…
</metadata>

…

<spine>
	<itemref
		idref="toc"
		properties="rendition:flow-scrolled-doc"/>
	<itemref
		idref="c01"/>
</spine>
</package>
```

#### 8.3.2 The `rendition:align-x-center` property

[](#align-x-center)

The `rendition:align-x-center` property specifies that the given [spine](#dfn-epub-spine) item should be centered horizontally in the [viewport](#dfn-viewport) or spread.

The property _MUST NOT_ be set globally for all [EPUB content documents](#dfn-epub-content-document) (i.e., in a ``[`meta`](#dfn-meta)`` element without a [`refines` attribute](#attrdef-refines)). It is only available as a spine override for individual EPUB content documents via the ``[`itemref`](#dfn-itemref)`` element's `properties` attribute.

Note

This property was developed primarily to handle "Naka-Tobira (中扉)" (sectional title pages), in the absence of reliable centering control within the content rendering. As support for paged media evolves in CSS, however, this property is expected to be deprecated. [EPUB creators](#dfn-epub-creator) are encouraged to use CSS solutions when effective.

9\. Media overlays
------------------

[](#sec-media-overlays)

### 9.1 Introduction

[](#sec-overlays-introduction)

_This section is non-normative._

Mainstream ebooks, educational tools and ebooks formatted for persons with print disabilities are some examples of works that contain synchronized audio narration. In EPUB 3, [EPUB creators](#dfn-epub-creator) can create these types of books using media overlay documents to describe the timing for the pre-recorded audio narration and how it relates to the [EPUB content document](#dfn-epub-content-document) markup. The specification defines the file format for media overlays as a subset of \[[smil3](#bib-smil3 "Synchronized Multimedia Integration Language (SMIL 3.0)")\], a W3C recommendation for representing synchronized multimedia information in XML.

The text and audio synchronization enabled by media overlays provides enhanced accessibility for any user who has difficulty following the text of a traditional book. Media overlays also provide a continuous listening experience for readers who are unable to read the text for any reason, something that traditional audio embedding techniques cannot offer. They are even useful for purposes not traditionally considered accessibility concerns (e.g., for language learning).

The media overlays feature is transparent to [EPUB reading systems](#dfn-epub-reading-system) that do not support the feature. The inclusion of media overlays in an [EPUB publication](#dfn-epub-publication) has no impact on the ability of media overlay-unaware reading systems to render the EPUB publication as though the media overlays are not present.

Media overlays in EPUB are not an equivalent to audiobooks, as audiobooks are primarily audio-based with text occasionally provided as an alternate format. The W3C \[[audiobooks](#bib-audiobooks "Audiobooks")\] recommendation is for building audio publications.

Although future versions of this specification might incorporate support for video media (e.g., synchronized text/sign-language books), this version supports only synchronizing audio media with the EPUB content document.

### 9.2 Media overlay documents

[](#sec-overlay-docs)

#### 9.2.1 Media overlay document requirements

[](#sec-overlay-req)

A [media overlay document](#dfn-media-overlay-document):

*   _MUST_ be valid to the media overlays schema as defined in [G.3 Media overlays schema](#app-schema-overlays) and conform to all content conformance constraints expressed in [9.2.2 Media overlay document definition](#sec-overlays-def).
    
*   _MAY_ refer to more than one [EPUB content document](#dfn-epub-content-document), but more than one media overlay document _MUST NOT_ reference the same EPUB content document.
    

#### 9.2.2 Media overlay document definition

[](#sec-overlays-def)

All elements \[[xml](#bib-xml "Extensible Markup Language (XML) 1.0 (Fifth Edition)")\] defined in this section are in the `https://www.w3.org/ns/SMIL` namespace \[[xml-names](#bib-xml-names "Namespaces in XML 1.0 (Third Edition)")\] unless otherwise specified.

##### 9.2.2.1 The `smil` element

[](#sec-smil-smil-elem)

The `smil` element encapsulates all the information in an [media overlay document](#dfn-media-overlay-document).

Element Name:

`smil`

Usage:

_REQUIRED_ [root element](https://www.w3.org/TR/xml/#dt-root) \[[xml](#bib-xml "Extensible Markup Language (XML) 1.0 (Fifth Edition)")\] of the media overlay document.

Attributes:

`version` `[required]`

Specifies the version number of the \[[smil3](#bib-smil3 "Synchronized Multimedia Integration Language (SMIL 3.0)")\] specification to which the media overlay document adheres.

This attribute _MUST_ have the value "`3.0`".

`id` `[optional]`

The [ID](https://www.w3.org/TR/xml/#id) \[[xml](#bib-xml "Extensible Markup Language (XML) 1.0 (Fifth Edition)")\] of the element, which _MUST_ be unique within the document scope.

`epub:prefix` `[optional]`

Declares additional metadata vocabulary prefixes.

Refer to [9.3.3 Structural semantics in overlays](#sec-docs-structural-semantic) for more information.

Content Model:

In this order:

*   ``[`head`](#dfn-head)`` `[0 or 1]`
    
*   ``[`body`](#dfn-body)`` `[exactly 1]`
    

##### 9.2.2.2 The `head` element

[](#sec-smil-head-elem)

The `head` element is the container for metadata in the [media overlay document](#dfn-media-overlay-document).

Element Name:

`head`

Usage:

The `head` element is the _OPTIONAL_ first child of the ``[`smil`](#dfn-smil)`` element.

Attributes:

None

Content Model:

``[`metadata`](#dfn-metadata)`` `[0 or 1]`

As this specification does not define any metadata properties that must occur in the media overlay document, the `head` element is _OPTIONAL_.

##### 9.2.2.3 The `metadata` element

[](#sec-smil-metadata-elem)

The `metadata` element represents metadata for the [media overlay document](#dfn-media-overlay-document). The `metadata` element is an extension point that allows the inclusion of metadata from any metainformation structuring language.

Element Name:

`metadata`

Usage:

As a child of the ``[`head`](#dfn-head)`` element.

Attributes:

None

Content Model:

`[0 or more]` elements from any namespace

This specification does not require any metadata properties in the media overlay document; the `metadata` element is provided for custom metadata requirements.

##### 9.2.2.4 The `body` element

[](#sec-smil-body-elem)

The `body` element is the starting point for the presentation contained in the [media overlay document](#dfn-media-overlay-document). It contains the main sequence of ``[`par`](#dfn-par)`` and ``[`seq`](#dfn-seq)`` elements.

Element Name:

`body`

Usage:

The `body` element is a _REQUIRED_ child of the ``[`smil`](#dfn-smil)`` element. It follows the ``[`head`](#dfn-head)`` element, when that element is present.

Attributes:

`epub:type` `[optional]`

An expression of the structural semantics of the corresponding element in the [EPUB content document](#dfn-epub-content-document).

The value is a whitespace-separated list of [property](#sec-property-datatype) types. Refer to [9.3.3 Structural semantics in overlays](#sec-docs-structural-semantic) for more information.

`id` `[optional]`

The [ID](https://www.w3.org/TR/xml/#id) \[[xml](#bib-xml "Extensible Markup Language (XML) 1.0 (Fifth Edition)")\] of the element, which _MUST_ be unique within the document scope.

`epub:textref` `[optional]`

Refers to the associated EPUB content document and, optionally, identifies a specific part of it.

The value _MUST_ be a [path-relative-scheme-less-URL string](https://url.spec.whatwg.org/#path-relative-scheme-less-url-string), optionally followed by `U+0023 (#)` and a [URL-fragment string](https://url.spec.whatwg.org/#url-fragment-string).

Content Model:

In any order:

*   ``[`seq`](#dfn-seq)`` `[0 or more]`
    
*   ``[`par`](#dfn-par)`` `[0 or more]`
    

_MUST_ include at least one `par` or `seq`.

##### 9.2.2.5 The `seq` element

[](#sec-smil-seq-elem)

The `seq` element is a sequential time container for media objects and/or child time containers.

Element Name:

`seq`

Usage:

One or more `seq` elements _MAY_ occur as children of the ``[`body`](#dfn-body)`` element and of the ``[`seq`](#dfn-seq)`` element.

Attributes:

`epub:type` `[optional]`

An expression of the structural semantics of the corresponding element in the [EPUB content document](#dfn-epub-content-document).

The value is a whitespace-separated list of [property](#sec-property-datatype) types. Refer to [9.3.3 Structural semantics in overlays](#sec-docs-structural-semantic) for more information.

`id` `[optional]`

The [ID](https://www.w3.org/TR/xml/#id) \[[xml](#bib-xml "Extensible Markup Language (XML) 1.0 (Fifth Edition)")\] of the element, which _MUST_ be unique within the document scope.

`epub:textref` `[required]`

Refers to the associated [EPUB content document](#dfn-epub-content-document) and, optionally, identifies a specific part of it.

The value _MUST_ be a [path-relative-scheme-less-URL string](https://url.spec.whatwg.org/#path-relative-scheme-less-url-string), optionally followed by `U+0023 (#)` and a [URL-fragment string](https://url.spec.whatwg.org/#url-fragment-string).

Refer to [9.3.2.1 Overlay structure](#sec-media-overlays-structure) for more information.

Content Model:

In any order:

*   ``[`seq`](#dfn-seq)`` `[0 or more]`
    
*   ``[`par`](#dfn-par)`` `[0 or more]`
    

_MUST_ include at least one `par` or `seq`.

##### 9.2.2.6 The `par` element

[](#sec-smil-par-elem)

The `par` element is a parallel time container for media objects.

Element Name:

`par`

Usage:

One or more `par` elements _MAY_ occur as children of the ``[`body`](#dfn-body)`` and ``[`seq`](#dfn-seq)`` elements.

Attributes:

`epub:type` `[optional]`

An expression of the structural semantics of the corresponding element in the [EPUB content document](#dfn-epub-content-document).

The value is a whitespace-separated list of [property](#sec-property-datatype) types. Refer to [9.3.3 Structural semantics in overlays](#sec-docs-structural-semantic) for more information.

`id` `[optional]`

The [ID](https://www.w3.org/TR/xml/#id) \[[xml](#bib-xml "Extensible Markup Language (XML) 1.0 (Fifth Edition)")\] of the element, which _MUST_ be unique within the document scope.

Content Model:

In any order:

*   ``[`text`](#dfn-text)`` `[exactly 1]`
    
*   ``[`audio`](#dfn-audio)`` `[0 or 1]`
    

##### 9.2.2.7 The `text` element

[](#sec-smil-text-elem)

The `text` element references an element in an [EPUB content document](#dfn-epub-content-document). A `text` element typically refers to a textual element but can also refer to other [EPUB content document](#dfn-epub-content-document) media elements. In the absence of a sibling ``[`audio`](#dfn-audio)`` element, textual content referred to by this element may be rendered via [text-to-speech](#sec-tts).

Element Name:

`text`

Usage:

As a _REQUIRED_ child of the ``[`par`](#dfn-par)`` element.

Attributes:

`src` `[required]`

Refers to the associated EPUB content document and, optionally, identifies a specific part of it.

The value _MUST_ be a [path-relative-scheme-less-URL string](https://url.spec.whatwg.org/#path-relative-scheme-less-url-string), optionally followed by `U+0023 (#)` and a [URL-fragment string](https://url.spec.whatwg.org/#url-fragment-string).

`id` `[optional]`

The [ID](https://www.w3.org/TR/xml/#id) \[[xml](#bib-xml "Extensible Markup Language (XML) 1.0 (Fifth Edition)")\] of the element, which _MUST_ be unique within the document scope.

Content Model:

Empty

Note

This specification places no restriction on the `src` attribute of a `text` element. [EPUB creators](#dfn-epub-creator) should, however, refer to a content that can be styled with CSS to make the [association with style information](#sec-docs-assoc-style) effective (i.e., [palpable content](https://html.spec.whatwg.org/multipage/dom.html#palpable-content-2) for XHTML or [paths](https://www.w3.org/TR/SVG11/paths.html), [basic shapes](https://www.w3.org/TR/SVG11/shapes.html), or [text](https://www.w3.org/TR/SVG11/text.html) elements in SVG).

Note

\[[epub-rs-33](#bib-epub-rs-33 "EPUB Reading Systems 3.3")\] no longer provides guidance for reading systems on the playback of timed media (i.e., the automatic starting of the referenced media). Although the `src` attribute of a `text` element may refer to embedded timed media (e.g., via an \[[html](#bib-html "HTML Standard")\] `[video](https://html.spec.whatwg.org/multipage/media.html#video)` element), referencing such media may have unpredictable results.

##### 9.2.2.8 The `audio` element

[](#sec-smil-audio-elem)

The `audio` element represents a clip of audio media.

Element Name:

`audio`

Usage:

An _OPTIONAL_ child of the ``[`par`](#dfn-par)`` element.

Attributes:

`id` `[optional]`

The [ID](https://www.w3.org/TR/xml/#id) \[[xml](#bib-xml "Extensible Markup Language (XML) 1.0 (Fifth Edition)")\] of the element, which _MUST_ be unique within the document scope.

`src` `[required]`

The [relative-](https://url.spec.whatwg.org/#relative-url-string) or [absolute-URL string](https://url.spec.whatwg.org/#absolute-url-string) \[[url](#bib-url "URL Standard")\] reference to an audio file. The audio file _MUST_ be one of the audio formats listed in the [core media type resources](#sec-core-media-types) table.

`clipBegin` `[optional]`

A clock value that specifies the offset into the physical media corresponding to the start point of an audio clip.

_MUST_ be a \[[smil3](#bib-smil3 "Synchronized Multimedia Integration Language (SMIL 3.0)")\] [clock value](https://www.w3.org/TR/SMIL3/smil-timing.html#q22).

See [H.4 Clock values](#clock-examples).

`clipEnd` `[optional]`

A clock value that specifies the offset into the physical media corresponding to the end point of an audio clip.

_MUST_ be a \[[smil3](#bib-smil3 "Synchronized Multimedia Integration Language (SMIL 3.0)")\] [clock value](https://www.w3.org/TR/SMIL3/smil-timing.html#q22).

See [H.4 Clock values](#clock-examples).

The chronological offset of the terminating position _MUST_ be after the starting offset specified in the `clipBegin` attribute.

Content Model:

Empty

### 9.3 Creating media overlays

[](#sec-overlay-doc-create)

#### 9.3.1 Introduction

[](#sec-docs-intro)

_This section is non-normative._

[EPUB creators](#dfn-epub-creator) can represent a pre-recorded narration of a publication as a series of audio clips, each corresponding to part of an [EPUB content document](#dfn-epub-content-document). A single audio clip, for example, typically represents a single phrase or paragraph, but infers no order relative to the other clips or to the text of a document. Media overlays solve this problem of synchronization by tying the structured audio narration to its corresponding text (or other media) in the EPUB content document using \[[smil3](#bib-smil3 "Synchronized Multimedia Integration Language (SMIL 3.0)")\] markup. Media overlays are, in fact, a simplified subset of SMIL 3.0 that define the playback sequence of these clips.

The SMIL elements primarily used for structuring media overlays are ``[`body`](#dfn-body)`` (used for the main sequence), ``[`seq`](#dfn-seq)`` (sequence) and ``[`par`](#dfn-par)`` (parallel). (Refer to [9.2.2 Media overlay document definition](#sec-overlays-def) for more information on these and other SMIL elements.)

The `par` element is the basic building block of a media overlay and corresponds to a phrase in the EPUB content document. The element provides two key pieces of information for synchronizing content: 1) the audio clip containing the narration for the phrase; and 2) a pointer to the associated EPUB content document fragment. The `par` element uses two media element children to represent this information: an ``[`audio`](#dfn-audio)`` element and a ``[`text`](#dfn-text)`` element. Because `par` elements' media object children are timed in parallel, reading systems render the audio clip and EPUB content document fragment at the same time, resulting in a synchronized presentation.

The `text` element `src` attribute references the associated phrase, sentence, or other segment of the EPUB content document by its URL \[[url](#bib-url "URL Standard")\] reference. The `audio` element `src` attribute similarly references the location of the corresponding audio clip and adds the _OPTIONAL_ [`clipBegin`](#attrdef-smil-clipBegin) and [`clipEnd`](#attrdef-smil-clipEnd) attributes to indicate a specific offset within the clip.

[Example 67](#example-media-overlays-markup-for-a-single-phrase-or-sentence): Media overlays markup for a single phrase or sentence

```
<par>
   <text
       src="chapter1.xhtml#sentence1"/>
   <audio
       src="chapter1_audio.mp3"
       clipBegin="23s"
       clipEnd="30s"/>
</par>
```

EPUB creators place `par` elements together sequentially to form a series of phrases or sentences. Not every element of the EPUB content document will have a corresponding `par` element in a media overlay document, only those relevant to the audio narration.

[Example 68](#example-a-basic-media-overlay-document-containing-a-sequence-of-phrases): A basic media overlay document containing a sequence of phrases

In this example, the `body` element acts as the main sequence for the whole document.

```
<smil
    xmlns="http://www.w3.org/ns/SMIL"
    version="3.0">
   <body>
      <par id="par1">
         <text
             src="chapter1.xhtml#sentence1"/>
         <audio
             src="chapter1_audio.mp3"
             clipBegin="0s"
             clipEnd="10s"/>
      </par>
      <par id="par2">
         <text
             src="chapter1.xhtml#sentence2"/>
         <audio
             src="chapter1_audio.mp3"
             clipBegin="10s"
             clipEnd="20s"/>
      </par>
      <par id="par3">
         <text
             src="chapter1.xhtml#sentence3"/>
         <audio
             src="chapter1_audio.mp3"
             clipBegin="20s"
             clipEnd="30s"/>
      </par>
   </body>
</smil>
```

EPUB creators can also add `par` elements to `seq` elements to define more complex structures such as parts and chapters (see [9.3.2.1 Overlay structure](#sec-media-overlays-structure)).

#### 9.3.2 Relationship to the EPUB content document

[](#sec-docs-relations)

Note

In this section, the [EPUB content document](#dfn-epub-content-document) is assumed to be an [XHTML content document](#dfn-xhtml-content-document). While [EPUB creators](#dfn-epub-creator) may use media overlays with [SVG content documents](#dfn-svg-content-document), playback behavior might not be consistent and therefore interoperability is not guaranteed.

EPUB creators should also be aware that [reading system](#dfn-epub-reading-system) support for playback of both reflowable and fixed-layout EPUB content documents is not guaranteed. Differences in reading system pagination strategies mean that some reading systems will only support media overlays in one or the other layout format.

##### 9.3.2.1 Overlay structure

[](#sec-media-overlays-structure)

The ``[`body`](#dfn-body)`` of a [media overlay document](#dfn-media-overlay-document) consists of two elements: the ``[`par`](#dfn-par)`` element and the ``[`seq`](#dfn-seq)`` element. The ordering of these elements represents how [reading systems](#dfn-epub-reading-system) render the content in the corresponding [EPUB content documents](#dfn-epub-content-document) during playback.

The `par` element represents a segment of content, such as a word, phrase, sentence, table cell, list item, image, or other identifiable piece of content in the markup. Each element identifies both the content to display (in the ``[`text`](#dfn-text)`` element) and audio to synchronize (in the ``[`audio`](#dfn-audio)`` element) during playback.

The `seq` element represents sequences — sets of `seq` and/or `par` elements that together represent a logical component of the content. [EPUB creators](#dfn-epub-creator) can use it to represent nested containers such as sections, asides, headers, tables, lists, and footnotes. It allows EPUB creators to retain the structure inherent in these containers in the media overlay document.

The `seq` element _MUST_ contain an [`epub:textref` attribute](#attrdef-body-textref). As `seq` elements do not provide synchronization instructions, this attribute allows a [reading system](#dfn-epub-reading-system) to match the fragment to a location in the text.

Note

The reason for grouping structures like sections, figures, tables, and footnotes in a `seq` element is so that reading systems can identify their start and end positions during playback. Reading systems can then offer playback options tailored to the layout of the content, such as jumping past a long figure, turning off rendering of page break announcements (see [9.4 Skippability and escapability](#sec-behaviors-skip-escape)), or customizing the reading mode to suit structures such as tables.

[Example 69](#example-mo-nesting): A media overlay document with nested seq elements

This example shows a chapter with both a section header and a figure.

Media overlay document:

```
<smil
    xmlns="http://www.w3.org/ns/SMIL"
    xmlns:epub="http://www.idpf.org/2007/ops"
    version="3.0">
   <body>

      <!-- a chapter -->

      <seq
          id="id1"
          epub:textref="chapter1.xhtml#sectionstart"
          epub:type="chapter">

         <!-- the section title -->

         <par id="id2">
            <text
                src="chapter1.xhtml#section1_title"/>
            <audio
                src="chapter1_audio.mp3"
                clipBegin="0:23:23.84"
                clipEnd="0:23:34.221"/>
         </par>

         <!-- some sentences in the chapter -->

         <par id="id3">
            <text
                src="chapter1.xhtml#text1"/>
            <audio
                src="chapter1_audio.mp3"
                clipBegin="0:23:34.221"
                clipEnd="0:23:59.003"/>
         </par>
         <par id="id4">
            <text
                src="chapter1.xhtml#text2"/>
            <audio
                src="chapter1_audio.mp3"
                clipBegin="0:23:59.003"
                clipEnd="0:24:15.000"/>
         </par>

         <!-- a figure -->

         <seq
             id="id7"
             epub:textref="chapter1.xhtml#figure">
            <par id="id8">
               <text
                   src="chapter1.xhtml#photo"/>
               <audio
                   src="chapter1_audio.mp3"
                   clipBegin="0:24:18.123"
                   clipEnd="0:24:28.764"/>
            </par>
            <par id="id9">
               <text
                   src="chapter1.xhtml#caption"/>
               <audio
                   src="chapter1_audio.mp3"
                   clipBegin="0:24:28.764"
                   clipEnd="0:24:50.010"/>
            </par>
         </seq>

         <!-- more sentences in the chapter (outside the figure) -->

         <par id="id12">
            <text
                src="chapter1.xhtml#text3"/>
            <audio
                src="chapter1_audio.mp3"
                clipBegin="0:25:45.515"
                clipEnd="0:26:30.203"/>
         </par>
         <par id="id13">
            <text
                src="chapter1.xhtml#text4"/>
            <audio
                src="chapter1_audio.mp3"
                clipBegin="0:26:30.203"
                clipEnd="0:27:15.000"/>
         </par>
      </seq>
   </body>
</smil>
```

XHTML content document:

```
<html …>
   <head>
      <title>
         Media Overlays Example of
         EPUB content document
      </title>
   </head>
   <body id="sec1">
      <section
          id="sectionstart"
          epub:type="chapter">

         <h1 id="section1_title">
            The Section Title
         </h1>

         <p id="text1">
            The first phrase of the main text body.
         </p>

         <p id="text2">
            The second phrase of the main text body.
         </p>

         <figure id="figure">
            <img id="photo"
                src="photo.png"
                alt="a photograph for which there is a caption" />

            <figcaption id="caption">
               The photo caption
            </figcaption>
         </figure>

         <p id="text3">
            The third phrase of the main text body.
         </p>

         <p id="text4">
            The fourth phrase of the main text body.
         </p>
      </section>
   </body>
</html>
```

##### 9.3.2.2 Referencing document fragments

[](#sec-media-overlays-fragids)

Both the `epub:textref` attribute and the ``[`text`](#dfn-text)`` element's `src` attribute may contain a [URL-fragment string](https://url.spec.whatwg.org/#url-fragment-string) that references a specific part (e.g., an element via its ID) of the associated [EPUB content document](#dfn-epub-content-document).

For [XHTML](#dfn-xhtml-content-document) and [SVG content documents](#dfn-svg-content-document), the URL-fragment string _SHOULD_ be a reference to a specific element via its ID, or an [SVG Fragment Identifier](https://www.w3.org/TR/SVG/linking.html#SVGFragmentIdentifiers) \[[svg](#bib-svg "SVG")\], respectively.

EPUB creators _MAY_ use other fragment identifier schemes, but [reading systems](#dfn-epub-reading-system) may not support such identifiers.

##### 9.3.2.3 Overlay granularity

[](#sec-media-overlays-granularity)

_This section is non-normative._

The granularity level of the media overlay depends on how [EPUB creators](#dfn-epub-creator) mark up the [EPUB content document](#dfn-epub-content-document) and the type of fragment identifier they use in the ``[`text`](#dfn-text)`` elements' `src` attributes and the ``[`seq`](#dfn-seq)`` elements' `epub:textref` attributes. For example, when referencing \[[html](#bib-html "HTML Standard")\] elements, if the finest level of markup is at the paragraph level, then that is the finest possible level for media overlay synchronization. Likewise, if sub-paragraph markup is available, such as \[[html](#bib-html "HTML Standard")\] `[span](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-span-element)` element representing phrases or sentences, then finer granularity is possible in the media overlay. Finer granularity gives users more precise results for synchronized playback when navigating by word or phrase and when searching the text but increases the file size of the [media overlay documents](#dfn-media-overlay-document). Fragment identifier schemes that do not rely on the presence of elements could provide even finer granularity, where supported.

##### 9.3.2.4 Text-to-speech rendering

[](#sec-tts)

This specification allows the use of text-to-speech (TTS) — the rendering of the textual content of an [EPUB publication](#dfn-epub-publication) as artificial human speech using a synthesized voice — in addition to pre-recorded audio clips.

When a media overlay ``[`par`](#dfn-par)`` element omits its ``[`audio`](#dfn-audio)`` element, its ``[`text`](#dfn-text)`` element may be rendered in reading systems via TTS. If the text fragment is not appropriate for TTS rendering (e.g., is not a text element and/or has no text fallback), this may produce unexpected results.

Note

See [EPUB 3 Text-to-Speech Support](https://www.w3.org/TR/epub-tts-10/#) \[[epub-tts-10](#bib-epub-tts-10 "EPUB 3 Text-to-Speech Enhancements 1.0")\] for more information about using TTS technologies in EPUB publications.

#### 9.3.3 Structural semantics in overlays

[](#sec-docs-structural-semantic)

To express [structural semantics](#app-structural-semantics) in [media overlay documents](#dfn-media-overlay-document), [EPUB creators](#dfn-epub-creator) _MAY_ specify the ``[`epub:type`](#dfn-epub-type)`` attribute on ``[`par`](#dfn-par)``, ``[`seq`](#dfn-seq)``, and ``[`body`](#dfn-body)`` elements.

The `epub:type` attribute facilitates [reading system](#dfn-epub-reading-system) behavior appropriate for the semantic type(s) indicated. Examples of these behaviors are [skippability and escapability](#sec-behaviors-skip-escape) and [table reading mode](https://www.w3.org/TR/epub-rs-33/#note-table-reading-mode) \[[epub-rs-33](#bib-epub-rs-33 "EPUB Reading Systems 3.3")\].

[Media overlay documents](#dfn-media-overlay-document) _MAY_ use the applicable [vocabulary association mechanisms](#sec-vocab-assoc) for the `epub:type` attribute to define additional semantics.

[Example 70](#example-semantic-markup-for-a-media-overlay-document-containing-a-figure): Semantic markup for a media overlay document containing a figure

```
<smil
    xmlns="http://www.w3.org/ns/SMIL"
    xmlns:epub="http://www.idpf.org/2007/ops"
    version="3.0">
   <body>
      <seq
          id="id1"
          epub:textref="chapter1.xhtml#figure"
          epub:type="figure">
         <par id="id2">
            <text
                src="chapter1.xhtml#figuretitle"/>
            <audio
                src="chapter1_audio.mp3"
                clipBegin="0:24:15.000"
                clipEnd="0:24:18.123"/>
         </par>
         <par id="id3">
            <text
                src="chapter1.xhtml#figurecaption"/>
            <audio
                src="chapter1_audio.mp3"
                clipBegin="0:24:18.123"
                clipEnd="0:24:38.530"/>
         </par>
         <par id="id4">
            <text
                src="chapter1.xhtml#figuretext1"/>
            <audio
                src="chapter1_audio.mp3"
                clipBegin="0:24:38.530"
                clipEnd="0:25:00.515"/>
         </par>
      </seq>
   </body>
</smil>
```

#### 9.3.4 Associating style information

[](#sec-docs-assoc-style)

[EPUB creators](#dfn-epub-creator) _MAY_ express visual rendering information for the currently playing [EPUB content document](#dfn-epub-content-document) element in a CSS Style Sheet using author-defined classes.

When used, EPUB creators _MUST_ declare the class names in the [package document](#dfn-package-document) using the [`active-class`](#active-class) and [`playback-active-class`](#playback-active-class) properties.

EPUB creators _MUST_ define exactly one CSS class name in each property they define. Each property _MUST_ define a [valid CSS class name](https://www.w3.org/TR/CSS2/syndata.html#characters) not including any [selectors](https://www.w3.org/TR/CSS2/selector.html) \[[css2](#bib-css2 "Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification")\]. This specification **does not** reserve names for use with these properties.

EPUB creators _MAY_ define any CSS properties for the specified CSS classes but must ensure that each EPUB content document with an associated [media overlay document](#dfn-media-overlay-document) includes a CSS stylesheet (either embedded or linked) containing the class definitions. In the absence of such definitions [reading systems](#dfn-epub-reading-system) might provide their own styling, or no styling at all.

EPUB creators _MUST NOT_ use the `active-class` and `playback-active-class` properties in conjunction with a [`refines` attribute](#attrdef-refines) as they always apply to the entire [EPUB publication](#dfn-epub-publication).

[Example 71](#example-associating-style-information-with-the-currently-playing-epub-content-document): Associating style information with the currently playing EPUB content document

The author-defined CSS class names are declared using the metadata properties [`active-class`](#active-class) and [`playback-active-class`](#playback-active-class) in the package document:

```
<package …>
   <metadata …>
      …
      <meta
          property="media:active-class">
         my-active-item
      </meta>
      <meta
          property="media:playback-active-class">
         my-document-playing
      </meta>
      …
   </metadata>
   …
</package>
```

The CSS Style Sheet containing the author-defined class names:

```
/* emphasize the active element */
.my-active-item {
    background-color: yellow;
    color: black !important;
}

/* fade out the inactive text */
html.my-document-playing * {
    color: gray;
}
```

The relevant EPUB content document excerpt:

```
<html>
   …
   <body>
      …
      <span id="txt1">
         This is the first phrase.
      </span>
      <span id="txt2">
         This is the second phrase.
      </span>
      <span id="txt3">
         This is the third phrase.
      </span>
      …
   </body>
</html>
```

In this example, the reading system would apply the author-defined `my-active-item` class to each text element in the EPUB content document as it became active during playback. Conversely, reading systems would remove the class name when the element is no longer active. The user would see each EPUB content document element styled with a yellow background for the duration of that element's playback.

The reading system would also apply the author-defined `my-document-playing` class to the document element of the EPUB content document when media overlays playback begins. The reading system would remove the class name when playback stops. In the case of an [XHTML content document](#dfn-xhtml-content-document), the reading system would apply the class name to the `[html](https://html.spec.whatwg.org/multipage/semantics.html#the-html-element)` element \[[html](#bib-html "HTML Standard")\]. In the case of an [SVG content document](#dfn-svg-content-document), the reading system would apply the class name to the `[svg](https://www.w3.org/TR/SVG/struct.html#elementdef-svg)` element \[[svg](#bib-svg "SVG")\]. The user would see all the inactive text elements turn gray during media overlays playback. When playback stopped, the elements' colors would return to their defaults.

#### 9.3.5 Media overlays packaging

[](#sec-docs-package)

##### 9.3.5.1 Including media overlays

[](#sec-package-including)

If an [EPUB content document](#dfn-epub-content-document) is wholly or partially referenced by a [media overlay document](#dfn-media-overlay-document), then its [manifest](#dfn-epub-manifest) ``[`item`](#dfn-item)`` element _MUST_ specify a `media-overlay` attribute. The attribute _MUST_ reference the [ID](https://www.w3.org/TR/xml/#id) \[[xml](#bib-xml "Extensible Markup Language (XML) 1.0 (Fifth Edition)")\] of the manifest `item` for the corresponding media overlay document.

[EPUB creators](#dfn-epub-creator) _MUST_ only specify the `media-overlay` attribute on manifest `item` elements that reference EPUB content documents.

Manifest items for media overlay documents _MUST_ have the media type `application/smil+xml`.

[Example 72](#example-entries-for-an-epub-content-document-and-its-associated-media-overlay-document-in-the-package-document-manifest): Entries for an EPUB content document and its associated media overlay document in the package document manifest

```
<package …>
   …
   <manifest>
      <item
          id="ch1"
          href="chapter1.xhtml"
          media-type="application/xhtml+xml"
          media-overlay="ch1_audio"/>

      <item
          id="ch1_audio"
          href="chapter1_audio.smil"
          media-type="application/smil+xml"/>
      …
   </manifest>
</package>
```

##### 9.3.5.2 Overlays package metadata

[](#sec-mo-package-metadata)

[EPUB creators](#dfn-epub-creator) _MUST_ specify the duration of the entire [EPUB publication](#dfn-epub-publication) in the [package document](#dfn-package-document) using a ``[`meta`](#dfn-meta)`` element with the [`duration` property](#duration).

In addition, EPUB creators _MUST_ provide the duration of each [media overlay document](#dfn-media-overlay-document). EPUB creators _MUST_ use the [`refines` attribute](#attrdef-refines) to associate each duration declaration to the corresponding [manifest](#dfn-epub-manifest) ``[`item`](#dfn-item)``.

The sum of the durations for each media overlay document _SHOULD_ equal the [total duration](#total-duration) plus or minus one second.

Note

Although the sum of individual durations may not exactly match the total due to rounding the times to nearest fraction of a second, a difference of greater than one second indicates a mismatch arising from other issues.

[EPUB creators](#dfn-epub-creator) _MAY_ also specify [`narrator`](#narrator) information in the package document, as well as [author-defined CSS class names](#sec-docs-assoc-style) to apply to the currently playing [EPUB content document](#dfn-epub-content-document) element.

Note

The `media:` prefix is [reserved](#sec-metadata-reserved-prefixes) for inclusion of these properties in package metadata.

[Example 73](#example-media-overlays-metadata-in-the-package-document): Media overlays metadata in the package document

```
<package …>
   <metadata …>
      …
      <meta
          property="media:duration"
          refines="#ch1_audio">
         0:32:29
      </meta>

      <meta
          property="media:duration"
          refines="#ch2_audio">
         0:34:02
      </meta>

      <meta
          property="media:duration"
          refines="#ch3_audio">
         0:29:49
      </meta>

      <meta
          property="media:duration">
         1:36:20
      </meta>

      <meta
          property="media:narrator">
         Joe Speaker
      </meta>

      <meta
          property="media:active-class">
         my-active-item
      </meta>

      <meta
          property="media:playback-active-class">
         my-document-playing
      </meta>
      …
   </metadata>
</package>
```

### 9.4 Skippability and escapability

[](#sec-behaviors-skip-escape)

#### 9.4.1 Skippability

[](#sec-skippability)

While reading, users may want to turn on or off certain features of the content, such as footnotes, page numbers, or other types of secondary content. This feature is called skippability. [Reading systems](#dfn-epub-reading-system) use the semantic information provided by media overlay elements' [`epub:type`](#sec-docs-structural-semantic) attribute to determine when to offer users the option of skippable features.

[EPUB creators](#dfn-epub-creator) _MAY_ use the following semantics to enable skippability:

*   [`footnote`](https://www.w3.org/TR/epub-ssv-11/#footnote) \[[epub-ssv-11](#bib-epub-ssv-11 "EPUB 3 Structural Semantics Vocabulary 1.1")\]
    
*   [`endnote`](https://www.w3.org/TR/epub-ssv-11/#endnote) \[[epub-ssv-11](#bib-epub-ssv-11 "EPUB 3 Structural Semantics Vocabulary 1.1")\]
    
*   [`pagebreak`](https://www.w3.org/TR/epub-ssv-11/#pagebreak) \[[epub-ssv-11](#bib-epub-ssv-11 "EPUB 3 Structural Semantics Vocabulary 1.1")\]
    

This list is non-exhaustive, however. It represents terms from the Structural Semantics Vocabulary \[[epub-ssv-11](#bib-epub-ssv-11 "EPUB 3 Structural Semantics Vocabulary 1.1")\] for which reading systems are most likely to offer the option of skippability.

[Example 74](#example-media-overlay-document-with-a-page-break): Media overlay document with a page break

In this example, a reading system could offer the user the option of turning on and off the page break/page number announcements, which are often cumbersome to listen to.

Media overlay document:

```
<smil
    xmlns="http://www.w3.org/ns/SMIL"
    xmlns:epub="http://www.idpf.org/2007/ops"
    version="3.0">
   <body>
      <!-- a paragraph -->
      <par id="id1">
         <text
             src="chapter1.xhtml#para1"/>
         <audio
             src="chapter1_audio.mp3"
             clipBegin="0:23:22.000"
             clipEnd="0:24:15.000"/>
      </par>

      <!-- a page number -->
      <par
          id="id2"
          epub:type="pagebreak">
         <text
             src="chapter1.xhtml#pgbreak1"/>
         <audio
             src="chapter1_audio.mp3"
             clipBegin="0:24:15.000"
             clipEnd="0:24:18.123"/>
      </par>

      <!-- another paragraph -->
      <par id="id3">
         <text
             src="chapter1.xhtml#para2"/>
         <audio
             src="chapter1_audio.mp3"
             clipBegin="0:24:18.123"
             clipEnd="0:25:28.530"/>
      </par>
   </body>
</smil>
```

EPUB content document:

```
<html … >
   …
   <body>
      <p id="para1">
         This is the paragraph before the page break …
      </p>

      <span
          id="pgbreak1"
          role="doc-pagebreak"
          aria-label="14"/>

      <p id="para2">
         This is the paragraph after the page break …
      </p>
   </body>
</html>
```

#### 9.4.2 Escapability

[](#sec-escapability)

Escapable items are nested structures, such as tables and lists, that users might wish to skip over, continuing to read from the point immediately after the nested structure. The escapability feature differs from the skippability feature in that it does not enable or disable entire types of items, but provides an exit from them (e.g., a user can listen to some of the content before choosing to escape).

[EPUB creators](#dfn-epub-creator) _MAY_ use the following semantics to enable escapability:

*   [`table`](https://www.w3.org/TR/epub-ssv-11/#table) \[[epub-ssv-11](#bib-epub-ssv-11 "EPUB 3 Structural Semantics Vocabulary 1.1")\]
    
*   [`list`](https://www.w3.org/TR/epub-ssv-11/#list) \[[epub-ssv-11](#bib-epub-ssv-11 "EPUB 3 Structural Semantics Vocabulary 1.1")\]
    
*   [`figure`](https://www.w3.org/TR/epub-ssv-11/#figure) \[[epub-ssv-11](#bib-epub-ssv-11 "EPUB 3 Structural Semantics Vocabulary 1.1")\]
    
*   [`aside`](https://www.w3.org/TR/epub-ssv-11/#aside) \[[epub-ssv-11](#bib-epub-ssv-11 "EPUB 3 Structural Semantics Vocabulary 1.1")\]
    

This list is non-exhaustive list, however. It represents terms from the Structural Semantics Vocabulary \[[epub-ssv-11](#bib-epub-ssv-11 "EPUB 3 Structural Semantics Vocabulary 1.1")\] for which [reading systems](#dfn-epub-reading-system) are most likely to offer the option of escapability.

Note

Sometimes escapable structures may contain escapable structures. For example, tables are composed of many rows and cells that users may want to separately escape from. Reading system support for escaping from such structures is complex and not well supported at this time. EPUB creators should avoid identifying nested escapable structures until better support is available.

[Example 75](#example-escapable-structures): Escapable structures

In this example, the [media overlay document](#dfn-media-overlay-document) for an [EPUB content document](#dfn-epub-content-document) contains a paragraph, a table, and another paragraph. A reading system that supported escapability would give the user the option to interrupt playback of the table to continue playing the next paragraph.

```
<smil
    xmlns="http://www.w3.org/ns/SMIL"
    xmlns:epub="http://www.idpf.org/2007/ops"
    version="3.0">
   <body>
      <!-- a paragraph, part of the regular document text -->
      <par id="id1">
         <text
             src="c01.xhtml#para1"/>
         <audio
             src="chapter1_audio.mp3"
             clipBegin="0:23:22.000"
             clipEnd="0:24:15.000"/>
      </par>

      <!-- a table with two nested rows -->
      <seq
          id="id2"
          epub:textref="c01.xhtml#t1"
          epub:type="table">

         <seq
             id="id3"
             epub:textref="c01.xhtml#tr1"
             epub:type="table-row">

            <par
                id="id4"
                epub:type="table-cell">
               <text
                   src="c01.xhtml#td1"/>
               <audio
                   src="chapter1_audio.mp3"
                   clipBegin="0:24:15.000"
                   clipEnd="0:24:18.123"/>
            </par>

            <par
                id="id5"
                epub:type="table-cell">
               <text
                   src="c01.xhtml#td2"/>
               <audio
                   src="chapter1_audio.mp3"
                   clipBegin="0:24:18.123"
                   clipEnd="0:25:28.530"/>
            </par>

            <par
                id="id6"
                epub:type="table-cell">
               <text
                   src="c01.xhtml#td3"/>
               <audio
                   src="chapter1_audio.mp3"
                   clipBegin="0:25:28.530"
                   clipEnd="0:25:45.515"/>
            </par>
         </seq>

         <seq
             id="id7"
             epub:textref="c01.xhtml#tr2"
             epub:type="table-row">

            <par
                id="id8"
                epub:type="table-cell">
               <text
                   src="c01.xhtml#td4"/>
               <audio
                   src="chapter1_audio.mp3"
                   clipBegin="0:25:45.515"
                   clipEnd="0:26:45.700"/>
            </par>

            <par
                id="id9"
                epub:type="table-cell">
               <text
                   src="chapter1.xhtml#td5"/>
               <audio
                   src="chapter1_audio.mp3"
                   clipBegin="0:26:45.700"
                   clipEnd="0:28:02.033"/>
            </par>

            <par
                id="id10"
                epub:type="table-cell">
               <text
                   src="chapter1.xhtml#td6"/>
               <audio
                   src="chapter1_audio.mp3"
                   clipBegin="0:28:02.033"
                   clipEnd="0:28:52.207"/>
            </par>
         </seq>
      </seq>

      <!-- another paragraph -->
      <par id="id11">
         <text
             src="c01.xhtml#para2"/>
         <audio
             src="chapter1_audio.mp3"
             clipBegin="0:28:52.207"
             clipEnd="0:30:01.000"/>
      </par>
   </body>
</smil>
```

### 9.5 Navigation document overlays

[](#sec-mo-nav-doc)

_This section is non-normative._

As the [EPUB navigation document](#dfn-epub-navigation-document) is an [XHTML content document](#dfn-xhtml-content-document), [EPUB creators](#dfn-epub-creator) may associate a [media overlay document](#dfn-media-overlay-document) with it. Unlike traditional XHTML content documents, however, [reading systems](#dfn-epub-reading-system) must present the EPUB navigation document to users even when it is not included in the [spine](#dfn-epub-spine) (see [Navigation document processing](https://www.w3.org/TR/epub-rs-33/#sec-nav) \[[epub-rs-33](#bib-epub-rs-33 "EPUB Reading Systems 3.3")\]). As a result, the method in which an associated media overlay behaves can change depending on the context:

*   When included in the spine, playback of the EPUB navigation document's media overlay document obeys the same conformance requirements as with any other XHTML content document.
    
*   When exposed in a presentation context that allows users to access and activate the links, reading systems may implement additional presentation behaviors to expose audio feedback when user access navigation links.
    

Note

Specific implementation details are beyond the scope of this specification. The [DAISY Media Overlays Playback Requirements](https://daisy.org/info-help/document-archive/archived-publications/media-overlays-playback-requirements/) document describes best practices for [EPUB creators](#dfn-epub-creator) and provides recommendations for reading system developers.

10\. Accessibility
------------------

[](#sec-accessibility)

_This section is non-normative._

EPUB 3 builds upon the Open Web Platform expressly so that it can leverage the structure, semantics and, by extension, accessibility built into its underlying technologies.

The requirements and practices for creating accessible web content have already been documented in the W3C's [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/TR/WCAG2/) \[[wcag2](#bib-wcag2 "Web Content Accessibility Guidelines (WCAG) 2")\]. These guidelines also form the basis for defining accessibility in [EPUB publications](#dfn-epub-publication).

As the current WCAG guidelines (version 2) are heavily focused on web pages, a separate specification, [EPUB Accessibility](https://www.w3.org/TR/epub-a11y-11/#) \[[epub-a11y-11](#bib-epub-a11y-11 "EPUB Accessibility 1.1")\], defines how to apply the standard to EPUB publications. It also adds EPUB-specific requirements and recommendations for metadata, pagination, and media overlays.

This specification recommends that EPUB publications [conform to the accessibility requirements](#confreq-a11y) defined in \[[epub-a11y-11](#bib-epub-a11y-11 "EPUB Accessibility 1.1")\]. A benefit of following this recommendation is that it helps to ensure that EPUB publications meet the accessibility requirements legislated in jurisdictions around the world.

[EPUB creators](#dfn-epub-creator), however, should look beyond legal imperatives and treat accessibility as a requirement for all their content. The more accessible that EPUB publications are, the greater the potential audience for them.

Note

This specification does not integrate the accessibility requirements to allow them to adapt and evolve independent of the EPUB specification — accessibility practices often need more frequent updating. The accessibility specification is also intended for use with past, present, and future versions of EPUB. The approach of a separate specification ensures that the evolution of EPUB does not lock accessibility in time (i.e., it allows producers of older versions of EPUB to reference the latest accessibility requirements).

11\. Security and privacy
-------------------------

[](#sec-security-privacy)

### 11.1 Overview

[](#security-privacy-overview)

_This section is non-normative._

The particularity of an [EPUB publication](#dfn-epub-publication) is its structure. The EPUB format provides a means of representing, packaging, and encoding structured and semantically enhanced web content — including HTML, CSS, SVG, JavaScript, and other resources — for distribution in a single-file container.

This means that EPUB 3's security and privacy issues are primarily linked to the features of those formats, and closely mirror the threats presented by web content.

Although content risks are often equated with deliberately malicious authoring intent, [EPUB creators](#dfn-epub-creator) need to be aware that many practices followed with the best of intentions may expose users to privacy and security issues. The rest of this section explores the risk model of EPUB 3 with the aim of helping EPUB creators recognize and mitigate these risks.

Note

For the risks associated with [reading systems](#dfn-epub-reading-system), refer to the [security and privacy section](https://www.w3.org/TR/epub-rs-33/#sec-security-privacy) of \[[epub-rs-33](#bib-epub-rs-33 "EPUB Reading Systems 3.3")\].

### 11.2 Threat model

[](#epub-threat-model)

_This section is non-normative._

[EPUB publications](#dfn-epub-publication) pose a variety of privacy and security threats to unsuspecting users. Many of these threats intersect with web content, but EPUB also introduces its own unique methods of attack that can be used to trick users into accessing malicious content or into providing sensitive information. Some of the more important attack vectors that [EPUB creators](#dfn-epub-creator) and users need to be aware of include:

Embedding of remote resources

EPUB 3 allows some [publication resources](#dfn-publication-resource) to be [remotely hosted](#sec-resource-locations), specifically resources whose sizes can negatively affect the downloading and opening of the EPUB publication (e.g., audio, video, and fonts). Although helpful for users when used as intended, these exemptions can also be used to inject malicious content into a publication.

This threat is not limited to accessing content created by a bad actor. If EPUB creators embed content from untrustworthy sources (e.g., third party audio and video), there is always the possibility that users may receive compromised resources.

Checking for malware and exploits at distribution time is not always reliable, either, as the malicious content can be swapped in any time after publication, unlike resources that come embedded in the [EPUB container](#dfn-epub-container).

The [origin](#sec-container-iri) of an EPUB is both unknown to the EPUB creator and specific to each reading system implementation. Consequently, if the EPUB creator hosts [remote resources](#dfn-remote-resource) on a web server they control, the server effectively cannot use security features that require specifying allowable origins, such as headers for [CORS](https://fetch.spec.whatwg.org/#cors-protocol), [`Content-Security-Policy`](https://www.w3.org/TR/CSP2/#content-security-policy-header-field), or [`X-Frame-Options`](https://www.rfc-editor.org/rfc/rfc7034).

Linking to external resources

Whether intentional or not, links to external web sites and resources expose users to potential exploits that can compromise their reading system or operating system. Although external links will typically open in a web browser, and be subject to the browser security model, this does not protect users from all exploits.

Even if the intentions of the EPUB creator are not malicious, adding tracking information to external links is problematic for user privacy as it can allow a user's activity to be tracked without their consent.

Broken-link hijacking — when a domain expires and is bought by another party to exploit the links to it — can also lead to users being taken to resources the EPUB creator did not intend.

Including malicious content

Resources embedded in the EPUB container are not immune to malicious actors, especially when EPUB publications are obtained from untrusted sources. Resources may contain exploits or forms that may submit sensitive information to unintended parties. Such actors may also try to gain access to [remote resources](#dfn-remote-resource) using file indirection techniques, such as symbolic links or file aliases.

The use of third-party content, such as games and quizzes, may also lead to security and privacy issues if the EPUB creator is not able to fully vet the content.

Allowing scripts network access

When scripts can access a device's network, it provides a variety channels to exploit the user:

*   collecting information about the user and their activities, whether malicious or not;
*   attempting to access the file system and local storage to harvest information;
*   phishing attempts (e.g., making an [EPUB content document](#dfn-epub-content-document) appear like a trusted web site to get the user to submit login information); and
*   injecting malicious content from external sites into the EPUB publication.

Network access may allow third-party content to exploit the user even if it was not the EPUB creator's intent.

Securing content with digital rights management

The encryption and decryption of EPUB publications using digital rights management schemes may allow personally identifiable information about the user, what vendors they use, and their reading choices to be relayed to third parties.

The effectiveness of these attacks also often depends on tricking users into believing that the publication they are interacting with is from a trustworthy source. These deceptions can take the following forms:

Falsified publication information

The EPUB publication may include false information about itself to trick users into believing that it comes from a legitimate source. A malicious EPUB creator might, for example, fake the title, authors, identifiers, and publisher for the work.

Although this misinformation itself does not present an immediate harm, it could lead users to trust malicious forms, links, and other content within the EPUB publication believing it comes from a reliable source.

Spoofed platforms

Malicious EPUB creators may also design their content to imitate or replicate a platform's experience to trick users into trusting their content.

#### 11.2.1 EPUB-specific features

[](#privacy-security-epub-features)

EPUB 3 tries to avoid extending the underlying technologies it builds on, but it has introduced some new features. The restricted scope of these features limits the threats they might pose, however:

*   [Content switching](#sec-xhtml-content-switch) and [multimedia control elements](#sec-xhtml-epub-trigger) only allow hiding of content and script-less control of playback in HTML. Moreover, these features, introduced in the first release of EPUB 3.0, are [deprecated](#deprecated) and no longer recommended for use.
    
*   The [expression of structural semantics](#sec-epub-type-attribute) in HTML and SVG only allows the annotation of elements.
    

The one potential exception is the [`epubReadingSystem` object](https://www.w3.org/TR/epub-rs-33/#app-epubReadingSystem) \[[epub-rs-33](#bib-epub-rs-33 "EPUB Reading Systems 3.3")\] that allows [EPUB creators](#dfn-epub-creator) to query information about the current [reading system](#dfn-epub-reading-system). EPUB creators need to be mindful that they only use the information exposed by this object to improve the rendering of their content (i.e., avoid using the information to profile the user and their environment).

### 11.3 Recommendations

[](#security-privacy-recommendations)

Although [EPUB creators](#dfn-epub-creator) cannot prevent every method of exploiting users, they are ultimately responsible for the secure construction of their content. That means that they need to take precautions to limit the exposure of their [EPUB publications](#dfn-epub-publication) to the types of [malicious exploits](#epub-threat-model) described in the previous section.

Some practical steps include:

*   Ensuring the use of stable links to [remote resources](#dfn-remote-resource).
*   Avoiding third-party resources, especially those hosted on servers outside the control of the EPUB creator.
*   Avoiding links to untrustworthy web sites (e.g., that browsers do not recognize as safe).
*   Using secure connections to external sites and resources (i.e., using the HTTPS protocol).
*   Not using scripts to send or receive data over the network without the consent of the user.
*   Obtaining user consent for the use of Web APIs with privacy implications, such as [Geolocation](https://www.w3.org/TR/geolocation/) \[[geolocation](#bib-geolocation "Geolocation")\] and [Push Notifications](https://www.w3.org/TR/push-api/) \[[push-api](#bib-push-api "Push API")\].
*   Avoiding embedding content not provided by reputable organizations or individuals.
*   Avoiding deprecated features of EPUB due to the potential for undiscovered bugs in implementations.

EPUB creators also need to consider the privacy rights of users and avoid situations where they are intentionally collecting data. Ideally, EPUB creators _SHOULD NOT_ track their users, but this is not realistic for all types of publishing.

When EPUB creators have to track users, they _SHOULD_ obtain the approval of the user to collect information prior to opening the EPUB publication (e.g., in educational course work). If this is not possible, they _SHOULD_ obtain permission when users access the EPUB publication for the first time. EPUB creators _SHOULD_ also allow users to opt out of tracking, and provide users the ability to manage and delete any data that is collected about them.

EPUB creators also need to consider the inadvertent collection of information about users. Linking to content on a publisher's web site, or remotely hosting resources on their servers, can lead to profiling users, especially if unique tracking identifiers are added to the URLs.

When collecting and storing user information within an EPUB publication (e.g., through the use of [cookies](https://html.spec.whatwg.org/multipage/#dom-document-cookie) and [web storage](https://html.spec.whatwg.org/multipage/#webstorage) \[[html](#bib-html "HTML Standard")\]), EPUB creators need to consider to potential for data theft by other EPUB publications on a [reading system](#dfn-epub-reading-system). Although \[[epub-rs-33](#bib-epub-rs-33 "EPUB Reading Systems 3.3")\] introduces a [unique origin requirement](https://www.w3.org/TR/epub-rs-33/#sec-container-iri) for EPUB publications, which limits the potential for attacks, there is still a risk that reading systems will allow EPUB publications access to shared persistent storage (e.g., older reading systems that have not been updated and non-conforming newer reading systems). Consequently, EPUB creators _SHOULD NOT_ store sensitive user data in persistent storage. If EPUB creators must store sensitive data, they _SHOULD_ encrypt the data to prevent trivial access to it in the case of an exploit.

When publishers and vendors must use digital rights management schemes, they should prefer schemes that do not utilize or transmit information about the user or their content to external parties to perform encryption or decryption.

To maximally reduce security and privacy risks, EPUB creators _SHOULD_ produce their EPUB publications with the goal of long-term preservation. EPUB publications created this way are normally self-contained, not dependent on network access, and not encrypted with digital rights management, removing many of the possible attack vectors. \[[iso22424](#bib-iso22424 "ISO/IEC TS 22424-1:2020 — Digital publishing — EPUB3 preservation")\] is an example of such a preservation format for EPUB publications. While it is understood that not all EPUB creators can achieve these levels of self-containment, following as many of these practices as possible will still benefit overall user privacy and security.

A. Unsupported features
-----------------------

[](#app-unsupported)

This specification contains certain features that are not yet fully supported in [reading systems](#dfn-epub-reading-system), that the Working Group no longer recommends for use, or that are only retained for interoperability with EPUB 2 reading systems. This section defines the meanings of the designations attached to these features and their support expectations.

### A.1 Under-implemented features

[](#under-implemented)

A **under-implemented** feature is a feature introduced prior to EPUB 3.3 for which the Working Group has not been able to establish enough [implementation experience](https://www.w3.org/policies/process/#adequate-implementation).

These features are considered important to retain despite this limitation because they are known to be implemented by [EPUB creators](#dfn-epub-creator) (i.e., their deprecation would invalidate existing content) and/or they are integral to the content model on which EPUB is built.

If this specification designates a feature as under-implemented, EPUB creators _MAY_ use the features as described.

Note

[EPUB conformance checkers](#dfn-epub-conformance-checker) should alert EPUB creators to the presence of under-implemented features when encountered in EPUB publications but must not treat their inclusion as a violation of the standard (i.e., not emit errors or warnings).

Caution

Whether under-implemented labels are removed or replaced by deprecation in a future version of the standard cannot be determined at this time. EPUB creators should strongly consider the interoperability problems that may arise both now and in the future when using these features.

Note

The marking of features as under-implemented is a one-time event to account for the different process under which EPUB was developed prior to being brought into W3C. This label will not be used for new features developed under W3C processes.

### A.2 Deprecated features

[](#deprecated)

A **deprecated** feature is one the Working Group no longer recommends for use in this version of the specification. Deprecated features typically have limited or no support in [reading systems](#dfn-epub-reading-system) and/or usage in [EPUB publications](#dfn-epub-publication).

If this specification designates a feature as deprecated, [EPUB creators](#dfn-epub-creator) _SHOULD NOT_ use the feature in their EPUB publications.

Note

[EPUB conformance checkers](#dfn-epub-conformance-checker) should alert EPUB creators to the presence of deprecated features when encountered in EPUB publications.

B. Allowed external identifiers
-------------------------------

[](#app-identifiers-allowed)

The following table lists the [public](https://www.w3.org/TR/xml/#dt-pubid) and [system identifiers](https://www.w3.org/TR/xml/#dt-sysid) \[[xml](#bib-xml "Extensible Markup Language (XML) 1.0 (Fifth Edition)")\] allowed in [document type declarations](https://www.w3.org/TR/xml/#dt-doctype). \[[xml](#bib-xml "Extensible Markup Language (XML) 1.0 (Fifth Edition)")\]

[EPUB creators](#dfn-epub-creator) _MAY_ use these external identifiers only in [publication resources](#dfn-publication-resource) with the listed media types \[[rfc2046](#bib-rfc2046 "Multipurpose Internet Mail Extensions (MIME) Part Two: Media Types")\] specified in their [manifest](#dfn-epub-manifest) declarations. (Refer to [3.9 XML conformance](#sec-xml-constraints) for more information.)

| Media Type(s) | Public Identifier | System Identifier |
| --- | --- | --- |
| 
*   `application/mathml+xml`
*   `application/mathml-presentation+xml`
*   `application/mathml-content+xml`

 | `-//W3C//DTD MathML 3.0//EN` | `http://www.w3.org/Math/DTD/mathml3/mathml3.dtd` |
| `application/x-dtbncx+xml` | `-//NISO//DTD ncx 2005-1//EN` | `http://www.daisy.org/z3986/2005/ncx-2005-1.dtd` |
| `image/svg+xml` | `-//W3C//DTD SVG 1.1//EN` | `http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd` |

C. Expressing structural semantics
----------------------------------

[](#app-structural-semantics)

### C.1 Introduction

[](#sec-structural-semantics-intro)

_This section is non-normative._

Structural semantics add additional meaning about the specific structural purpose an element plays. The ``[`epub:type`](#dfn-epub-type)`` attribute is used to express domain-specific semantics in [EPUB content documents](#dfn-epub-content-document) and [media overlay documents](#dfn-media-overlay-document), with the structural information it carries complementing the underlying vocabulary.

The applied semantics refine the meaning of their containing elements without changing their nature for assistive technologies, as happens when using the similar `[role](https://html.spec.whatwg.org/multipage/infrastructure.html#attr-aria-role)` attribute \[[html](#bib-html "HTML Standard")\]. The attribute does not enhance the accessibility of the content, in other words; it only provides hints about the purpose.

Semantic metadata enriches content for use in publishing workflows and for author-defined purposes. It also allows [reading systems](#dfn-epub-reading-system) to learn more about the structure and content of a document (e.g., to enable [skippability and escapability](#sec-behaviors-skip-escape) in media overlays).

This specification defines a method for adding structural semantics using _the attribute axis_: instead of adding new elements, [EPUB creators](#dfn-epub-creator) can append the `epub:type` attribute to existing elements to add the desired semantics.

### C.2 The `epub:type` attribute

[](#sec-epub-type-attribute)

Attribute Name:

`epub:type`

Namespace:

`http://www.idpf.org/2007/ops`

Usage:

Refer to the requirements for [XHTML](#sec-xhtml-structural-semantics), [SVG](#confreq-svg-structural-semantics), and [media overlays](#sec-overlays-def).

Value:

A whitespace-separated list of [property](#sec-property-datatype) values, with restrictions as defined in [D.1 Vocabulary association mechanisms](#sec-vocab-assoc).

Whitespace is the set of characters as defined in \[[xml](#bib-xml "Extensible Markup Language (XML) 1.0 (Fifth Edition)")\].

Caution

Although the `epub:type` attribute is similar in nature to the `[role](https://html.spec.whatwg.org/multipage/infrastructure.html#attr-aria-role)` attribute \[[html](#bib-html "HTML Standard")\], the attributes serve different purposes. The values of the `epub:type` attribute do not enhance access through assistive technologies like screen readers as they do not map to the accessibility APIs used by these technologies. This means that adding `epub:type` values to semantically neutral elements like \[[html](#bib-html "HTML Standard")\] `[div](https://html.spec.whatwg.org/multipage/grouping-content.html#the-div-element)` and `[span](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-span-element)` does not make them any more accessible to assistive technologies. Only ARIA roles influence how assistive technologies understand such elements.

The `epub:type` attribute is consequently only intended for publishing semantics and [reading system](#dfn-epub-reading-system) enhancements. Reading systems may use `epub:type` values to provide accessibility enhancements like built-in read aloud or media overlays functionality where interaction with assistive technologies is not essential.

Refer to [Digital Publishing WAI-ARIA Module](https://www.w3.org/TR/dpub-aria/) \[[dpub-aria](#bib-dpub-aria "Digital Publishing WAI-ARIA Module")\] for more information about accessible publishing roles.

The `epub:type` attribute inflects semantics on the element on which it appears. Its value is one or more whitespace-separated terms stemming from external vocabularies associated with the document instance.

The [default vocabulary](#sec-default-vocab) for the `epub:type` attribute is the EPUB 3 Structural Semantics Vocabulary \[[epub-ssv-11](#bib-epub-ssv-11 "EPUB 3 Structural Semantics Vocabulary 1.1")\]. EPUB creators _MAY_ include unprefixed terms that are not part of this vocabulary, but the preferred method for adding custom semantics is to use [prefixes](#sec-prefix-attr) for them. Refer to [D.1 Vocabulary association mechanisms](#sec-vocab-assoc) for more information.

[Example 76](#ex.epubtype.note): Identifying a preamble

```
<html
    …
    xmlns:epub="http://www.idpf.org/2007/ops">
   …
   <body>
      …
      <section epub:type="preamble">
         …
      </section>
      …
   </body>
</html>
```

[Example 77](#ex.epubtype.gloss): Identifying a glossary

```
<html
    …
    xmlns:epub="http://www.idpf.org/2007/ops">
   …
   <body>
      …
      <dl epub:type="glossary">
         …
      </dl>
      …
   </body>
</html>
```

[Example 78](#ex.epubtype.pg): Adding page break semantics

```
<html
    …
    xmlns:epub="http://www.idpf.org/2007/ops">
   …
   <body>
      …
      <p>
         …
         <span
            epub:type="pagebreak"
            id="p234"
            role="doc-pagebreak"
            aria-label="234"/>
         …
      </p>
      …
   </body>
</html>
```

D. Vocabularies
---------------

[](#app-vocabs)

This appendix defines a general set of mechanisms by which attributes in this specification can reference terms from vocabularies. It also defines EPUB-specific vocabularies for use with the attributes.

### D.1 Vocabulary association mechanisms

[](#sec-vocab-assoc)

#### D.1.1 Introduction

[](#sec-vocab-assoc-intro)

_This section is non-normative._

EPUB defines a formal method of referencing terms and properties defined in metadata and semantic vocabularies using the [property data type](#sec-property-datatype). The `epub:type` attribute uses this data type in [EPUB content documents](#dfn-epub-content-document) and [media overlay documents](#dfn-media-overlay-document) to add [structural semantics](#app-structural-semantics), for example, while the `property` and `rel` attributes use the data type to define properties and relationships in the [package document](#dfn-package-document).

A property value is like a CURIE \[[rdfa-core](#bib-rdfa-core "RDFa Core 1.1 - Third Edition")\] — it represents a URL \[[url](#bib-url "URL Standard")\] in compact form. The expression consists of a prefix and a reference, where the prefix — whether literal or implied — is a shorthand mapping of a URL that typically resolves to a term vocabulary. When a [reading system](#dfn-epub-reading-system) converts the prefix to its URL representation and combines with the reference, the resulting URL normally resolves to a fragment within that vocabulary that contains human- and/or machine-readable information about the term.

To reduce the complexity for authoring, each attribute that takes a property data type also defines a [default vocabulary](#sec-default-vocab). Terms and properties referenced from the default vocabularies do not include a prefix as the mapping reading systems use to map to a URL is predefined.

The power of the property data type lies in its easy extensibility. To incorporate new terms and properties, [EPUB creators](#dfn-epub-creator) only need to declare a [prefix](#sec-prefix-attr). In another authoring convenience, this specification also [reserves prefixes](#sec-metadata-reserved-prefixes) for many commonly used publishing vocabularies (i.e., their declaration is optional).

The following sections provide additional details on the property data type and vocabulary association mechanism.

#### D.1.2 The property data type

[](#sec-property-datatype)

The property data type is a compact means of expressing a URL \[[url](#bib-url "URL Standard")\] and consists of an _OPTIONAL_ prefix separated from a reference by a colon.

<table class="productionset"><caption>(EBNF productions <a href="https://www.iso.org/standard/26153.html">ISO/IEC 14977</a>)<br>All terminal symbols are in the Unicode Block 'Basic Latin' (U+0000 to U+007F).</caption><tbody><tr><td id="property.ebnf.property"><a href="#property.ebnf.property">property</a></td><td><code>=</code></td><td>[ <a href="#property.ebnf.prefix">prefix</a> , ":" ] , <a href="#property.ebnf.reference">reference</a>;</td><td>&nbsp;</td></tr><tr><td id="property.ebnf.prefix"><a href="#property.ebnf.prefix">prefix</a></td><td><code>=</code></td><td>? xsd:NCName ? ;</td><td>&nbsp;</td></tr><tr><td id="property.ebnf.reference"><a href="#property.ebnf.reference">reference</a></td><td><code>=</code></td><td>? <a data-link-type="dfn" href="https://url.spec.whatwg.org/#path-relative-scheme-less-url-string" id="ref-for-index-term-path-relative-scheme-less-url-string-9">path-relative-scheme-less-URL string</a> [<cite><a class="bibref" data-link-type="biblio" href="#bib-url" title="URL Standard">url</a></cite>] ? ;</td><td>/*&nbsp;as defined in [<cite><a class="bibref" data-link-type="biblio" href="#bib-url" title="URL Standard">url</a></cite>]&nbsp;*/<br></td></tr></tbody></table>

This specification derives the property data type from the CURIE data type defined in \[[rdfa-core](#bib-rdfa-core "RDFa Core 1.1 - Third Edition")\]. A property represents a subset of CURIEs.

There are two key differences from CURIEs, however:

*   an empty reference does not represent a valid property value even though it is valid to the definition above (i.e., a property value that only consists of a prefix and colon is invalid).
    
*   an empty string does not represent a valid property even though it is valid to the definition above.
    

[Example 79](#example-expanding-a-metadata-property-value): Expanding a metadata property value

In this example, the property value is composed of the prefix `dcterms` and the reference `modified`.

```
<meta property="dcterms:modified">2011-01-01T12:00:00Z</meta>
```

After [processing](https://www.w3.org/TR/epub-rs-33/#sec-property-values) \[[epub-rs-33](#bib-epub-rs-33 "EPUB Reading Systems 3.3")\], this property would expand to the following URL:

```
http://purl.org/dc/terms/modified
```

as the `dcterms:` prefix is a [reserved prefix](#sec-metadata-reserved-prefixes) that maps to the URL "`http://purl.org/dc/terms/`".

When an [EPUB creator](#dfn-epub-creator) omits a prefix from a property value, the expressed reference represents a term from the [default vocabulary](#sec-default-vocab) for that attribute.

[Example 80](#example-expanding-a-manifest-property-value): Expanding a manifest property value

In this example, the [`mathml` property](#mathml) is specified on a manifest ``[`item`](#dfn-item)`` element:

```
<item … properties="mathml"/>
```

This property expands to:

```
http://idpf.org/epub/vocab/package/item/#mathml
```

when the prefix URL for the vocabulary is concatenated with the reference.

#### D.1.3 Default vocabularies

[](#sec-default-vocab)

A default vocabulary is one that [EPUB creators](#dfn-epub-creator) do not have to declare a [prefix](#sec-prefix-attr) for in order to use its terms and properties where a [property value](#sec-property-datatype) is expected. EPUB creators _MUST NOT_ add a prefix to terms and properties from a default vocabulary.

EPUB creators _MUST NOT_ assign a prefix to the URLs associated with these vocabularies using the [`prefix`](#sec-prefix-attr) attribute.

Note

Refer to the definition of each attribute that takes a [property data type](#sec-property-datatype) for more information about its default vocabulary.

#### D.1.4 The `prefix` attribute

[](#sec-prefix-attr)

The `prefix` attribute defines prefix mappings for use in [property values](#sec-property-datatype).

The value of the `prefix` attribute is a whitespace-separated list of one or more prefix-to-URL mappings of the form:

<table class="productionset"><caption>(EBNF productions <a href="https://www.iso.org/standard/26153.html">ISO/IEC 14977</a>)<br>All terminal symbols are in the Unicode Block 'Basic Latin' (U+0000 to U+007F).</caption><tbody><tr><td id="prefix.ebnf.def"><a href="#prefix.ebnf.def">prefixes</a></td><td><code>=</code></td><td><a href="#prefix.ebnf.mapping">mapping</a> , { <a href="#prefix.ebnf.whitespace">whitespace</a>, { <a href="#prefix.ebnf.space">whitespace</a> } , <a href="#prefix.ebnf.mapping">mapping</a> } ;</td><td>&nbsp;</td></tr><tr><td id="prefix.ebnf.mapping"><a href="#prefix.ebnf.mapping">mapping</a></td><td><code>=</code></td><td><a href="#prefix.ebnf.prefix">prefix</a> , ":" , <a href="#prefix.ebnf.space">space</a> , { <a href="#prefix.ebnf.space">space</a> } , ? xsd:anyURI ? ;</td><td>&nbsp;</td></tr><tr><td id="prefix.ebnf.prefix"><a href="#prefix.ebnf.prefix">prefix</a></td><td><code>=</code></td><td>? xsd:NCName ? ;</td><td>&nbsp;</td></tr><tr><td id="prefix.ebnf.space"><a href="#prefix.ebnf.space">space</a></td><td><code>=</code></td><td>#x20 ;</td><td>&nbsp;</td></tr><tr><td id="prefix.ebnf.whitespace"><a href="#prefix.ebnf.whitespace">whitespace</a></td><td><code>=</code></td><td>(#x20 | #x9 | #xD | #xA) ;</td><td>&nbsp;</td></tr></tbody></table>

With the exception of [reserved prefixes](#sec-reserved-prefixes), [EPUB creators](#dfn-epub-creator) _MUST_ declare all prefixes used in a document. [EPUB creators](#dfn-epub-creator) _MUST_ only specify the `prefix` attribute on the [root element](https://www.w3.org/TR/xml/#dt-root) \[[xml](#bib-xml "Extensible Markup Language (XML) 1.0 (Fifth Edition)")\] of the respective format.

The attribute is not namespaced when used in the [package document](#dfn-package-document).

[Example 81](#example-declaring-prefixes-in-the-package-document): Declaring prefixes in the package document

In this example, the EPUB creator declares prefixes for the Friend of a Friend (`foaf`) and DBPedia (`dbp`) vocabularies.

```
<package
    …
    prefix="foaf: http://xmlns.com/foaf/spec/
            dbp: http://dbpedia.org/ontology/">
   …
</package>
```

EPUB creators _MUST_ declare the attribute in the namespace `http://www.idpf.org/2007/ops` in [EPUB content documents](#dfn-epub-content-document) and [media overlay documents](#dfn-media-overlay-document).

[Example 82](#example-declaring-prefixes-in-an-xhtml-content-document): Declaring prefixes in an XHTML content document

In this example, the EPUB creator declares a prefix for the Z39.98 Structural Semantics Vocabulary.

```
<html …
      xmlns:epub="http://www.idpf.org/2007/ops"
      epub:prefix="z3998: https://www.daisy.org/z3998/2012/vocab/structure/">
   …
</html>
```

Note

Although the `prefix` attribute is modeled on the identically named `prefix` attribute in \[[rdfa-core](#bib-rdfa-core "RDFa Core 1.1 - Third Edition")\], EPUB creators cannot use the attributes interchangeably. The `prefix` attribute without a namespace in EPUB content documents is the RDFa attribute.

It is common for both attributes to appear in EPUB content documents that also specify RDFa expressions.

```
<html … prefix="…"
        xmlns:epub="http://www.idpf.org/2007/ops"
        epub:prefix="…">   …
</html>
```

Note that for [SVG embedded by inclusion](#sec-xhtml-svg-inclusion), prefixes _MUST_ be declared on the \[[html](#bib-html "HTML Standard")\] root `[html](https://html.spec.whatwg.org/multipage/semantics.html#the-html-element)` element.

To avoid conflicts, EPUB creators _MUST NOT_ use the `prefix` attribute to declare a prefix that maps to a [default vocabulary](#sec-default-vocab).

EPUB creators _MUST NOT_ declare the prefix '\_' as this specification reserves this prefix for future compatibility with RDFa \[[rdfa-core](#bib-rdfa-core "RDFa Core 1.1 - Third Edition")\] processing.

For future compatibility with alternative serializations of the package document, EPUB creators _MUST NOT_ declare a prefix for the Dublin Core _/elements/1.1/_ namespace \[[dcterms](#bib-dcterms "DCMI Metadata Terms")\]. [EPUB creators](#dfn-epub-creator) _MUST_ use only the \[[dcterms](#bib-dcterms "DCMI Metadata Terms")\] elements [allowed in the package document metadata](#sec-pkg-metadata).

#### D.1.5 Reserved prefixes

[](#sec-reserved-prefixes)

Caution

Although reserved prefixes are an authoring convenience, [EPUB creators](#dfn-epub-creator) should avoid relying on them as they may cause interoperability issues. [EPUB conformance checkers](#dfn-epub-conformance-checker) will often reject new prefixes until their developers update the tools to the latest version of the specification, for example. EPUB creators should declare all prefixes they use to avoid such issues.

[EPUB creators](#dfn-epub-creator) _MAY_ use reserved prefixes in attributes that expect a [property value](#sec-property-datatype) without declaring them in a [`prefix` attribute](#sec-prefix-attr).

EPUB creators _SHOULD NOT_ override reserved prefixes in the [`prefix` attribute](#sec-prefix-attr).

The reserved prefixes an EPUB creators can use depends on the context:

Package document

EPUB creators _MAY_ use the following prefixes in [package document](#dfn-package-document) attributes without having to declare them.

| Prefix | URL |
| --- | --- |
| a11y | http://www.idpf.org/epub/vocab/package/a11y/# |
| dcterms | http://purl.org/dc/terms/ |
| marc | http://id.loc.gov/vocabulary/ |
| media | http://www.idpf.org/epub/vocab/overlays/# |
| onix | http://www.editeur.org/ONIX/book/codelists/current.html# |
| rendition | http://www.idpf.org/vocab/rendition/# |
| schema | http://schema.org/ |
| xsd | http://www.w3.org/2001/XMLSchema# |

Structural Semantics

EPUB creators _MAY_ use the following reserved prefixes in the [`epub:type` attribute](#app-structural-semantics) without having to declare them.

| Prefix | URL |
| --- | --- |
| msv | http://www.idpf.org/epub/vocab/structure/magazine/# |
| prism | http://www.prismstandard.org/specifications/3.0/PRISM\_CV\_Spec\_3.0.htm# |

### D.2 Property field definitions

[](#sec-property-field-definitions)

The fields in the vocabulary definition tables have the following implicit requirements:

Allowed Values

Specifies the _REQUIRED_ type of value using \[[xmlschema-2](#bib-xmlschema-2 "XML Schema Part 2: Datatypes Second Edition")\] datatypes.

Applies To

Specifies which publication resource type(s) [EPUB creators](#dfn-epub-creator) _MAY_ specify the property on.

This field appears for properties used in the [`properties` attribute](#attrdef-properties).

Cardinality

Specifies the number of times EPUB creators _MAY_ specify the property, whether globally or attached to another element or property.

Properties with a minimum cardinality of one _MUST_ be specified.

Description

Describes the purpose of the property and specifies any additional usage requirements that EPUB creators must follow.

Example

Provides non-normative usage examples.

Extends

Identifies what EPUB creators _MAY_ associate the property with.

This field appears for properties that define [primary expressions and subexpressions](#meta-expr-types) and [relationships](#attrdef-link-rel).

Name

Specifies the name of the property as it _MUST_ appear in the metadata.

### D.3 Meta properties vocabulary

[](#app-meta-property-vocab)

The properties in this vocabulary are usable in the ``[`meta`](#dfn-meta)`` element's `property` attribute.

Unless indicated otherwise in its "Extends" field, the properties defined in this section are used to define [subexpressions](#subexpression): in other words, a ``[`meta`](#dfn-meta)`` element carrying a property defined in this section _MUST_ have a `[refines](#attrdef-refines)` attribute referencing a resource or expression being augmented.

The prefix URL for [referencing these properties](#sec-default-vocab) is `http://idpf.org/epub/vocab/package/meta/#`.

#### D.3.1 alternate-script

[](#sec-alternate-script)

<table class="tabledef" id="alternate-script"><tbody><tr><th>Name:</th><td><code>alternate-script</code></td></tr><tr><th>Description:</th><td><p>The <code>alternate-script</code> property provides an alternate expression of the associated property value in a different language and/or script. The language tags of the alternate-script property and its associated property&nbsp;— as expressed by their respective in-scope xml:lang attributes&nbsp;— <em class="rfc2119">MUST NOT</em> be the same.</p><p>This property is typically attached to <code>creator</code> and <code>title</code> properties for internationalization purposes.</p></td></tr><tr><th>Allowed value(s):</th><td><code>xsd:string</code></td></tr><tr><th>Cardinality:</th><td><code>zero or more</code></td></tr><tr><th>Extends:</th><td>All properties.</td></tr></tbody></table>

[Example 83](#example-author-name-expressed-in-english-and-japanese): Author name expressed in English and Japanese

```
<metadata …>
   …
   <dc:creator id="creator">
      Haruki Murakami
   </dc:creator>
   <meta
       refines="#creator"
       property="alternate-script"
       xml:lang="ja">
      村上春樹
   </meta>
   …
</metadata>
```

#### D.3.2 authority

[](#sec-authority)

<table class="tabledef" id="authority"><tbody><tr><th>Name:</th><td><code>authority</code></td></tr><tr><th>Description:</th><td><p>The <code>authority</code> property identifies the system or scheme the referenced element's value is drawn from.</p></td></tr><tr><th>Allowed value(s):</th><td><code>xsd:string</code><div class="note" role="note" id="issue-container-generatedID-100"><div role="heading" class="note-title marker" id="h-note-104" aria-level="5"><span>Note</span></div><div class=""><p>The former <abbr title="International Digital Publishing Forum">IDPF</abbr> EPUB 3 Working Group maintained a <a href="https://idpf.github.io/epub-registries/authorities/">registry of subject authorities</a> for use with this property. This Working Group no longer maintains the registry.</p></div></div></td></tr><tr><th>Cardinality:</th><td><code>zero or one</code></td></tr><tr><th>Extends:</th><td><code><a data-link-type="element" href="#dfn-dc-subject" class="internalDFN" id="ref-for-dfn-dc-subject-1"><code>dc:subject</code></a></code></td></tr></tbody></table>

[Example 84](#example-expressing-a-bisac-subject-heading): Expressing A BISAC subject heading

```
<metadata …>
   …
   <dc:subject
      id="subject01">
     FICTION / Occult &amp; Supernatural
   </dc:subject>
   <meta
       refines="#subject01"
       property="authority">
      BISAC
   </meta>
   …
</metadata>
```

#### D.3.3 belongs-to-collection

[](#sec-belongs-to-collection)

<table class="tabledef" id="belongs-to-collection"><tbody><tr><th>Name:</th><td><code>belongs-to-collection</code></td></tr><tr><th>Description:</th><td><p>The <code>belongs-to-collection</code> property identifies the name of a collection to which the <a data-link-type="dfn|abstract-op" href="#dfn-epub-publication" class="internalDFN" id="ref-for-dfn-epub-publication-74">EPUB publication</a> belongs. An EPUB publication <em class="rfc2119">MAY</em> belong to one or more collections.</p><p>It is also possible to chain these properties using the <a href="#attrdef-refines"><code>refines</code> attribute</a> to indicate that one collection is itself a member of another collection.</p><p>To allow <a data-link-type="dfn|abstract-op" href="#dfn-epub-reading-system" class="internalDFN" id="ref-for-dfn-epub-reading-system-86">reading systems</a> to organize collections and avoid naming collisions (e.g., unrelated collections might share a similar name, or different editions of a collection could be released), <a data-link-type="dfn|abstract-op" href="#dfn-epub-creator" class="internalDFN" id="ref-for-dfn-epub-creator-139">EPUB creators</a> <em class="rfc2119">SHOULD</em> provide an identifier that uniquely identifies the instance of the collection. The <code>dcterms:identifier</code> property must carry this identifier.</p><p>The collection <em class="rfc2119">MAY</em> more precisely define its nature by attaching a <a href="#collection-type"><code>collection-type</code></a> property.</p><p>The position of the EPUB publication within the collection <em class="rfc2119">MAY</em> be provided by attaching a <a href="#group-position"><code>group-position</code> property</a>.</p></td></tr><tr><th>Allowed value(s):</th><td><code>xsd:string</code></td></tr><tr><th>Cardinality:</th><td><code>zero or more</code></td></tr><tr><th>Extends:</th><td>Applies to the EPUB publication and can refine other instances of itself.</td></tr></tbody></table>

[Example 85](#example-indicating-a-publication-belongs-to-a-set): Indicating a publication belongs to a set

In this example, the publication belongs to the Harry Potter set of books.

```
<metadata>
   …
   <meta
       property="belongs-to-collection"
       id="c02">
      Harry Potter
   </meta>
   <meta
       refines="#c02"
       property="collection-type">
      set
   </meta>
   …
</metadata>
```

#### D.3.4 collection-type

[](#sec-collection-type)

<table class="tabledef" id="collection-type"><tbody><tr><th>Name:</th><td><code>collection-type</code></td></tr><tr><th>Description:</th><td><p>The <code>collection-type</code> property indicates the form or nature of a collection.</p><p>When the <code>collection-type</code> value is drawn from a code list or other formal enumeration, <a data-link-type="dfn|abstract-op" href="#dfn-epub-creator" class="internalDFN" id="ref-for-dfn-epub-creator-140">EPUB creators</a> <em class="rfc2119">SHOULD</em> attach a <a href="#attrdef-scheme"><code>scheme</code> attribute</a> to identify its source.</p><p>This specification also defines the following collection types when no scheme is specified:</p><dl><dt><code>series</code></dt><dd><p>A sequence of related works that are formally identified as a group, typically open-ended with works issued individually over time.</p></dd><dt><code>set</code></dt><dd><p>A finite collection of works that together constitute a single intellectual unit, typically issued together and able to be sold as a unit.</p></dd></dl><div class="note" role="note" id="issue-container-generatedID-101"><div role="heading" class="note-title marker" id="h-note-105" aria-level="5"><span>Note</span></div><div class=""><p>Although <a data-link-type="dfn|abstract-op" href="#dfn-epub-reading-system" class="internalDFN" id="ref-for-dfn-epub-reading-system-87">reading systems</a> are not required to support these values, specifying them provides the option to group related <a data-link-type="dfn|abstract-op" href="#dfn-epub-publication" class="internalDFN" id="ref-for-dfn-epub-publication-75">EPUB publications</a> in more meaningful ways.</p></div></div></td></tr><tr><th>Allowed value(s):</th><td><code>xsd:string</code></td></tr><tr><th>Cardinality:</th><td><code>zero or one</code></td></tr><tr><th>Extends:</th><td><a href="#belongs-to-collection"><code>belongs-to-collection</code></a></td></tr></tbody></table>

[Example 86](#example-identifying-a-publication-belongs-to-a-series): Identifying a publication belongs to a series

In this example, the publication belongs to the series The New French Cuisine Masters.

```
<metadata …>
   …
   <meta
       property="belongs-to-collection"
       id="c01">
      The New French Cuisine Masters
   </meta>
   <meta
       refines="#c01"
       property="collection-type">
      series
   </meta>
   …
</metadata>
```

#### D.3.5 display-seq

[](#sec-display-seq)

<table class="tabledef" id="display-seq"><tbody><tr><th>Name:</th><td><code>display-seq</code></td></tr><tr><th>Description:</th><td><p>The <code>display-seq</code> property indicates the numeric position in which to display the current property relative to identical metadata properties.</p><p>This property only applies where precedence rules have not already been defined (e.g., precedence is given to <a href="#sec-opf-dccreator">creators</a> based on their appearance in document order).</p></td></tr><tr><th>Allowed value(s):</th><td><code>xsd:unsignedInt</code></td></tr><tr><th>Cardinality:</th><td><code>zero or one</code></td></tr><tr><th>Extends:</th><td>All properties.</td></tr></tbody></table>

#### D.3.6 file-as

[](#sec-file-as)

<table class="tabledef" id="file-as"><tbody><tr><th>Name:</th><td><code>file-as</code></td></tr><tr><th>Description:</th><td>The <code>file-as</code> property provides the normalized form of the associated property for sorting.</td></tr><tr><th>Allowed value(s):</th><td><code>xsd:string</code></td></tr><tr><th>Cardinality:</th><td><code>zero or one</code></td></tr><tr><th>Extends:</th><td>All properties.</td></tr></tbody></table>

[Example 87](#example-expressing-an-author-name-for-sorting): Expressing an author name for sorting

```
<metadata …>
   …
   <dc:creator
       id="creator01">
      Lewis Carroll
   </dc:creator>
   <meta
       refines="#creator01"
       property="file-as">
      Carroll, Lewis
   </meta>
   …
</metadata>
```

#### D.3.7 group-position

[](#sec-group-position)

<table class="tabledef" id="group-position"><tbody><tr><th>Name:</th><td><code>group-position</code></td></tr><tr><th>Description:</th><td><p>The <code>group-position</code> property indicates the numeric position in which the <a data-link-type="dfn|abstract-op" href="#dfn-epub-publication" class="internalDFN" id="ref-for-dfn-epub-publication-76">EPUB publication</a> is ordered relative to other works belonging to the same group (whether all EPUB publications or not).</p><p><a data-link-type="dfn|abstract-op" href="#dfn-epub-creator" class="internalDFN" id="ref-for-dfn-epub-creator-141">EPUB creators</a> can attach the <code>group-position</code> property to any metadata property that establishes the group but it is typically associated with the <a href="#belongs-to-collection"><code>belongs-to-collection</code> property</a>.</p><p>An EPUB publication can belong to more than one group.</p></td></tr><tr><th>Allowed value(s):</th><td>A single <code>xsd:unsignedInt</code> or series of decimal-separated numbers (e.g., <code>1</code> or <code>2.2.1</code>).</td></tr><tr><th>Cardinality:</th><td><code>zero or one</code></td></tr><tr><th>Extends:</th><td>All properties.</td></tr></tbody></table>

[Example 88](#example-identifying-a-publication-s-position-in-a-set): Identifying a publication's position in a set

In this example, the publication is the second in the Lord of the Rings set of books.

```
<metadata …>
   …
   <meta property="belongs-to-collection" id="c01">
      The Lord of the Rings
   </meta>
   <meta
       refines="#c01"
       property="collection-type">
      set
   </meta>
   <meta
       refines="#c01"
       property="group-position">
      2
   </meta>
   …
</metadata>
```

[Example 89](#example-expressing-a-decimal-separated-value-for-position): Expressing a decimal-separated value for position

In this example, the decimal-separated value in the `group-position` attribute indicates this publication is volume 98, issue 4 of a periodical.

```
<metadata …>
   …
   <meta
       property="belongs-to-collection"
       id="cygnus-x-1">
      Physical Review D
   </meta>
   <meta
       refines="#cygnus-x-1"
       property="collection-type">
      series
   </meta>
   <meta
       refines="#cygnus-x-1"
       property="group-position">
      98.4
   </meta>
   …
</metadata>
```

#### D.3.8 identifier-type

[](#sec-identifier-type)

<table class="tabledef" id="identifier-type"><tbody><tr><th>Name:</th><td><code>identifier-type</code></td></tr><tr><th>Description:</th><td><p>The <code>identifier-type</code> property indicates the form or nature of an <code>identifier</code>.</p><p>When the <code>identifier-type</code> value is drawn from a code list or other formal enumeration, <a data-link-type="dfn|abstract-op" href="#dfn-epub-creator" class="internalDFN" id="ref-for-dfn-epub-creator-142">EPUB creators</a> <em class="rfc2119">SHOULD</em> attach a <a href="#attrdef-scheme"><code>scheme</code> attribute</a> to identify its source.</p></td></tr><tr><th>Allowed value(s):</th><td><code>xsd:string</code></td></tr><tr><th>Cardinality:</th><td><code>zero or one</code></td></tr><tr><th>Extends:</th><td><code><a data-link-type="element" href="#dfn-dc-identifier" class="internalDFN" id="ref-for-dfn-dc-identifier-6"><code>dc:identifier</code></a></code>, <a href="#sec-opf-dcmes-optional-def"><code>dc:source</code></a></td></tr></tbody></table>

[Example 90](#example-indicating-an-identifier-is-an-isbn): Indicating an identifier is an ISBN

In this example, the ONIX code list 5 scheme defines the meaning of the numeric value `15`.

```
<metadata …>
   …
   <dc:identifier
       id="isbn-id">
      urn:isbn:9780101010101
   </dc:identifier>
   <meta
      refines="#isbn-id"
      property="identifier-type"
      scheme="onix:codelist5">
     15
   </meta>
   …
</metadata>
```

#### D.3.9 meta-auth (deprecated)

[](#sec-meta-auth)

Use of this property is [deprecated](#deprecated).

Refer to the [`meta-auth` property definition](https://idpf.org/epub/30/spec/epub30-publications-20111011.html#meta-auth) in \[[epubpublications-30](#bib-epubpublications-30 "EPUB Publications 3.0")\] for more information.

#### D.3.10 role

[](#sec-role)

<table class="tabledef" id="role"><tbody><tr><th>Name:</th><td><code>role</code></td></tr><tr><th>Description:</th><td><p>The <code>role</code> property describes the role of a <code>creator</code>, <code>contributor</code> or <code>publisher</code> in the creation of an EPUB publication.</p><p>When the <code>role</code> value is drawn from a code list or other formal enumeration, <a data-link-type="dfn|abstract-op" href="#dfn-epub-creator" class="internalDFN" id="ref-for-dfn-epub-creator-143">EPUB creators</a> <em class="rfc2119">SHOULD</em> attach a <a href="#attrdef-scheme"><code>scheme</code> attribute</a> to identify its source.</p><p>When attaching multiple roles to an individual or organization, the importance of the roles should match the document order of their containing <code>meta</code> elements (i.e., the first <code>meta</code> element encountered should contain the most important role).</p></td></tr><tr><th>Allowed value(s):</th><td><code>xsd:string</code></td></tr><tr><th>Cardinality:</th><td><code>zero or more</code></td></tr><tr><th>Extends:</th><td><code><a data-link-type="element" href="#dfn-dc-contributor" class="internalDFN" id="ref-for-dfn-dc-contributor-2"><code>dc:contributor</code></a></code>, <code><a data-link-type="element" href="#dfn-dc-creator" class="internalDFN" id="ref-for-dfn-dc-creator-2"><code>dc:creator</code></a></code>, <a href="#sec-opf-dcmes-optional-def"><code>dc:publisher</code></a></td></tr></tbody></table>

[Example 91](#example-differentiating-creator-roles): Differentiating creator roles

In this example, MARC Relators vocabulary values differentiate the author from the illustrator of a work.

```
<metadata …>
   …
   <dc:creator
      id="creator01">
     Lewis Carroll
   </dc:creator>
   <meta
       refines="#creator01"
       property="role"
       scheme="marc:relators">
      aut
   </meta>

   <dc:creator
       id="creator02">
      John Tenniel
   </dc:creator>
   <meta
       refines="#creator02"
       property="role"
       scheme="marc:relators">
      ill
   </meta>
   …
</metadata>
```

[Example 92](#example-identifying-a-creator-who-has-multiple-roles): Identifying a creator who has multiple roles

In this example, the creator is both the author and illustrator of the work.

```
<metadata …>
   …
   <dc:creator
       id="creator01">
      Maurice Sendak
   </dc:creator>
   <meta
       refines="#creator01"
       property="role"
       scheme="marc:relators">
      aut
   </meta>
   <meta
       refines="#creator01"
       property="role"
       scheme="marc:relators">
      ill
   </meta>
   …
</metadata>
```

#### D.3.11 source-of

[](#sec-source-of)

<table class="tabledef" id="source-of"><tbody><tr><th>Name:</th><td><code>source-of</code></td></tr><tr><th>Description:</th><td><p>The <code>source-of</code> property indicates a unique aspect of an adapted source resource that has been retained in the <a data-link-type="dfn|abstract-op" href="#dfn-epub-publication" class="internalDFN" id="ref-for-dfn-epub-publication-77">EPUB publication</a>.</p><p>This specification defines the <code>pagination</code> value to indicate that the referenced <code>dc:source</code> element is the source of the <a href="https://www.w3.org/TR/epub-ssv-11/#pagebreak" id="ref-for-index-term-pagebreak-term-3"><code>pagebreak</code> properties</a> defined in the content.</p></td></tr><tr><th>Allowed value(s):</th><td><code>pagination</code></td></tr><tr><th>Cardinality:</th><td><code>zero or one</code></td></tr><tr><th>Extends:</th><td><a href="#sec-opf-dcmes-optional-def"><code>dc:source</code></a></td></tr></tbody></table>

Note

See \[[epub-a11y-tech-11](#bib-epub-a11y-tech-11 "EPUB Accessibility Techniques 1.1")\] for information on how to provide accessible page navigation.

[Example 93](#example-identifying-the-print-pagination-source-of-a-publication): Identifying the print pagination source of a publication

```
<metadata …>
   …
   <dc:identifier
       id="isbn-id">
      urn:isbn:9780101010101
   </dc:identifier>
   <meta
       refines="#isbn-id"
       property="identifier-type"
       scheme="onix:codelist5">
      15
   </meta>

   <dc:source
       id="src-id">
      urn:isbn:9780375704024
   </dc:source>
   <meta
       refines="#src-id"
       property="identifier-type"
       scheme="onix:codelist5">
      15
   </meta>
   <meta
       refines="#src-id"
       property="source-of">
      pagination
   </meta>
   …
</metadata>
```

#### D.3.12 term

[](#sec-term)

<table class="tabledef" id="term"><tbody><tr><th>Name:</th><td><code>term</code></td></tr><tr><th>Description:</th><td><p>The <code>term</code> property provides a subject code.</p></td></tr><tr><th>Allowed value(s):</th><td><code>xsd:string</code></td></tr><tr><th>Cardinality:</th><td><code>zero or one</code></td></tr><tr><th>Extends:</th><td><code><a data-link-type="element" href="#dfn-dc-subject" class="internalDFN" id="ref-for-dfn-dc-subject-2"><code>dc:subject</code></a></code></td></tr></tbody></table>

[Example 94](#example-expressing-a-bisac-code-for-a-subject-heading): Expressing a BISAC code for a subject heading

The following example shows a BISAC code for a subject heading.

```
<metadata …>
   …
   <dc:subject
       id="subject01">
      FICTION / Occult &amp; Supernatural
   </dc:subject>
   <meta
       refines="#subject01"
       property="authority">
      BISAC
   </meta>
   <meta
       refines="#subject01"
       property="term">
      FIC024000
   </meta>
   …
</metadata>
```

#### D.3.13 title-type

[](#sec-title-type)

<table class="tabledef" id="title-type"><tbody><tr><th>Name:</th><td><code>title-type</code></td></tr><tr><th>Description:</th><td><p>The <code>title-type</code> property indicates the form or nature of a <code>title</code>.</p><p>When the <code>title-type</code> value is drawn from a code list or other formal enumeration, <a data-link-type="dfn|abstract-op" href="#dfn-epub-creator" class="internalDFN" id="ref-for-dfn-epub-creator-144">EPUB creators</a> <em class="rfc2119">SHOULD</em> attach a <a href="#attrdef-scheme"><code>scheme</code> attribute</a> to identify its source. When a scheme is not specified, <a data-link-type="dfn|abstract-op" href="#dfn-epub-reading-system" class="internalDFN" id="ref-for-dfn-epub-reading-system-88">reading systems</a> <em class="rfc2119">SHOULD</em> recognize the following title type values: <code>main</code>, <code>subtitle</code>, <code class="value">short</code>, <code>collection</code>, <code class="value">edition</code> and <code>expanded</code>.</p></td></tr><tr><th>Allowed value(s):</th><td><code>xsd:string</code></td></tr><tr><th>Cardinality:</th><td><code>zero or one</code></td></tr><tr><th>Extends:</th><td><code><a data-link-type="element" href="#dfn-dc-title" class="internalDFN" id="ref-for-dfn-dc-title-4"><code>dc:title</code></a></code></td></tr></tbody></table>

[Example 95](#example-expressing-different-title-types): Expressing different title types

```
<metadata …>
   …
   <dc:title id="t1">
      A Dictionary of Modern English Usage
   </dc:title>
   <meta
       refines="#t1"
       property="title-type">
      main
   </meta>

   <dc:title id="t2">
      First Edition
   </dc:title>
   <meta
       refines="#t2"
       property="title-type">
      edition
   </meta>

   <dc:title id="t3">
      Fowler's
   </dc:title>
   <meta
       refines="#t3"
       property="title-type">
      short
   </meta>
   …
</metadata>
```

[Example 96](#example-expressing-complex-titles): Expressing complex titles

This example shows how to classify the title "The Great Cookbooks of the World: Mon premier guide de cuisson, un Mémoire. The New French Cuisine Masters, Volume Two. Special Anniversary Edition".

```
<metadata …>
   …
   <dc:title
       id="t1"
       xml:lang="fr">
      Mon premier guide de cuisson, un Mémoire
   </dc:title>
   <meta
       refines="#t1"
       property="title-type">
      main
   </meta>
   <meta
       refines="#t1"
       property="display-seq">
      2
   </meta>

   <dc:title id="t2">
      The Great Cookbooks of the World
   </dc:title>
   <meta
       refines="#t2"
       property="title-type">
      collection
   </meta>
   <meta
       refines="#t2"
       property="display-seq">
      1
   </meta>

   <dc:title id="t3">
      The New French Cuisine Masters
   </dc:title>
   <meta
       refines="#t3"
       property="title-type">
      collection
   </meta>
   <meta
       refines="#t3"
       property="display-seq">
      3
   </meta>

   <dc:title id="t4">
      Special Anniversary Edition
   </dc:title>
   <meta
       refines="#t4"
       property="title-type">
      edition
   </meta>
   <meta
       refines="#t4"
       property="display-seq">
      4
   </meta>

   <dc:title id="t5">
      The Great Cookbooks of the World: 
      Mon premier guide de cuisson, un Mémoire. 
      The New French Cuisine Masters, Volume Two. 
      Special Anniversary Edition
   </dc:title>
   <meta
       refines="#t5"
       property="title-type">
      expanded
   </meta>
   …
</metadata>
```

#### D.3.14 Examples

[](#sec-property-examples)

[Example 97](#example-a-typical-set-of-refines-metadata-in-an-epub-publication): A typical set of refines metadata in an EPUB publication

```
<metadata …>

   <dc:identifier id="pub-id">
      urn:uuid:A1B0D67E-2E81-4DF5-9E67-A64CBE366809
   </dc:identifier>

   <dc:identifier id="isbn-id">
      urn:isbn:9780101010101
   </dc:identifier>
   <meta
       refines="#isbn-id"
       property="identifier-type"
       scheme="onix:codelist5">
      15
   </meta>

   <dc:source id="src-id">
      urn:isbn:9780375704024
   </dc:source>
   <meta
       refines="#src-id"
       property="identifier-type"
       scheme="onix:codelist5">
      15
   </meta>

   <dc:title id="title">
      Norwegian Wood
   </dc:title>
   <meta
       refines="#title"
       property="title-type">
      main
   </meta>

   <dc:language>
      en
   </dc:language>

   <dc:creator
       id="creator">
      Haruki Murakami
   </dc:creator>
   <meta
       refines="#creator"
       property="role"
       scheme="marc:relators"
       id="role">
      aut
   </meta>
   <meta
       refines="#creator"
       property="alternate-script"
       xml:lang="ja">
      村上 春樹
   </meta>
   <meta
       refines="#creator"
       property="file-as">
      Murakami, Haruki
   </meta>

   <meta
       property="dcterms:modified">
      2011-01-01T12:00:00Z
   </meta>

</metadata>
```

### D.4 Metadata link vocabulary

[](#app-link-vocab)

The properties in this vocabulary are usable in the metadata ``[`link`](#dfn-link)`` element's `rel` and `properties` attributes.

The prefix URL for [referencing these properties](#sec-default-vocab) is `http://idpf.org/epub/vocab/package/link/#`.

#### D.4.1 Link relationships

[](#sec-link-rel)

The following values can be used in the `link` element [`rel` attribute](#attrdef-link-rel) to establish the relationship of the resource referenced in the [`href` attribute](#attrdef-href).

##### D.4.1.1 alternate

[](#sec-alternate)

<table class="tabledef" id="alternate"><tbody><tr><th>Name:</th><td><code>alternate</code></td></tr><tr><th>Description:</th><td><p>The <code>alternate</code> keyword is a subset of the <a href="https://html.spec.whatwg.org/multipage/#link-type-alternate" id="ref-for-index-term-html-alternate-keyword-1">HTML <code>alternate</code> keyword</a> for links. It differs as follows:</p><ul><li>It <em class="rfc2119">MUST NOT</em> be paired with other keywords.</li><li>If an alternate link is included in the <a data-link-type="dfn|abstract-op" href="#dfn-package-document" class="internalDFN" id="ref-for-dfn-package-document-33">package document</a> metadata, it identifies an alternate representation of the package document in the format specified in the <code>media-type</code> attribute.</li><li>If an alternate link is included in a <code><a data-link-type="element" href="#dfn-collection" class="internalDFN" id="ref-for-dfn-collection-7"><code>collection</code></a></code> element's metadata, it identifies an alternate representation of the <code>collection</code> in the format specified in the <code>media-type</code> attribute.</li><li><a data-link-type="dfn|abstract-op" href="#dfn-epub-reading-system" class="internalDFN" id="ref-for-dfn-epub-reading-system-89">Reading systems</a> do not have to generate hyperlinks for alternate links.</li></ul></td></tr><tr><th>Cardinality:</th><td><code>Zero or more</code></td></tr><tr><th>Extends:</th><td>Only applies to the EPUB publication or collection. <em class="rfc2119">MUST NOT</em> be used when the <a href="#attrdef-refines"><code>refines</code> attribute</a> is present.</td></tr><tr><th>Example:</th><td><code>&lt;link rel="alternate" href="package.json" media-type="application/json-ld"/&gt;</code></td></tr></tbody></table>

##### D.4.1.2 marc21xml-record (deprecated)

[](#sec-marc21xml-record)

Use of the `marc21xml-record` keyword is [deprecated](#deprecated). It is replaced by the [`record`](#record) keyword with the [`media-type` attribute](#attrdef-link-media-type) value "`application/marcxml+xml`".

Refer to the [`marc21xml-record` property definition](https://idpf.org/epub/30/spec/epub30-publications-20111011.html#marc21xml-record) in \[[epubpublications-30](#bib-epubpublications-30 "EPUB Publications 3.0")\] for more information.

##### D.4.1.3 mods-record (deprecated)

[](#sec-mods-record)

Use of the `mods-record` keyword is [deprecated](#deprecated). It is replaced by the [`record`](#record) keyword with the [`media-type` attribute](#attrdef-link-media-type) value "`application/mods+xml`".

Refer to the [`mods-record` property definition](https://idpf.org/epub/30/spec/epub30-publications-20111011.html#mods-record) in \[[epubpublications-30](#bib-epubpublications-30 "EPUB Publications 3.0")\] for more information.

##### D.4.1.4 onix-record (deprecated)

[](#sec-onix-record)

Use of the `onix-record` keyword is [deprecated](#deprecated). It is replaced by the [`record`](#record) keyword with the [properties attribute](#attrdef-properties) value [`onix`](#onix).

Refer to the [`onix-record` property definition](https://idpf.org/epub/30/spec/epub30-publications-20111011.html#onix-record) in \[[epubpublications-30](#bib-epubpublications-30 "EPUB Publications 3.0")\] for more information.

##### D.4.1.5 record

[](#sec-record)

<table class="tabledef" id="record"><tbody><tr><th>Name:</th><td><code>record</code></td></tr><tr><th>Description:</th><td><p>Indicates that the referenced resource is a metadata record.</p><p>The media type of the record <em class="rfc2119">MUST</em> be identified in the <a href="#attrdef-link-media-type"><code>media-type</code> attribute</a> when this keyword is specified.</p><p>For a list of commonly linked metadata record types, refer to the <a href="https://idpf.org/epub/guides/linked-records/">EPUB Linked Metadata Guide</a></p><p>If the type of record cannot be identified from the media type, an <a href="#sec-link-properties">identifier property</a> can be assigned in the <a href="#attrdef-properties"><code>properties</code> attribute</a>.</p></td></tr><tr><th>Cardinality:</th><td><code>Zero or more</code></td></tr><tr><th>Extends:</th><td>Only applies to the <a data-link-type="dfn|abstract-op" href="#dfn-epub-publication" class="internalDFN" id="ref-for-dfn-epub-publication-78">EPUB publication</a> or collection. <em class="rfc2119">MUST NOT</em> be used when the <a href="#attrdef-refines"><code>refines</code> attribute</a> is present.</td></tr><tr><th>Example:</th><td><code>&lt;link rel="record" href="book/52.atom" media-type="application/atom+xml;type=entry;profile=opds-catalog"/&gt;</code></td></tr></tbody></table>

##### D.4.1.6 voicing

[](#sec-voicing)

<table class="tabledef" id="voicing"><tbody><tr><th>Name:</th><td><code>voicing</code></td></tr><tr><th>Description:</th><td><p>Indicates that the referenced audio file provides an aural representation of the expression or resource (typically, the title or creator) specified by the refines attribute.</p><p>The media type of the audio file <em class="rfc2119">MUST</em> be identified in the <a href="#attrdef-link-media-type"><code>media-type</code> attribute</a> when this keyword is specified.</p></td></tr><tr><th>Cardinality:</th><td><code>Zero or more</code></td></tr><tr><th>Extends:</th><td>All properties. The <a href="#attrdef-refines"><code>refines</code> attribute</a> <em class="rfc2119">MUST</em> be present when this value is used.</td></tr><tr><th>Example:</th><td><code>&lt;link refines="#title" rel="voicing" media-type="audio/mpeg" href="title.mp3" /&gt;</code></td></tr></tbody></table>

##### D.4.1.7 xml-signature (deprecated)

[](#sec-xml-signature)

Use of the `xml-signature` keyword is [deprecated](#deprecated). It is not replaced by another linking method.

Refer to the [`xml-signature` property definition](https://idpf.org/epub/30/spec/epub30-publications-20111011.html#xml-signature) in \[[epubpublications-30](#bib-epubpublications-30 "EPUB Publications 3.0")\] for more information.

##### D.4.1.8 xmp-record (deprecated)

[](#sec-xmp-record)

Use of the `xmp-record` keyword is [deprecated](#deprecated).

Refer to the [`xmp-record` property definition](https://idpf.org/epub/30/spec/epub30-publications-20111011.html#xmp-record) in \[[epubpublications-30](#bib-epubpublications-30 "EPUB Publications 3.0")\] for more information.

#### D.4.2 Link properties

[](#sec-link-properties)

The following values can be used in the ``[`link`](#dfn-link)`` element's `properties` attribute to establish the type of record a referenced resource represents. These values are provided for record formats that cannot be uniquely identified by their media type.

##### D.4.2.1 onix

[](#sec-onix)

<table class="tabledef" id="onix"><tbody><tr><th>Name:</th><td><code>onix</code></td></tr><tr><th>Description:</th><td>The <code>onix</code> property indicates the referenced resource is an ONIX record [<cite><a class="bibref" data-link-type="biblio" href="#bib-onix" title="ONIX for Books 3.0">onix</a></cite>].</td></tr><tr><th>Example:</th><td><code>&lt;link rel="record" href="pub/meta/nor-wood-onix.xml" media-type="application/xml" properties="onix"/&gt;</code></td></tr></tbody></table>

### D.5 Package rendering vocabulary

[](#app-rendering-vocab)

The prefix URL for [referencing these properties](#sec-default-vocab) is `http://www.idpf.org/vocab/rendition/#`.

The "`rendition:`" prefix is [reserved for use](#sec-metadata-reserved-prefixes) with the package rendering properties and does not have to be declared in the [package document](#dfn-package-document).

Note

Unlike the other vocabularies in this appendix, the properties in the Package Rendering Vocabulary consist of a mix of properties (expressed in ``[`meta`](#dfn-meta)`` elements) and [spine](#dfn-epub-spine) overrides (expressed on ``[`itemref`](#dfn-itemref)`` elements).

The usage requirements are also defined in [8\. Layout rendering control](#sec-rendering-control) not in this appendix. The following table provides a map to the properties, overrides, and where they are defined.

| Property | Overrides | Defined in |
| --- | --- | --- |
| `rendition:layout` | 
*   `rendition:layout-pre-paginated`
*   `rendition:layout-reflowable`

 | [8.2.2.1 Layout](#layout) |
| `rendition:orientation` | 

*   `rendition:orientation-auto`
*   `rendition:orientation-landscape`
*   `rendition:orientation-portrait`

 | [8.2.2.2 Orientation](#orientation) |
| `rendition:spread` | 

*   `rendition:spread-auto`
*   `rendition:spread-both`
*   `rendition:spread-landscape`
*   `rendition:spread-none`
*   `rendition:spread-portrait` (Deprecated)

 | [8.2.2.3 Synthetic spreads](#spread) |
| — | 

*   `rendition:page-spread-center`
*   `rendition:page-spread-left`
*   `rendition:page-spread-right`

 | [8.2.2.4 Spread placement](#page-spread) |
| `rendition:viewport` (Deprecated) | — | [8.2.2.5 Viewport dimensions (deprecated)](#viewport) |
| `rendition:flow` | 

*   `rendition:flow-paginated`
*   `rendition:flow-scrolled-continuous`
*   `rendition:flow-scrolled-doc`
*   `rendition:flow-auto`

 | [8.3.1 The `rendition:flow` property](#flow) |
| — | 

*   `rendition:align-x-center`

 | [8.3.2 The `rendition:align-x-center` property](#align-x-center) |

#### D.5.1 Custom rendering properties

[](#sec-rendering-custom-properties)

[Reading system](#dfn-epub-reading-system) developers may introduce functionality not defined in this specification to address reading system-specific issues rendering [EPUB content documents](#dfn-epub-content-document).

To facilitate this experimentation, [EPUB creators](#dfn-epub-creator) _MAY_ include custom properties and [spine](#dfn-epub-spine) overrides for use in the [package document](#dfn-package-document) provided they do not use the `rendition:` prefix.

Note

Custom properties should only address rendering issues specific to a particular reading system. This specification should be extended to provide extensions that multiple independent reading systems can use.

### D.6 Manifest properties vocabulary

[](#app-item-properties-vocab)

The properties in this vocabulary are usable in the manifest ``[`item`](#dfn-item)`` element's [`properties` attribute](#attrdef-item-properties).

The prefix URL for [referencing these properties](#sec-default-vocab) is `http://idpf.org/epub/vocab/package/item/#`.

#### D.6.1 cover-image

[](#sec-cover-image)

<table class="tabledef" id="cover-image"><tbody><tr><th>Name:</th><td><code>cover-image</code></td></tr><tr><th>Description:</th><td>The <code>cover-image</code> property identifies the described <a data-link-type="dfn|abstract-op" href="#dfn-publication-resource" class="internalDFN" id="ref-for-dfn-publication-resource-35">publication resource</a> as the cover image for the <a data-link-type="dfn|abstract-op" href="#dfn-epub-publication" class="internalDFN" id="ref-for-dfn-epub-publication-79">EPUB publication</a>.</td></tr><tr><th>Applies to:</th><td>All <a href="#tbl-core-media-types">raster and vector image types</a></td></tr><tr><th>Cardinality:</th><td><code>Zero or one</code></td></tr></tbody></table>

#### D.6.2 mathml

[](#sec-mathml)

<table class="tabledef" id="mathml"><tbody><tr><th>Name:</th><td><code>mathml</code></td></tr><tr><th>Description:</th><td>The <code>mathml</code> property indicates that the described <a data-link-type="dfn|abstract-op" href="#dfn-publication-resource" class="internalDFN" id="ref-for-dfn-publication-resource-36">publication resource</a> contains one or more instances of MathML markup.</td></tr><tr><th>Applies to:</th><td><a data-link-type="dfn|abstract-op" href="#dfn-epub-content-document" class="internalDFN" id="ref-for-dfn-epub-content-document-64">EPUB content documents</a></td></tr><tr><th>Cardinality:</th><td><code>Zero or more</code></td></tr></tbody></table>

#### D.6.3 nav

[](#sec-nav-prop)

<table class="tabledef" id="nav"><tbody><tr><th>Name:</th><td><code>nav</code></td></tr><tr><th>Description:</th><td>The <code>nav</code> property indicates that the described publication resource constitutes the <a data-link-type="dfn|abstract-op" href="#dfn-epub-navigation-document" class="internalDFN" id="ref-for-dfn-epub-navigation-document-14">EPUB navigation document</a> of the <a data-link-type="dfn|abstract-op" href="#dfn-epub-publication" class="internalDFN" id="ref-for-dfn-epub-publication-80">EPUB publication</a>.</td></tr><tr><th>Applies to:</th><td>The EPUB navigation document</td></tr><tr><th>Cardinality:</th><td><code>Exactly one</code></td></tr></tbody></table>

#### D.6.4 remote-resources

[](#sec-remote-resources)

<table class="tabledef" id="remote-resources"><tbody><tr><th>Name:</th><td><code>remote-resources</code></td></tr><tr><th>Description:</th><td><p>The <code>remote-resources</code> property indicates that the described <a data-link-type="dfn|abstract-op" href="#dfn-publication-resource" class="internalDFN" id="ref-for-dfn-publication-resource-37">publication resource</a> contains one or more internal references to other publication resources that are located outside of the <a data-link-type="dfn|abstract-op" href="#dfn-epub-container" class="internalDFN" id="ref-for-dfn-epub-container-17">EPUB container</a>.</p><p>Refer to <a href="#sec-resource-locations" class="sec-ref"><bdi class="secno">3.6 </bdi>Resource locations</a> for more information.</p></td></tr><tr><th>Applies to:</th><td>All publication resources with the capability of internal referencing (e.g., <a data-link-type="dfn|abstract-op" href="#dfn-xhtml-content-document" class="internalDFN" id="ref-for-dfn-xhtml-content-document-33">XHTML content documents</a>, <a data-link-type="dfn|abstract-op" href="#dfn-svg-content-document" class="internalDFN" id="ref-for-dfn-svg-content-document-16">SVG content documents</a>, CSS style sheets and <a data-link-type="dfn|abstract-op" href="#dfn-media-overlay-document" class="internalDFN" id="ref-for-dfn-media-overlay-document-20">media overlay documents</a>).</td></tr><tr><th>Cardinality:</th><td><code>Zero or more</code></td></tr></tbody></table>

#### D.6.5 scripted

[](#sec-scripted)

<table class="tabledef" id="scripted"><tbody><tr><th>Name:</th><td><code>scripted</code></td></tr><tr><th>Description:</th><td>The <code>scripted</code> property indicates that the described <a data-link-type="dfn|abstract-op" href="#dfn-publication-resource" class="internalDFN" id="ref-for-dfn-publication-resource-38">publication resource</a> is a <a data-link-type="dfn|abstract-op" href="#dfn-scripted-content-document" class="internalDFN" id="ref-for-dfn-scripted-content-document-4">scripted content document</a> (i.e., contains scripting and/or [<cite><a class="bibref" data-link-type="biblio" href="#bib-html" title="HTML Standard">html</a></cite>] <code><a data-link-type="element" href="https://html.spec.whatwg.org/multipage/forms.html#the-form-element" id="ref-for-index-term-form-element-3">form</a></code> elements).</td></tr><tr><th>Applies to:</th><td><a data-link-type="dfn|abstract-op" href="#dfn-epub-content-document" class="internalDFN" id="ref-for-dfn-epub-content-document-65">EPUB content documents</a></td></tr><tr><th>Cardinality:</th><td><code>Zero or more</code></td></tr></tbody></table>

#### D.6.6 svg

[](#sec-svg-prop)

<table class="tabledef" id="svg"><tbody><tr><th>Name:</th><td><code>svg</code></td></tr><tr><th>Description:</th><td><p>The <code>svg</code> property indicates that the described <a data-link-type="dfn|abstract-op" href="#dfn-publication-resource" class="internalDFN" id="ref-for-dfn-publication-resource-39">publication resource</a> embeds one or more instances of SVG markup.</p><p>This property <em class="rfc2119">MUST</em> be set when SVG markup is included directly in the resource and <em class="rfc2119">MAY</em> be set when the SVG is referenced from the resource (e.g., from an [<cite><a class="bibref" data-link-type="biblio" href="#bib-html" title="HTML Standard">html</a></cite>] <code>img</code>, <code>object</code> or <code>iframe</code> element).</p></td></tr><tr><th>Applies to:</th><td><a data-link-type="dfn|abstract-op" href="#dfn-xhtml-content-document" class="internalDFN" id="ref-for-dfn-xhtml-content-document-34">XHTML content documents</a>; the value is implied for <a data-link-type="dfn|abstract-op" href="#dfn-svg-content-document" class="internalDFN" id="ref-for-dfn-svg-content-document-17">SVG content documents</a>.</td></tr><tr><th>Cardinality:</th><td><code>Zero or more</code></td></tr></tbody></table>

#### D.6.7 switch

[](#sec-switch)

<table class="tabledef" id="switch"><tbody><tr><th>Name:</th><td><code>switch</code></td></tr><tr><th>Description:</th><td><p>The <code>switch</code> property indicates that the described <a data-link-type="dfn|abstract-op" href="#dfn-publication-resource" class="internalDFN" id="ref-for-dfn-publication-resource-40">publication resource</a> contains one or more instances of the <a href="#sec-xhtml-content-switch">deprecated <code>epub:switch</code> element</a>.</p></td></tr><tr><th>Applies to:</th><td><a data-link-type="dfn|abstract-op" href="#dfn-xhtml-content-document" class="internalDFN" id="ref-for-dfn-xhtml-content-document-35">XHTML content documents</a>.</td></tr><tr><th>Cardinality:</th><td><code>Zero or more</code></td></tr></tbody></table>

### D.7 Spine properties vocabulary

[](#app-itemref-properties-vocab)

The properties in this vocabulary are usable in the spine ``[`itemref`](#dfn-itemref)`` element's [`properties` attribute](#attrdef-itemref-properties).

The prefix URL for [referencing these properties](#sec-default-vocab) is `http://idpf.org/epub/vocab/package/itemref/#`.

#### D.7.1 page-spread-left

[](#sec-page-spread-left)

<table class="tabledef" id="page-spread-left"><tbody><tr><th>Name:</th><td><code>page-spread-left</code></td></tr><tr><th>Description:</th><td><p>The <code>page-spread-left</code> property indicates that the first page of the associated <code>item</code> element's <a data-link-type="dfn|abstract-op" href="#dfn-epub-content-document" class="internalDFN" id="ref-for-dfn-epub-content-document-66">EPUB content document</a> represents the left-hand side of a two-page spread.</p><p>The <a href="#fxl-page-spread-left"><code>rendition:page-spread-left</code> property</a> is an alias for this property. Refer to <a href="#page-spread" class="sec-ref"><bdi class="secno">8.2.2.4 </bdi>Spread placement</a> for more information about their use.</p></td></tr></tbody></table>

#### D.7.2 page-spread-right

[](#sec-page-spread-right)

<table class="tabledef" id="page-spread-right"><tbody><tr><th>Name:</th><td><code>page-spread-right</code></td></tr><tr><th>Description:</th><td><p>The <code>page-spread-right</code> property indicates that the first page of the associated <code>item</code> element's <a data-link-type="dfn|abstract-op" href="#dfn-epub-content-document" class="internalDFN" id="ref-for-dfn-epub-content-document-67">EPUB content document</a> represents the right-hand side of a two-page spread.</p><p>The <a href="#fxl-page-spread-right"><code>rendition:page-spread-right</code> property</a> is an alias for this property. Refer to <a href="#page-spread" class="sec-ref"><bdi class="secno">8.2.2.4 </bdi>Spread placement</a> for more information about their use.</p></td></tr></tbody></table>

#### D.7.3 Examples

[](#examples-itemref-properties)

[Example 98](#example-itemref-multicol): Identifying a two-page spread in the spine

```
<spine>
<itemref
    idref="title"/>
<itemref
    idref="ps-1-l"
    properties="page-spread-left"/>
<itemref
    idref="ps-1-r"
    properties="page-spread-right"/>
<itemref
    idref="toc"/>
…
</spine>
```

### D.8 Media overlays vocabulary

[](#app-overlays-vocab)

The properties in this vocabulary are usable in the ``[`meta`](#dfn-meta)`` element's `property` attribute.

The prefix URL for [referencing these properties](#sec-default-vocab) is `http://www.idpf.org/epub/vocab/overlays/#`.

The prefix "`media:`" is [reserved for use](#sec-metadata-reserved-prefixes) with properties in this vocabulary and does not have to be declared in the [package document](#dfn-package-document).

#### D.8.1 active-class

[](#sec-active-class)

<table class="tabledef" id="active-class"><tbody><tr><th>Name:</th><td><code>active-class</code></td></tr><tr><th>Description:</th><td><a data-link-type="dfn|abstract-op" href="#dfn-epub-creator" class="internalDFN" id="ref-for-dfn-epub-creator-146">EPUB creator</a>-defined CSS class name to apply to the currently playing <a data-link-type="dfn|abstract-op" href="#dfn-epub-content-document" class="internalDFN" id="ref-for-dfn-epub-content-document-68">EPUB content document</a> element.</td></tr><tr><th>Allowed value(s):</th><td><code>xsd:string</code></td></tr><tr><th>Cardinality:</th><td><code>Zero or one</code></td></tr><tr><th>Example:</th><td><code>&lt;meta property="media:active-class"&gt;-epub-media-overlay-active&lt;/meta&gt;</code></td></tr></tbody></table>

#### D.8.2 duration

[](#sec-duration)

<table class="tabledef" id="duration"><tbody><tr><th>Name:</th><td><code>duration</code></td></tr><tr><th>Description:</th><td>The duration of the entire presentation or of a specific <a data-link-type="dfn|abstract-op" href="#dfn-media-overlay-document" class="internalDFN" id="ref-for-dfn-media-overlay-document-21">media overlay document</a>. The specified durations account for the audio clips known at authoring time, and so exclude live streaming from external resources and speech synthesis.</td></tr><tr><th>Allowed value(s):</th><td><p><em class="rfc2119">MUST</em> be a [<cite><a class="bibref" data-link-type="biblio" href="#bib-smil3" title="Synchronized Multimedia Integration Language (SMIL 3.0)">smil3</a></cite>] <a href="https://www.w3.org/TR/SMIL3/smil-timing.html#q22" id="ref-for-index-term-clock-value-3">clock value</a>.</p></td></tr><tr><th>Cardinality:</th><td>Exactly one for the <a data-link-type="dfn|abstract-op" href="#dfn-epub-publication" class="internalDFN" id="ref-for-dfn-epub-publication-81">EPUB publication</a> and for each <a href="#dfn-media-overlay-document" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-media-overlay-document-22">media overlay document</a>.</td></tr><tr><th>Example:</th><td><code>&lt;meta property="media:duration"&gt;1:36:20&lt;/meta&gt;</code></td></tr></tbody></table>

#### D.8.3 narrator

[](#sec-narrator)

<table class="tabledef" id="narrator"><tbody><tr><th>Name:</th><td><code>narrator</code></td></tr><tr><th>Description:</th><td>Name of the narrator.</td></tr><tr><th>Allowed value(s):</th><td><code>xsd:string</code></td></tr><tr><th>Cardinality:</th><td><code>Zero or more</code></td></tr><tr><th>Example:</th><td><code>&lt;meta property="media:narrator"&gt;Joe Speaker&lt;/meta&gt;</code></td></tr></tbody></table>

#### D.8.4 playback-active-class

[](#sec-playback-active-class)

<table class="tabledef" id="playback-active-class"><tbody><tr><th>Name:</th><td><code>playback-active-class</code></td></tr><tr><th>Description:</th><td>Author-defined CSS class name to apply to the <a data-link-type="dfn|abstract-op" data-lt="EPUB content document" href="#dfn-epub-content-document" class="internalDFN" id="ref-for-dfn-epub-content-document-69">EPUB content document's</a> document element when playback is active.</td></tr><tr><th>Allowed value(s):</th><td><code>xsd:string</code></td></tr><tr><th>Cardinality:</th><td><code>Zero or one</code></td></tr><tr><th>Example:</th><td><code>&lt;meta property="media:playback-active-class"&gt;-epub-media-overlay-playing&lt;/meta&gt;</code></td></tr></tbody></table>

E. Prefixed CSS properties
--------------------------

[](#css-prefixes)

This appendix describes the prefixed CSS properties supported by EPUB.

Note

The prefix definitions are no longer being synchronized with their CSS counterparts. In some cases, the unprefixed versions of these properties now support additional values. [Reading systems](#dfn-epub-reading-system) may not support the new syntax with the prefixed properties, so [EPUB creators](#dfn-epub-creator) are advised to use the unprefixed versions for newer features.

### E.1 CSS writing modes

[](#sec-css-prefixed-writing-modes)

This section describes the `-epub-` prefixed properties for \[[css-writing-modes-3](#bib-css-writing-modes-3 "CSS Writing Modes Level 3")\].

#### E.1.1 The `-epub-text-orientation` property

[](#sec-css-prefixed-writing-modes-text-orientation)

This property is a prefixed version of the [`text-orientation` property](https://www.w3.org/TR/css-writing-modes-3/#propdef-text-orientation) \[[css-writing-modes-3](#bib-css-writing-modes-3 "CSS Writing Modes Level 3")\].

<table class="tabledef"><tbody><tr><th>Name:</th><td><code>-epub-text-orientation</code></td></tr><tr class="value"><th>Value:</th><td>mixed | upright | sideways | sideways-right</td></tr></tbody></table>

For compatibility with existing content, the `-epub-text-orientation` property also supports the deprecated `vertical-right`, `rotate-right`, and `rotate-normal` keywords. The following table specifies the effect these have when specified.

| Deprecated value | Value to be used |
| --- | --- |
| `vertical-right` | `mixed` |
| `rotate-right` | `sideways` |
| `rotate-normal` | `sideways` |

#### E.1.2 The `-epub-writing-mode` property

[](#sec-css-prefixed-writing-modes-writing-mode)

This property is a prefixed version of the [`writing-mode` property](https://www.w3.org/TR/css-writing-modes-3/#propdef-writing-mode) \[[css-writing-modes-3](#bib-css-writing-modes-3 "CSS Writing Modes Level 3")\], with the same syntax and behavior.

<table class="tabledef"><tbody><tr><th>Name:</th><td><code>-epub-writing-mode</code></td></tr><tr class="value"><th>Value:</th><td>horizontal-tb | vertical-rl | vertical-lr</td></tr></tbody></table>

#### E.1.3 The `-epub-text-combine-horizontal` and `-epub-text-combine` properties

[](#sec-css-prefixed-writing-modes-text-combine)

These properties are prefixed versions of the [`text-combine-upright` property](https://www.w3.org/TR/css-writing-modes-3/#text-combine-upright) \[[css-writing-modes-3](#bib-css-writing-modes-3 "CSS Writing Modes Level 3")\], although `-epub-text-combine` is deprecated.

<table class="tabledef"><tbody><tr><th>Name:</th><td><code>-epub-text-combine-horizontal</code></td></tr><tr class="value"><th>Value:</th><td>none | all</td></tr></tbody></table>

<table class="tabledef"><tbody><tr><th>Name:</th><td><code>-epub-text-combine</code> (deprecated)</td></tr><tr class="value"><th>Value:</th><td>none | horizontal | horizontal &lt;number&gt;</td></tr></tbody></table>

For compatibility with existing content, the `-epub-text-combine-horizontal` and `-epub-text-combine` properties also support a number of deprecated keywords. The following table specifies the effect these have when specified.

| Prefixed version | CSS equivalent |
| --- | --- |
| `-epub-text-combine-horizontal: none` | `text-combine-upright: none` |
| `-epub-text-combine-horizontal: all` | `text-combine-upright: all` |
| `-epub-text-combine: none` | `text-combine-upright: none` |
| `-epub-text-combine: horizontal` | `text-combine-upright: all` |
| `-epub-text-combine: horizontal <number>` | _no equivalent_ |

### E.2 CSS text level 3

[](#sec-css-prefixed-text)

This section describes the `-epub-` prefixed properties (and one prefixed value) for \[[css-text-3](#bib-css-text-3 "CSS Text Module Level 3")\].

#### E.2.1 The `-epub-hyphens` property

[](#sec-css-prefixed-text-epub-hyphens)

This property is a prefixed version of the [`hyphens` property](https://www.w3.org/TR/css-text-3/#hyphens-property) \[[css-text-3](#bib-css-text-3 "CSS Text Module Level 3")\].

<table class="tabledef"><tbody><tr><th>Name:</th><td><code>-epub-hyphens</code></td></tr><tr class="value"><th>Value:</th><td>none | manual | auto | all</td></tr></tbody></table>

For compatibility with existing content, the `-epub-hyphens` property also supports the deprecated `all` keyword. The value is no longer supported in CSS and there is no equivalent to use in its place.

#### E.2.2 The `-epub-line-break` property

[](#sec-css-prefixed-text-epub-line-break)

This property is a prefixed version of the [`line-break` property](https://www.w3.org/TR/css-text-3/#line-break-property) \[[css-text-3](#bib-css-text-3 "CSS Text Module Level 3")\].

<table class="tabledef"><tbody><tr><th>Name:</th><td><code>-epub-line-break</code></td></tr><tr class="value"><th>Value:</th><td>auto | loose | normal | strict</td></tr></tbody></table>

#### E.2.3 The `-epub-text-align-last` property

[](#sec-css-prefixed-text-epub-text-align-last)

This property is a prefixed version of the [`text-align-last` property](https://www.w3.org/TR/css-text-3/#text-align-last-property) \[[css-text-3](#bib-css-text-3 "CSS Text Module Level 3")\].

<table class="tabledef"><tbody><tr><th>Name:</th><td><code>-epub-text-align-last</code></td></tr><tr class="value"><th>Value:</th><td>auto | start | end | left | right | center | justify</td></tr></tbody></table>

#### E.2.4 The `-epub-word-break` property

[](#sec-css-prefixed-text-epub-word-break)

This property is a prefixed version of the [`word-break` property](https://www.w3.org/TR/css-text-3/#word-break-property) \[[css-text-3](#bib-css-text-3 "CSS Text Module Level 3")\].

<table class="tabledef"><tbody><tr><th>Name:</th><td><code>-epub-word-break</code></td></tr><tr class="value"><th>Value:</th><td>normal | keep-all | break-all</td></tr></tbody></table>

#### E.2.5 The `text-transform` property

[](#sec-css-prefixed-text-text-transform)

This property is a prefixed value for the [`text-transform` property](https://www.w3.org/TR/css-text-3/#text-transform-property) \[[css-text-3](#bib-css-text-3 "CSS Text Module Level 3")\].

<table class="tabledef"><tbody><tr><th>Name:</th><td><code>text-transform</code></td></tr><tr class="value"><th>Value:</th><td>-epub-fullwidth</td></tr></tbody></table>

For compatibility with existing content, the `text-transform` property also supports the deprecated `-epub-fullwidth` keyword. When specified, this has the same effect as `text-transform: full-width`.

### E.3 CSS text decoration level 3

[](#sec-css-prefixed-text-decoration)

This section describes the `-epub-` prefixed properties for \[[css-text-decor-3](#bib-css-text-decor-3 "CSS Text Decoration Module Level 3")\].

#### E.3.1 The `-epub-text-emphasis-color` Property

[](#sec-css-prefixed-text-epub-text-emphasis-color)

This property is a prefixed version of the [`text-emphasis-color` property](https://www.w3.org/TR/css-text-decor-3/#text-emphasis-color-property) \[[css-text-decor-3](#bib-css-text-decor-3 "CSS Text Decoration Module Level 3")\].

<table class="tabledef"><tbody><tr><th>Name:</th><td><code>-epub-text-emphasis-color</code></td></tr><tr class="value"><th>Value:</th><td>&lt;color&gt;</td></tr></tbody></table>

#### E.3.2 The `-epub-text-emphasis-position` property

[](#sec-css-prefixed-text-epub-text-emphasis-position)

This property is a prefixed version of the [`text-emphasis-position` property](https://www.w3.org/TR/css-text-decor-3/#text-emphasis-position-property) \[[css-text-decor-3](#bib-css-text-decor-3 "CSS Text Decoration Module Level 3")\].

<table class="tabledef"><tbody><tr><th>Name:</th><td><code>-epub-text-emphasis-position</code></td></tr><tr class="value"><th>Value:</th><td>[ over | under ] &amp;&amp; [ right | left ]</td></tr></tbody></table>

#### E.3.3 The `-epub-text-emphasis-style` property

[](#sec-css-prefixed-text-epub-text-emphasis-style)

This property is a prefixed version of the [`text-emphasis-style` property](https://www.w3.org/TR/css-text-decor-3/#text-emphasis-style-property) \[[css-text-decor-3](#bib-css-text-decor-3 "CSS Text Decoration Module Level 3")\].

<table class="tabledef"><tbody><tr><th>Name:</th><td><code>-epub-text-emphasis-style</code></td></tr><tr class="value"><th>Value:</th><td>none | [ [ filled | open ] || [ dot | circle | double-circle | triangle | sesame ] ] | &lt;string&gt;</td></tr></tbody></table>

#### E.3.4 The `-epub-text-underline-position` property

[](#sec-css-prefixed-text-epub-text-underline-position)

This property is a prefixed version of the [`text-underline-position` property](https://www.w3.org/TR/css-text-decor-3/#text-underline-position-property) \[[css-text-decor-3](#bib-css-text-decor-3 "CSS Text Decoration Module Level 3")\].

<table class="tabledef"><tbody><tr><th>Name:</th><td><code>-epub-text-underline-position</code></td></tr><tr class="value"><th>Value:</th><td>auto | [ under || [ left | right ] ] | alphabetic</td></tr></tbody></table>

For compatibility with existing content, the value `-epub-text-underline-position` property also supports the deprecated `alphabetic` keyword. When specified, this has the same effect as `text-underline-position: auto`.

F. The `viewport meta` tag
--------------------------

[](#app-viewport-meta)

### F.1 Introduction

[](#app-viewport-meta-intro)

_This section is non-normative._

As the [Safari HTML definition](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html#//apple_ref/doc/uid/TP40008193-SW6) of the `viewport meta` tag, that was used in earlier versions of EPUB 3, is not an officially recognized standard, this specification defines a basic syntax in order to allow [EPUB creators](#dfn-epub-creator) to express [width and height dimensions](#sec-fxl-icb-html) for use rendering [fixed-layout documents](#dfn-fixed-layout-document).

The syntax of this grammar is also influenced by the parsing algorithm for the `viewport meta` tag, as defined in \[[css-viewport-1](#bib-css-viewport-1 "CSS Viewport Module Level 1")\].

The syntax is intentionally left as generic as possible as it is not in this specification's scope to define all the possible properties and values. It only defines the basic requirements for defining a property and value pair as well as the possible separators between expressions.

### F.2 Syntax

[](#app-viewport-meta-syntax)

For [fixed-layout documents](#dfn-fixed-layout-document), a `viewport` [`meta`](https://html.spec.whatwg.org/multipage/#the-meta-element) tag \[[html](#bib-html "HTML Standard")\] _MUST_ have `name` and `content` attributes that conform to the following definition:

name

The value of the `[name](https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-name)` attribute \[[html](#bib-html "HTML Standard")\] after [whitespace normalization](https://www.w3.org/TR/xml/#AVNormalize) \[[xml](#bib-xml "Extensible Markup Language (XML) 1.0 (Fifth Edition)")\] _MUST_ be `viewport`.

content

The value of the `[content](https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-content)` attribute \[[html](#bib-html "HTML Standard")\] after [whitespace normalization](https://www.w3.org/TR/xml/#AVNormalize) \[[xml](#bib-xml "Extensible Markup Language (XML) 1.0 (Fifth Edition)")\] _MUST_ be of the following form:

<table class="productionset"><caption>(EBNF productions <a href="https://www.iso.org/standard/26153.html">ISO/IEC 14977</a>)<br>All terminal symbols are in the Unicode Block 'Basic Latin' (U+0000 to U+007F).</caption><tbody><tr><td id="viewport.ebnf.def"><a href="#viewport.ebnf.def">viewport</a></td><td>=</td><td><a href="#viewport.ebnf.property">property</a>, { <a href="#viewport.ebnf.sep">sep</a>, <a href="#viewport.ebnf.property">property</a> } ;</td></tr><tr><td id="viewport.ebnf.property"><a href="#viewport.ebnf.property">property</a></td><td>=</td><td><a href="#viewport.ebnf.name">name</a>, [ <a href="#viewport.ebnf.assign">assign</a>, <a href="#viewport.ebnf.value">value</a> ] ;</td></tr><tr><td id="viewport.ebnf.name"><a href="#viewport.ebnf.name">name</a></td><td>=</td><td>? character data ? ;</td></tr><tr><td id="viewport.ebnf.value"><a href="#viewport.ebnf.value">value</a></td><td>=</td><td>? character data ? ;</td></tr><tr><td id="viewport.ebnf.sep"><a href="#viewport.ebnf.sep">sep</a></td><td>=</td><td><a href="#viewport.ebnf.sep-char">sep-char</a>, { <a href="#viewport.ebnf.sep-char">sep-char</a> } ;</td></tr><tr><td id="viewport.ebnf.sep-char"><a href="#viewport.ebnf.sep-char">sep-char</a></td><td>=</td><td>( ";" | "," | <a href="#viewport.ebnf.space">space</a> ) ;</td></tr><tr><td id="viewport.ebnf.assign"><a href="#viewport.ebnf.assign">assign</a></td><td>=</td><td>[ <a href="#viewport.ebnf.space">space</a> ], "=", [ <a href="#viewport.ebnf.space">space</a> ] ;</td></tr><tr><td id="viewport.ebnf.space"><a href="#viewport.ebnf.space">space</a></td><td>=</td><td>#x20 ;</td></tr></tbody></table>

The only restriction on property [names](#viewport.ebnf.name) and [values](#viewport.ebnf.value) is that they _MUST NOT_ contain [separator characters](#viewport.ebnf.sep-char) or the [assignment character](#viewport.ebnf.assign).

The authoring requirements in this section apply _after_ [whitespace normalization](https://www.w3.org/TR/xml/#AVNormalize) \[[xml](#bib-xml "Extensible Markup Language (XML) 1.0 (Fifth Edition)")\] (i.e., after a reading system strips leading and trailing whitespace and compacts all instances of multiple whitespace within the attribute to single spaces). EPUB creators _MAY_ include any [whitespace characters](https://www.w3.org/TR/xml/#NT-S) \[[xml](#bib-xml "Extensible Markup Language (XML) 1.0 (Fifth Edition)")\] in the authored tag so long as the result is valid to this definition.

Note

Although \[[html](#bib-html "HTML Standard")\] [depends on](https://html.spec.whatwg.org/multipage/#dependencies) the \[[infra](#bib-infra "Infra Standard")\] [definition of whitespace](https://infra.spec.whatwg.org/#ascii-whitespace), the Form Feed (U+000C) character is not valid whitespace per the \[[xml](#bib-xml "Extensible Markup Language (XML) 1.0 (Fifth Edition)")\] definition. It cannot be used in the XML syntax (i.e., in XHTML content documents).

There are no restrictions on any other attributes allowed on the [`meta`](https://html.spec.whatwg.org/multipage/#the-meta-element) element by the \[[html](#bib-html "HTML Standard")\] grammar.

Note

For more information about specifying the required `height` and `width` properties, and their required values, refer to [8.2.2.6 Content document dimensions](#sec-fxl-content-dimensions).

Although the `viewport meta` tag allows EPUB creators to use properties other than `height` and `width`, and to not include values for these properties, such use is strongly discouraged. Setting other properties may have unintended consequences on the rendering of fixed-layout documents.

G. Schemas
----------

[](#app-schemas)

_This section is non-normative._

### G.1 Package document schema

[](#app-package-schema)

A schema for [package documents](#dfn-package-document) is available at [https://github.com/w3c/epubcheck/tree/master/src/main/resources/com/adobe/epubcheck/schema/30/package-30.nvdl](https://github.com/w3c/epubcheck/tree/master/src/main/resources/com/adobe/epubcheck/schema/30/package-30.nvdl).

Validation using this schema requires a processor that supports \[[nvdl](#bib-nvdl "ISO/IEC 19757-4: NVDL (Namespace-based Validation Dispatching Language)")\], \[[relaxng-schema](#bib-relaxng-schema "Information technology -- Document Schema Definition Language (DSDL) -- Part 2: Regular-grammar-based validation -- RELAX NG")\], \[[isoschematron](#bib-isoschematron "ISO/IEC 19757-3: Rule-based validation — Schematron")\] and \[[xmlschema-2](#bib-xmlschema-2 "XML Schema Part 2: Datatypes Second Edition")\].

Note

The NVDL schema layer can be substituted by a multi-pass validation using the embedded RELAX NG and ISO Schematron schemas alone.

Note

These schemas may be updated and corrected outside of formal revisions of this specification. As a result, they are subject to change at any time.

### G.2 OCF schemas

[](#app-ocf-schema)

#### G.2.1 Schema for `container.xml`

[](#app-schema-container)

A schema for [`container.xml` files](#sec-container-metainf-container.xml) is available at [`https://github.com/w3c/epubcheck/tree/master/src/main/resources/com/adobe/epubcheck/schema/30/ocf-container-30.nvdl`](https://github.com/w3c/epubcheck/tree/master/src/main/resources/com/adobe/epubcheck/schema/30/ocf-container-30.nvdl).

Validation using this schema requires a processor that supports \[[relaxng-schema](#bib-relaxng-schema "Information technology -- Document Schema Definition Language (DSDL) -- Part 2: Regular-grammar-based validation -- RELAX NG")\] and \[[xmlschema-2](#bib-xmlschema-2 "XML Schema Part 2: Datatypes Second Edition")\].

#### G.2.2 Schema for `encryption.xml`

[](#app-schema-encryption)

The schema for [`encryption.xml` files](#sec-container-metainf-encryption.xml) is included in \[[xmlsec-rngschema-20130411](#bib-xmlsec-rngschema-20130411 "XML Security RELAX NG Schemas")\].

#### G.2.3 Schema for `signatures.xml`

[](#app-schema-signatures)

The schema for [`signatures.xml` files](#sec-container-metainf-signatures.xml) is included in \[[xmlsec-rngschema-20130411](#bib-xmlsec-rngschema-20130411 "XML Security RELAX NG Schemas")\].

### G.3 Media overlays schema

[](#app-schema-overlays)

A schema for [media overlay documents](#dfn-media-overlay-document) is available at [https://github.com/w3c/epubcheck/tree/main/src/master/resources/com/adobe/epubcheck/schema/30/media-overlay-30.nvdl](https://github.com/w3c/epubcheck/tree/master/src/main/resources/com/adobe/epubcheck/schema/30/media-overlay-30.nvdl).

Validation using this schema requires a processor that supports \[[nvdl](#bib-nvdl "ISO/IEC 19757-4: NVDL (Namespace-based Validation Dispatching Language)")\], \[[relaxng-schema](#bib-relaxng-schema "Information technology -- Document Schema Definition Language (DSDL) -- Part 2: Regular-grammar-based validation -- RELAX NG")\], \[[isoschematron](#bib-isoschematron "ISO/IEC 19757-3: Rule-based validation — Schematron")\] and \[[xmlschema-2](#bib-xmlschema-2 "XML Schema Part 2: Datatypes Second Edition")\].

Note

The NVDL schema layer can be substituted by a multi-pass validation using the embedded RELAX NG and ISO Schematron schemas alone.

H. Detailed examples
--------------------

[](#app-examples)

_This section is non-normative._

### H.1 Resources

[](#publication-resources-example)

Consider the following extracts of a [package document](#dfn-package-document) and an [XHTML content document](#dfn-xhtml-content-document):

```
<package …>
    <metadata …>
        …
        <link rel="record"
            href="meta/data.xml"
            media-type="application/marc"/>
        <link rel="record"
            href="https://www.example.org/meta/data2.xml"
            media-type="application/marc"/>
        …
    </metadata>
    <manifest>
        …
        <item id="page"
            href="page.xhtml"
            media-type="application/xhtml+xml"/>
        <item id="nav"
            href="nav.xhtml"
            media-type="application/xhtml+xml"
            properties="nav"/>
        <item id="style"
            href="style.css"
            media-type="text/css"/>
        <item id="font_otf"
            href="fonts/font-file.otf"
            media-type="font/otf"/>
        <item id="font_otf_remote"
            href="https://www.example.org/fonts/font-file2.otf"
            media-type="font/otf"/>
        <item id="font_cff"
            href="fonts/font-file.cff"
            media-type="font/sfnt"/>
        <item id="pls"
            href="speech/cmn.pls"
            media-type="application/pls+xml"/>
        <item id="image_1"
            href="media/image_1.png"
            media-type="image/png"/>
        <item id="image_2"
            href="media/image_2.png"
            media-type="image/png"
            fallback="image_desc"/>
        <item id="image_desc"
            href="image_desc.xhtml"
            media-type="application/xhtml+xml"/>
        <item id="image_3_heic"
            href="media/image_3.heic"
            media-type="image/heic"/>
        <item id="image_3_png"
            href="media/image_3.png"
            media-type="image/png"/>
        <item id="widget"
            href="widget.xhtml"
            media-type="application/xhtml+xml"/>
        …
    </manifest>
    <spine>
        …
        <itemref idref="page_001"/>
        <itemref idref="image_2"/>
        …
    </spine>
</package>

<html …>
    <head …>
        …
        <link rel="stylesheet" type="text/css" href="style.css"/>
        <link rel="pronunciation" type="application/pls+xml" href="speech/cmn.pls"/>
        …
    </head>
    <body>
        <img src="media/image1_png"/>
        …
        <a href="media/image_2.png">…</a>
        …
        <picture>
            <source srcset="media/image_3.heic" type="image/heic"/>
            <img src="media/image_3.png"/>
        </picture>
        …
        <iframe src="widget.xhtml"></iframe>
        …
        <a href="https://www.example.org/some_content">…</a>
    </body>
</html>
```

The various resources in the [EPUB publication](#dfn-epub-publication) can be categorized as follows. (Refer to [3\. Publication resources](#sec-publication-resources) for more information about these categories.)

`meta/data.xml`

The resource is a metadata record, stored in the [EPUB container](#dfn-epub-container). It is linked via a ``[`link`](#dfn-link)`` element in the package document metadata. It is therefore a [linked resource](#dfn-linked-resource) on the [manifest plane](#dfn-manifest-plane) (i.e., is not listed in the [manifest](#dfn-epub-manifest)). It is not part on any other planes.

`https://www.example.org/meta/data2.xml`

The resource is a metadata record, stored remotely. It is linked via a ``[`link`](#dfn-link)`` element in the package document metadata. It is therefore a linked resource on the manifest plane, (i.e., it is not listed in the manifest). It is not part on any other planes.

`page.xhtml`

The resource is an XHTML document. It is listed in the \[\[EPUB spine | spine=\]. It is a [publication resource](#dfn-publication-resource) on the manifest plane, a [container resource](#dfn-container-resource), an [EPUB content document](#dfn-epub-content-document) on the [spine plane](#dfn-spine-plane), and is not present on the [content plane](#dfn-content-plane). No fallback is necessary.

`nav.xhtml`

The resource is the [EPUB navigation document](#dfn-epub-navigation-document). It is not listed in the spine. It is a publication resource on the manifest plane, a container resource, and is not present on either the spine plane or the content plane. No fallback is necessary.

`style.css`

The resource is a CSS file. It is not listed in the spine but is referenced from an \[[html](#bib-html "HTML Standard")\] [`link`](https://html.spec.whatwg.org/multipage/#the-link-element) element. It is a publication resource on the manifest plane, a container resource, is not present on the spine plane, and is a [core media type resource](#dfn-core-media-type-resource) on the content plane. No fallback is necessary.

`font/font-file.otf`

The resource is a TrueType font file. It is not listed in the spine but is referenced from a CSS file. It is a publication resource on the manifest plane, is a container resource, is not present on the spine plane, and is a core media type resource on the content plane. No fallback is necessary.

`https://www.example.org/fonts/font-file2.otf`

The resource is a TrueType font file. It is not listed in the spine but is referenced from a CSS file. It is a publication resource on the manifest plane, is a [remote resource](#dfn-remote-resource), is not present on the spine plane, and is a core media type resource on the content plane. No fallback is necessary.

`font/font-file.cff`

The resource is a font file in Compact Font Format. It is not listed in the spine but is referenced from a CSS file. Its media type is not listed as a [core media type](#sec-core-media-types). It is a publication resource on the manifest plane, a container resource, is not present on the spine plane, and is an [exempt resource](#dfn-exempt-resource) on the content plane. No fallback is necessary.

`speech/cmn.pls`

The resource is a Pronunciation Lexicon file. It is not listed in the spine but is referenced from an \[[html](#bib-html "HTML Standard")\] [`link`](https://html.spec.whatwg.org/multipage/#the-link-element) element. It is a publication resource on the manifest plane, a container resource, not present on the spine plane, and is an exempt resource on the content plane. No fallback is necessary.

`image/image_1.png`

The resource is a PNG image file. It is not listed in the spine but is referenced from an \[[html](#bib-html "HTML Standard")\] `[img](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element)` element. It is a publication resource on the manifest plane, a container resource, is not present on the spine plane, and is a core media type resource on the content plane. No fallback is necessary.

`image/image_2.png`

The resource is a PNG image file. It is referenced via an \[[html](#bib-html "HTML Standard")\] `[a](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element)` element. Because it is referenced from a hyperlink, it _must_ be listed in the spine. It is a publication resource on the manifest plane, a container resource, a [foreign content document](#dfn-foreign-content-document) on the spine plane, and a core media type resource on the content plane. As a foreign content document, a fallback is required, which is provided via a [manifest fallback](#sec-manifest-fallbacks).

`image_desc.xhtml`

The resource is an XHTML document. It is the "target" of a manifest fallback so is not explicitly listed in the spine (but it "replaces" the existing spine item when needed). It is a publication resource on the manifest plane, a container resource, an EPUB content document on spine plane, and, because it is not "used" when rendering another EPUB content document, it is not present on the content plane. No fallback is necessary.

`image/image_3.heic`

The resource is a High Efficiency (HEIC) image file. It is not listed in the spine but is referenced from an \[[html](#bib-html "HTML Standard")\] `[source](https://html.spec.whatwg.org/multipage/embedded-content.html#the-source-element)` element. Its media type is not listed as a [core media type](#sec-core-media-types). It is a publication resource on the manifest plane, a container resource, is not present on the spine plane, and is a foreign resource on the content plane. As a foreign resource, a fallback is required, which is provided via the sibling \[[html](#bib-html "HTML Standard")\] `[img](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element)` element in an \[[html](#bib-html "HTML Standard")\] `[picture](https://html.spec.whatwg.org/multipage/embedded-content.html#the-picture-element)` element.

`image/image_3.png`

The resource is a PNG image file. It is not listed in the spine but is referenced from an \[[html](#bib-html "HTML Standard")\] `[img](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element)` element that is used as an intrinsic fallback of the \[[html](#bib-html "HTML Standard")\] `[picture](https://html.spec.whatwg.org/multipage/embedded-content.html#the-picture-element)` element. It is a publication resource on the manifest plane, a container resource, is not present on the spine plane, and is a core media type resource on the content plane. No fallback is necessary.

`widget.xhtml`

The resource is an XHTML document. It is not listed in the spine but is referenced from an \[[html](#bib-html "HTML Standard")\] `[iframe](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element)` element. It is a publication resource on the manifest plane, a container resource, is not present on spine plane, and, because it is "used" when rendering another EPUB content document, a core media type resource on the content plane. No fallback is necessary.

`https://www.example.org/some_content`

The resource is referenced via an \[[html](#bib-html "HTML Standard")\] `[a](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element)` element and is not stored in the EPUB container. Reading systems will normally open this link via a separate browser instance. It is not on any planes defined by this specification.

Additional examples on the usage of different types of resources can be found in [5.6.2.2 Examples](#sec-item-elem-examples).

### H.2 Scripting contexts

[](#scripted-contexts-example)

Consider the following example [package document](#dfn-package-document):

```
<package …>
    …
    <manifest>
        …
        <item id="chap01"
            href="scripted01.xhtml"
            media-type="application/xhtml+xml"
            properties="scripted"/>
        <item id="inset01"
            href="scripted02.xhtml"
            media-type="application/xhtml+xml"
            properties="scripted"/>
        <item id="slideshowjs"
            href="slideshow.js"
            media-type="text/javascript"/>
    </manifest>

    <spine …>
        <itemref idref="chap01"/>
        …
    </spine>
    …
</package>
```

and the following file `scripted01.xhtml`:

```
<html …>
    <head>
        …
        <script type="text/javascript">
            const te = navigator.epubReadingSystem.hasFeature("touch-events");
            const te_message = te ? "passes" : "does not pass";
            alert(`The reading system ${te_message} touch events to the content.`);
        </script>
    </head>
    <body>
        …
        <iframe src="scripted02.xhtml" … />
        …
    </body>
</html>
```

and the following file `scripted02.xhtml`:

```
<html …>
    <head>
        …
        <script type="text/javascript" href="slideshow.js"></script>
    </head>
    <body>
        …
    </body>
</html>
```

From these examples, it is true that:

*   the code in the `script` element in the `head` in `scripted01.xhtml` is a [spine-level script](#sec-scripted-spine) because the document is referenced from the spine; and
    
*   the code in the `script` element in `scripted02.xhtml` is a [container-constrained script](#sec-scripted-container-constrained) because the XHTML document it occurs in is included in `scripted01.xhtml` via the `iframe` element.
    

### H.3 Packaged EPUB

[](#ocf-example)

This example demonstrates the use of the OCF format to contain a signed and encrypted [EPUB publication](#dfn-epub-publication) within an [OCF ZIP container](#dfn-ocf-zip-container).

Ordered list of files in the OCF ZIP container:

```
mimetype
META-INF/container.xml
META-INF/signatures.xml
META-INF/encryption.xml
EPUB/As_You_Like_It.opf
EPUB/book.html
EPUB/nav.html
EPUB/images/cover.png
```

The contents of the `mimetype` file

```
application/epub+zip
```

The contents of the `META-INF/container.xml` file

```
<?xml version="1.0"?>
<container
    version="1.0"
    xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
   <rootfiles>
      <rootfile
          full-path="EPUB/As_You_Like_It.opf"
          media-type="application/oebps-package+xml"/>
   </rootfiles>
</container>
```

The contents of the `META-INF/signatures.xml` file

```
<signatures
    xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
   <Signature
       Id="AsYouLikeItSignature"
       xmlns="http://www.w3.org/2000/09/xmldsig#">

      <!--
           SignedInfo is the information that is actually signed.
           In this case, the SHA-1 algorithm is used to sign the
           canonical form of the XML documents enumerated in the
           Object element below.
      -->

      <SignedInfo>
         <CanonicalizationMethod
             Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"/>
         <SignatureMethod
             Algorithm="http://www.w3.org/2000/09/xmldsig#dsa-sha1"/>
         <Reference
             URI="#AsYouLikeIt">
            <DigestMethod
                Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
            <DigestValue>
               …
            </DigestValue>
         </Reference>
      </SignedInfo>

      <!--
           The signed value of the digest above, using the DSA
           algorithm
      -->
      <SignatureValue>
         …
      </SignatureValue>

      <!--
           The key used to validate the signature
      -->
      <KeyInfo>
         <KeyValue>
            <DSAKeyValue>
               <P>…</P>
               <Q>…</Q>
               <G>…</G>
               <Y>…</Y>
            </DSAKeyValue>
         </KeyValue>
      </KeyInfo>

      <!--
           The list of resources to sign (note that the canonical
           form of XML documents is signed, while the binary form
           of all other resources is used)
      -->
      <Object>
         <Manifest
             Id="AsYouLikeIt">
            <Reference
                URI="EPUB/As_You_Like_It.opf">
               <Transforms>
                  <Transform
                      Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"/>
               </Transforms>
               <DigestMethod
                   Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
               <DigestValue>
               </DigestValue>
            </Reference>

            <Reference URI="EPUB/book.html">
               <Transforms>
                  <Transform
                      Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"/>
               </Transforms>
               <DigestMethod
                   Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
               <DigestValue>
               </DigestValue>
            </Reference>

            <Reference
                URI="EPUB/images/cover.png">
               <DigestMethod
                   Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
               <DigestValue>
               </DigestValue>
            </Reference>
         </Manifest>
      </Object>
   </Signature>
</signatures>
```

The contents of the `META-INF/encryption.xml` file

```
<?xml version="1.0"?>
<encryption
    xmlns="urn:oasis:names:tc:opendocument:xmlns:container"
    xmlns:enc="http://www.w3.org/2001/04/xmlenc#"
    xmlns:ds="http://www.w3.org/2000/09/xmldsig#">

   <!--
        The RSA-encrypted AES-128 symmetric key used to encrypt
        data enumerated in EncryptedData blocks below
   -->
   <enc:EncryptedKey
       Id="EK">
      <enc:EncryptionMethod
          Algorithm="http://www.w3.org/2001/04/xmlenc#rsa-1_5"/>
      <ds:KeyInfo>
         <ds:KeyName>
            John Smith
         </ds:KeyName>
      </ds:KeyInfo>
      <enc:CipherData>
         <enc:CipherValue>
            xyzabc…
         </enc:CipherValue>
      </enc:CipherData>
   </enc:EncryptedKey>

   <!--
        Each EncryptedData block identifies a single resource
        that has been encrypted using the AES-128 algorithm.
        The data remains stored, in its encrypted form, in the
        original file within the container.
   -->
   <enc:EncryptedData Id="ED1">
      <enc:EncryptionMethod
          Algorithm="http://www.w3.org/2001/04/xmlenc#kw-aes128"/>
      <ds:KeyInfo>
         <ds:RetrievalMethod
             URI="#EK"
             Type="http://www.w3.org/2001/04/xmlenc#EncryptedKey"/>
      </ds:KeyInfo>
      <enc:CipherData>
         <enc:CipherReference
             URI="EPUB/book.html"/>
      </enc:CipherData>
   </enc:EncryptedData>

   <enc:EncryptedData Id="ED2">
      <enc:EncryptionMethod
          Algorithm="http://www.w3.org/2001/04/xmlenc#kw-aes128"/>
      <ds:KeyInfo>
         <ds:RetrievalMethod
             URI="#EK" Type="http://www.w3.org/2001/04/xmlenc#EncryptedKey"/>
      </ds:KeyInfo>
      <enc:CipherData>
         <enc:CipherReference
             URI="EPUB/images/cover.png"/>
      </enc:CipherData>
   </enc:EncryptedData>
</encryption>
```

The contents of the `EPUB/As_You_Like_It.opf` file

```
<?xml version="1.0"?>
<package
    version="3.0"
    xml:lang="en"
    xmlns="http://www.idpf.org/2007/opf"
    unique-identifier="pub-id">

   <metadata
       xmlns:dc="http://purl.org/dc/elements/1.1/">

      <dc:identifier
          id="pub-id">
         urn:uuid:B9B412F2-CAAD-4A44-B91F-A375068478A0
      </dc:identifier>

      <dc:language>
         en
      </dc:language>

      <dc:title>
         As You Like It
      </dc:title>

      <dc:creator
          id="creator">
         William Shakespeare
      </dc:creator>

      <meta
          property="dcterms:modified">
         2000-03-24T00:00:00Z
      </meta>

      <dc:publisher>
         Project Gutenberg
      </dc:publisher>

      <dc:date>
         2000-03-24
      </dc:date>

      <meta
          property="dcterms:dateCopyrighted">
         9999-01-01
      </meta>

      <dc:identifier
          id="isbn13">
         urn:isbn:9780741014559
      </dc:identifier>

      <dc:identifier
          id="isbn10">
         0-7410-1455-6
      </dc:identifier>

      <link
          rel="xml-signature"
          href="../META-INF/signatures.xml#AsYouLikeItSignature"/>
   </metadata>

   <manifest>
      <item id="r4915"
          href="book.html"
          media-type="application/xhtml+xml"/>
      <item id="r7184"
          href="images/cover.png"
          media-type="image/png"/>
      <item id="nav"
          href="nav.html"
          media-type="application/xhtml+xml"
          properties="nav"/>
   </manifest>

   <spine>
      <itemref
          idref="r4915"/>
   </spine>
</package>
```

### H.4 Clock values

[](#clock-examples)

The following are examples of allowed clock values:

*   `5:34:31.396` = 5 hours, 34 minutes, 31 seconds, and 396 milliseconds
    
*   `124:59:36` = 124 hours, 59 minutes, and 36 seconds
    
*   `0:05:01.2` = 5 minutes, 1 second, and 200 milliseconds
    
*   `0:00:04` = 4 seconds
    
*   `09:58` = 9 minutes and 58 seconds
    
*   `00:56.78` = 56 seconds and 780 milliseconds
    
*   `76.2s` = 76.2 seconds = 76 seconds and 200 milliseconds
    
*   `7.75h` = 7.75 hours = 7 hours and 45 minutes
    
*   `13min` = 13 minutes
    
*   `2345ms` = 2345 milliseconds
    
*   `12.345` = 12 seconds and 345 milliseconds
    

I. Media type registrations
---------------------------

[](#app-media-types)

### I.1 The `application/oebps-package+xml` media type

[](#app-media-type-app-oebps-package)

This appendix registers the media type `application/oebps-package+xml` for the EPUB package document. This registration supersedes RFC4839 (see [https://www.rfc-editor.org/rfc/rfc4839](https://www.rfc-editor.org/rfc/rfc4839)).

The package document is an XML file that describes an EPUB publication. It identifies the resources in the EPUB publication and provides metadata information. The package document and its related specifications are maintained and defined by the [World Wide Web Consortium](https://www.w3.org) (W3C).

MIME media type name:

`application`

MIME subtype name:

`oebps-package+xml`

Required parameters:

None.

Optional parameters:

None.

Encoding considerations:

8bit if UTF-8; binary if UTF-16.

Package documents are in XML, represented either in UTF-8 or UTF-16. When the package document is written in UTF-8, the file is 8bit compatible. When it is written in UTF-16, the binary content-transfer-encoding must be used. For further details, see \[[rfc7303](#bib-rfc7303 "XML Media Types")\].

Security considerations:

Package documents contain well-formed XML conforming to the XML 1.0 specification.

Clearly, it is possible to author malicious files which, for example, contain malformed data. Most XML parsers protect themselves from such attacks by rigorously enforcing conformance.

All processors that read package documents should rigorously check the size and validity of data retrieved.

There is no current provision in the EPUB 3 specification for encryption, signing, or authentication within the package document format.

Interoperability considerations:

None.

Published specification:

This media type registration is for the EPUB package document, as described by the EPUB 3 specification located at [https://www.w3.org/TR/epub-33/](https://www.w3.org/TR/epub-33/).

The EPUB 3 specification supersedes the Open Packaging Format 2.0.1 specification, which is located at [https://idpf.org/epub/20/spec/OPF\_2.0.1\_draft.htm](https://idpf.org/epub/20/spec/OPF_2.0.1_draft.htm) and which also uses the `application/oepbs-package+xml` media type.

Applications which use this media type:

This media type is in wide use for the distribution of ebooks in the EPUB format.

Additional information:

Magic number(s):

none

File extension(s):

`.opf`

Macintosh File Type Code(s):

TEXT

Fragment identifiers:

EPUB Canonical Fragment Identifiers are custom fragment identifiers defined for [EPUB Publications](#dfn-epub-publication). They may be used to refer to an arbitrary content within any [publication resource](#dfn-publication-resource) defined for the publication. These identifiers are defined at [https://idpf.org/epub/linking/cfi/](https://idpf.org/epub/linking/cfi/).

Person & email address to contact for further information:

EPUB 3 Working Group (public-epub-wg@w3.org)

Intended usage:

COMMON

Author/Change controller:

World Wide Web Consortium (W3C)

### I.2 The `application/epub+zip` media type

[](#app-media-type)

This appendix registers the media type `application/epub+zip` for the EPUB Open Container Format (OCF).

An OCF ZIP container, or EPUB container, file is a container technology based on the zip archive format (see [https://pkware.cachefly.net/webdocs/casestudies/APPNOTE.TXT](https://pkware.cachefly.net/webdocs/casestudies/APPNOTE.TXT)). It is used to encapsulate the EPUB publication. OCF and its related standards are maintained and defined by the [World Wide Web Consortium](https://www.w3.org) (W3C).

MIME media type name:

`application`

MIME subtype name:

`epub+zip`

Required parameters:

None.

Optional parameters:

None.

Encoding considerations:

OCF ZIP container files are binary files encoded in the [`application/zip`](https://www.iana.org/assignments/media-types/application/zip) media type.

Security considerations:

All processors that read OCF ZIP container files should rigorously check the size and validity of data retrieved.

In addition, because of the various content types that can be embedded in OCF ZIP container files, `application/epub+zip` may describe content that poses security implications beyond those noted here. However, only in cases where the processor recognizes and processes the additional content, or where further processing of that content is dispatched to other processors, would security issues potentially arise. In such cases, matters of security would fall outside the domain of this registration document.

Security considerations that apply to `application/zip` also apply to OCF ZIP container files.

Interoperability considerations:

None.

Published specification:

This media type registration is for the EPUB Open Container Format (OCF), as described by the EPUB 3 specification located at [`https://www.w3.org/TR/epub-33/`](https://www.w3.org/TR/epub-33/).

The EPUB 3 specification supersedes both [RFC 4839](https://datatracker.ietf.org/doc/html/rfc4839) and the Open Container Format 2.0.1 specification, which is located at [`https://idpf.org/epub/20/spec/OCF_2.0.1_draft.doc`](https://idpf.org/epub/20/spec/OCF_2.0.1_draft.doc), and which also uses the `application/epub+zip` media type.

Applications that use this media type:

This media type is in wide use for the distribution of ebooks in the EPUB format.

Additional information:

Magic number(s):

0: `PK 0x03 0x04`, 30: `mimetype`, 38: `application/epub+zip`

File extension(s):

OCF ZIP container files are most often identified with the extension `.epub`.

Macintosh file type code(s):

ZIP

Fragment identifiers:

EPUB Canonical Fragment Identifiers are custom fragment identifiers defined for [EPUB Publications](#dfn-epub-publication). They may be used to refer to an arbitrary content within any [publication resource](#dfn-publication-resource) defined for the publication. These identifiers are defined at [https://idpf.org/epub/linking/cfi/](https://idpf.org/epub/linking/cfi/).

Person & email address to contact for further information:

EPUB 3 Working Group (public-epub-wg@w3.org)

Intended usage:

COMMON

Author/change controller:

World Wide Web Consortium (W3C)

J. Index
--------

[](#index)

### J.1 Terms defined by this specification

[](#index-defined-here)

*   [`audio`](#dfn-audio) §9.2.2.8
*   [`body`](#dfn-body) §9.2.2.4
*   [codec](#dfn-codec) §1.4
*   [`collection`](#dfn-collection) §5.8.1
*   [`Compression`](#dfn-compression) §4.2.6.3.2.2
*   [`container`](#dfn-container) §4.2.6.3.1.1
*   [container resource](#dfn-container-resource) §1.4
*   [container root URL](#dfn-container-root-url) §1.4
*   [content plane](#dfn-content-plane) §3.1.3
*   [content URL](#dfn-content-url) §1.4
*   [core media type resource](#dfn-core-media-type-resource) §1.4
*   [`dc:contributor`](#dfn-dc-contributor) §5.5.3.2.2
*   [`dc:creator`](#dfn-dc-creator) §5.5.3.2.3
*   [`dc:date`](#dfn-dc-date) §5.5.3.2.4
*   [`dc:identifier`](#dfn-dc-identifier) §5.5.3.1.1
*   [`dc:language`](#dfn-dc-language) §5.5.3.1.3
*   [`dc:subject`](#dfn-dc-subject) §5.5.3.2.5
*   [`dc:title`](#dfn-dc-title) §5.5.3.1.2
*   [`dc:type`](#dfn-dc-type) §5.5.3.2.6
*   [dcterms:modified](#dfn-dcterms-modified) §5.5.5
*   [`EncryptedData`](#dfn-encrypteddata) §4.2.6.3.2.1
*   [`EncryptedKey`](#dfn-encryptedkey) §4.2.6.3.2.1
*   [`encryption`](#dfn-encryption) §4.2.6.3.2.1
*   [EPUB conformance checker](#dfn-epub-conformance-checker) §1.4
*   [EPUB container](#dfn-epub-container) §1.4
*   [EPUB content document](#dfn-epub-content-document) §1.4
*   [EPUB creator](#dfn-epub-creator) §1.4
*   [EPUB manifest](#dfn-epub-manifest) §1.4
*   [EPUB navigation document](#dfn-epub-navigation-document) §1.4
*   [EPUB publication](#dfn-epub-publication) §1.4
*   [EPUB reading system](#dfn-epub-reading-system) §1.4
*   [EPUB spine](#dfn-epub-spine) §1.4
*   [`epub:type`](#dfn-epub-type) §C.2
*   [exempt resource](#dfn-exempt-resource) §1.4
*   [file name](#dfn-file-name) §1.4
*   [file path](#dfn-file-path) §1.4
*   [fixed-layout document](#dfn-fixed-layout-document) §1.4
*   [foreign content document](#dfn-foreign-content-document) §1.4
*   [foreign resource](#dfn-foreign-resource) §1.4
*   [`head`](#dfn-head) §9.2.2.2
*   [`item`](#dfn-item) §5.6.2
*   [`itemref`](#dfn-itemref) §5.7.2
*   [`link`](#dfn-link) §5.5.6
*   [linked resource](#dfn-linked-resource) §1.4
*   [`links`](#dfn-links) §4.2.6.3.1.4
*   [`manifest`](#dfn-manifest) §5.6.1
*   [manifest fallback chain](#dfn-manifest-fallback-chain) §3.5.1
*   [manifest plane](#dfn-manifest-plane) §3.1.1
*   [media overlay document](#dfn-media-overlay-document) §1.4
*   [`meta`](#dfn-meta) §5.5.4
*   [`metadata`](#dfn-metadata) §5.5.1
*   [non-codec](#dfn-non-codec) §1.4
*   [OCF abstract container](#dfn-ocf-abstract-container) §1.4
*   [OCF ZIP container](#dfn-ocf-zip-container) §1.4
*   [`package`](#dfn-package) §5.4
*   [package document](#dfn-package-document) §1.4
*   [`par`](#dfn-par) §9.2.2.6
*   [publication resource](#dfn-publication-resource) §1.4
*   [remote resource](#dfn-remote-resource) §1.4
*   [root directory](#dfn-root-directory) §1.4
*   [`rootfile`](#dfn-rootfile) §4.2.6.3.1.3
*   [`rootfiles`](#dfn-rootfiles) §4.2.6.3.1.2
*   [scripted content document](#dfn-scripted-content-document) §1.4
*   [`seq`](#dfn-seq) §9.2.2.5
*   [`signatures`](#dfn-signatures) §4.2.6.3.6.1
*   [`smil`](#dfn-smil) §9.2.2.1
*   [`spine`](#dfn-spine) §5.7.1
*   [spine plane](#dfn-spine-plane) §3.1.2
*   [SVG content document](#dfn-svg-content-document) §1.4
*   [synthetic spread](#dfn-synthetic-spread) §1.4
*   [`text`](#dfn-text) §9.2.2.7
*   [top-level content document](#dfn-top-level-content-document) §1.4
*   [unique identifier](#dfn-unique-identifier) §1.4
*   [valid-relative-ocf-URL-with-fragment string](#dfn-valid-relative-container-url-with-fragment-string) §4.2.5
*   [value](#dfn-value) §5.5.2
*   [viewport](#dfn-viewport) §1.4
*   [XHTML content document](#dfn-xhtml-content-document) §1.4

### J.2 Terms defined by reference

[](#index-defined-elsewhere)

*   \[[BCP47](#bib-bcp47)\] defines the following:
    *   well-formed language tag
*   \[[BIDI](#bib-bidi)\] defines the following:
    *   base direction
*   \[[CHARMOD-NORM](#bib-charmod-norm)\] defines the following:
    *   Unicode Canonical Case Fold Normalization Step
*   \[[CSS-TEXT-3](#bib-css-text-3)\] defines the following:
    *   hyphens property
    *   line-break property
    *   text-align-last property
    *   text-transform property
    *   word-break property
*   \[[CSS-TEXT-DECOR-3](#bib-css-text-decor-3)\] defines the following:
    *   text-emphasis-color property
    *   text-emphasis-position property
    *   text-emphasis-style property
    *   text-underline-position property
*   \[[CSS-WRITING-MODES-3](#bib-css-writing-modes-3)\] defines the following:
    *   direction property
    *   text-combine-upright property
    *   text-orientation property
    *   unicode-bidi property
    *   writing-mode property
*   \[[CSS2](#bib-css2)\] defines the following:
    *   number
*   \[[DOM](#bib-dom)\] defines the following:
    *   child text content
*   \[[EPUB-A11Y-11](#bib-epub-a11y-11)\] defines the following:
    *   EPUB Accessibility
*   \[[EPUB-MULTI-REND-11](#bib-epub-multi-rend-11)\] defines the following:
    *   creating multiple renditions
*   \[[EPUB-OVERVIEW-33](#bib-epub-overview-33)\] defines the following:
    *   EPUB 3 Overview
    *   Rendering and CSS
*   \[[EPUB-RS-33](#bib-epub-rs-33)\] defines the following:
    *   Core media types
    *   EPUB 3 Reading Systems
    *   epubReadingSystem object
    *   fixed-layout documents
    *   Navigation document processing
    *   processing
    *   reading system support requirements for fonts
    *   reflowable documents set to scroll
    *   Scripting
    *   security and privacy section
    *   table reading mode
    *   unique origin requirement
    *   virtual in nature
*   \[[EPUB-SSV-11](#bib-epub-ssv-11)\] defines the following:
    *   aside
    *   bodymatter
    *   endnote
    *   figure
    *   footnote
    *   landmarks
    *   list
    *   page-list
    *   pagebreak term
    *   table
    *   toc
*   \[[EPUB-TTS-10](#bib-epub-tts-10)\] defines the following:
    *   EPUB 3 Text-to-Speech Support
*   \[[HTML](#bib-html)\] defines the following:
    *   `a` element
    *   `area` element
    *   audio
    *   `base` element
    *   `bdo` element
    *   body
    *   `canvas` element
    *   `content` attribute (for `meta` element)
    *   cookies
    *   data blocks
    *   depends on
    *   `dir` attribute (for `html-global` element)
    *   `div` element
    *   document base URL
    *   `embed` element
    *   embedded content
    *   flow content
    *   `form` element
    *   h1-h6
    *   head
    *   `hidden` attribute (for `html-global` element)
    *   `href` attribute (for `a` element)
    *   `html` element
    *   HTML alternate keyword
    *   HTML standard
    *   `iframe` element
    *   `img` element
    *   `li` element
    *   link
    *   media element
    *   meta
    *   metadata content
    *   microdata attributes
    *   `name` attribute (for `meta` element)
    *   `nav` element
    *   `object` type
    *   `ol` element
    *   origin
    *   palpable content
    *   phrasing content
    *   `picture` element
    *   restrictions on SVG
    *   `role` attribute
    *   `rp` element
    *   `script` element
    *   `source` element
    *   `span` element
    *   `src` attribute (for `source` element)
    *   `src` attribute (for `img` element)
    *   `srcset` attribute (for `source` element)
    *   `srcset` attribute (for `img` element)
    *   top-level browsing context
    *   `track` element
    *   `type` attribute (for `source` element)
    *   vendor-neutral extensions
    *   `video` element
    *   video
    *   web storage
    *   XML syntax
*   \[[INFRA](#bib-infra)\] defines the following:
    *   concatenation
    *   definition of whitespace
    *   HTML namespace
    *   list
    *   prepend (for `list`)
    *   scalar value strings
    *   strip and collapse ascii whitespace
    *   strip leading and trailing ascii whitespace
*   \[[INTERNATIONAL-SPECS](#bib-international-specs)\] defines the following:
    *   "Truncating or limiting the length of strings"
*   \[[JSON-LD11](#bib-json-ld11)\] defines the following:
    *   linked data
*   \[[MATHML3](#bib-mathml3)\] defines the following:
    *   Content MathML
    *   Presentation MathML
*   \[[RFC2397](#bib-rfc2397)\] defines the following:
    *   data: URL scheme
*   \[[RFC8089](#bib-rfc8089)\] defines the following:
    *   file: URL scheme
*   \[[SMIL3](#bib-smil3)\] defines the following:
    *   clock value
*   \[[SVG](#bib-svg)\] defines the following:
    *   renderable elements
    *   `svg` element
    *   `title` element
*   \[[UAAG20](#bib-uaag20)\] defines the following:
    *   Guideline 1.4 - Provide text configuration
*   \[[URL](#bib-url)\] defines the following:
    *   absolute-url string
    *   absolute-url-with-fragment string
    *   base
    *   domain
    *   double-dot URL path segments
    *   path-relative-scheme-less-url string
    *   percent encoded
    *   relative-url string
    *   relative-URL-with-fragment strings
    *   URL
    *   url parser
    *   URL Serializer
    *   url-fragment string
    *   valid URL string
*   \[[XML](#bib-xml)\] defines the following:
    *   2.12 Language Identification
    *   document type declaration
    *   external entity
    *   external identifier
    *   ID
    *   IDREF
    *   public
    *   root element
    *   section 2.3 of the XML 1.0 specification
    *   system identifiers
    *   whitespace characters
    *   whitespace normalization
*   \[[XML-NAMES](#bib-xml-names)\] defines the following:
    *   Conformance of Documents
    *   prefixed
*   \[[XMLDSIG-CORE](#bib-xmldsig-core)\] defines the following:
    *   Section 6.6.4
*   \[[XMLDSIG-CORE1](#bib-xmldsig-core1)\] defines the following:
    *   Section 2
*   \[[XMLENC-CORE1](#bib-xmlenc-core1)\] defines the following:
    *   Section 2.2.1

K. Change log
-------------

[](#change-log)

_This section is non-normative._

Note that this change log only identifies substantive changes since [EPUB 3.2](https://www.w3.org/publishing/epub32/) — those that may affect the conformance of [EPUB publications](#dfn-epub-publication).

For a list of all issues addressed, refer to the [Working Group's issue tracker](https://github.com/w3c/epub-specs/issues?q=is%3Aissue%20is%3Aclosed%20label%3AEPUB33%20label%3ASpec-EPUB3%20).

Substantive changes since the [Recommendation](https://www.w3.org/TR/2023/REC-epub-33-20230525/) of 2023-05-25

*   16-July-2024: Fixed the definition of whitespace allowed in viewport meta tags to refer to the characters allowed by the XML standard. See [issue 2637](https://github.com/w3c/epub-specs/issues/2637).
*   25-July-2023: Updated where the `epub:type` is allowed on SVGs to use the definition of a renderable element. See [issue 2556](https://github.com/w3c/epub-specs/issues/2556).
*   25-July-2023: Clarified the definitions of embedded SVGs and moved the restriction on where the `epub:type` attribute is allowed to apply so it applies to all SVG definitions. See [issue 2555](https://github.com/w3c/epub-specs/issues/2555).

Substantive changes since the [Candidate Recommendation](https://www.w3.org/TR/2023/CR-epub-33-20230221/) of 2023-02-21

*   17-March-2023: replaced the deprecated JavaScript attribute `name` by `hasFeature` in an example. See [issue 2543](https://github.com/w3c/epub-specs/issues/2543).

Substantive changes since the [Candidate Recommendation](https://www.w3.org/TR/2022/CR-epub-33-20220512/) of 2022-05-12

*   11-Jan-2023: Marked the `dir` attribute under-implemented due to lack of support in reading systems. See [pull request 2515](https://github.com/w3c/epub-specs/pull/2515).
*   09-Jan-2023: Fixed incorrect OPUS media type. See [issue 2516](https://github.com/w3c/epub-specs/issues/2516).
*   05-Jan-2023: Removed the precedence rules for linked records as reading systems do not support their processing. See [pull request 2512](https://github.com/w3c/epub-specs/pull/2512).
*   16-Dec-2022: Clarified that the special files for processing the OCF container are not listed in the manifest, so the restriction that the manifest only list publication resources is not needed. See [pull request 2506](https://github.com/w3c/epub-specs/pull/2506).
*   12-Dec-2022: Clarified that fixed layout height and width declarations must be in the first `viewport meta` tag. See [pull request 2503](https://github.com/w3c/epub-specs/pull/2503).
*   08-Dec-2022: Removed the `acquire` and `xmp` properties after finding no evidence these are used by publishers or reading systems. See [issue 2489](https://github.com/w3c/epub-specs/issues/2489).
*   29-Nov-2022: Clarified that data URLs are not unique publication resources, and not allowed in the package document, but are subject to fallback requirements. See [issue 2485](https://github.com/w3c/epub-specs/issues/2485).
*   29-Nov-2022: Clarified the `epub:type` attribute is not allowed on the `head` element and metadata content in XHTML content documents. See [issue 2486](https://github.com/w3c/epub-specs/issues/2486).
*   17-Nov-2022: Updated file paths and names to identify that they are scalar value strings in the OCF abstract container, not just case sensitive. See [issue 2461](https://github.com/w3c/epub-specs/issues/2461).
*   11-Nov-2022: Added caution about reading systems not retaining HTML element-based rendering instructions in navigation document elements. See [issue 2477](https://github.com/w3c/epub-specs/issues/2477).
*   02-Nov-2022: Removed the restriction on deprecated characters in the Tags and Variation Selectors Supplement and replaced with a general note to avoid the use of characters already deprecated by the Unicode standard, as the list changes over time. See [issue 2469](https://github.com/w3c/epub-specs/issues/2469).
*   20-Oct-2022: Removed requirement to encode file names in abstract container in UTF-8 as it is not possible in the abstract and is already covered by a ZIP container requirement. See [issue 2461](https://github.com/w3c/epub-specs/issues/2461).
*   17-Oct-2022: Added recommendation against using spaces in file paths and names. See [issue 2458](https://github.com/w3c/epub-specs/issues/2458).
*   15-Oct-2022: Allow properties without values in `viewport meta` tag definition. See [pull request 2457](https://github.com/w3c/epub-specs/pull/2457).
*   11-Oct-2022: Added additional requirement that `viewport meta` height and width not be declared multiple times. See [issue 2442](https://github.com/w3c/epub-specs/issues/2442).
*   21-Sept-2022: Made the requirement to declare property prefixes explicit. See [issue 2438](https://github.com/w3c/epub-specs/issues/2438).
*   19-Sept-2022: Removed minor contradictions in the `epub:type` attribute usage definitions. See [issue 2434](https://github.com/w3c/epub-specs/issues/2434).
*   14-Sept-2022: Combined the legacy feature section into the package document definition. See [issue 2423](https://github.com/w3c/epub-specs/issues/2423).
*   14-Sept-2022: Clarified that the `href` attribute in the package document must not be used to reference other package document elements (i.e., to indirectly reference a resource via its manifest or spine entry). See [issue 2420](https://github.com/w3c/epub-specs/issues/2420).
*   14-Sept-2022: Re-establish that empty reference and property values are not valid to ensure that metadata properties do not consist only of prefixes. See [issue 2417](https://github.com/w3c/epub-specs/issues/2417).
*   14-Sept-2022: Added a new section for expressing all the primary navigation document content requirements. See [issue 2421](https://github.com/w3c/epub-specs/issues/2421).
*   7-Sept-2022: Added clarifying requirement that the manifest only list publication resources. See [issue 2413](https://github.com/w3c/epub-specs/issues/2413).
*   28-Aug-2022: Added a note to Media Overlays `text` element definition regarding using embedded timed media. See [issue 2397](https://github.com/w3c/epub-specs/issues/2397).
*   02-Aug-2022: Updated the media type registrations, following the [official IANA review comments](https://lists.w3.org/Archives/Public/public-epub-wg/2022Aug/0000.html) on updating the previous registrations. See [issue 1398](https://github.com/w3c/epub-specs/issues/1398).
*   28-July-2022: The restrictions on the elements where `epub:type` may be used has been made explicit. See [issue 2377](https://github.com/w3c/epub-specs/issues/2377).
*   18-July-2022: The viewport `meta` element for specifying the initial containing boundary in fixed-layout documents is now formally defined. See [issue 2292](https://github.com/w3c/epub-specs/issues/2292).
*   14-July-2022: Clarified that the markup in the SVG `title` element is restricted to HTML elements. See [issue 2355](https://github.com/w3c/epub-specs/issues/2355).
*   10-June-2022: Clarified that data blocks are exempt from fallback requirements. See [issue 2331](https://github.com/w3c/epub-specs/issues/2331).
*   07-June-2022: The usage of File URLs has been disallowed. See [issue 2324](https://github.com/w3c/epub-specs/issues/2324).
*   07-June-2022: Media type registration sections are now normative. See [issue 2313](https://github.com/w3c/epub-specs/issues/2313).
*   07-June-2022: Updated privacy and security recommendations to use normative language. See [pull request 2297](https://github.com/w3c/epub-specs/pull/2297).
*   27-May-2022: Added recommendation to only reference remote resources via https. See [issue 2263](https://github.com/w3c/epub-specs/issues/2263).
*   20-May-2022: Add recommendation not to store sensitive user data in persistent storage, and to encrypt it if there is no other choice. See [issue 2264](https://github.com/w3c/epub-specs/issues/2264).
*   17-May-2022: Added an index of terms. See [issue 2260](https://github.com/w3c/epub-specs/issues/2260).

Substantive changes since [EPUB 3.2](https://www.w3.org/publishing/epub32/)

*   12-Apr-2022: Added note about complexities of escaping from nested escapable structures and updated the list of semantics to use for escaping to match the guidance. See [issue 2221](https://github.com/w3c/epub-specs/issues/2221).
*   6-Apr-2022: Removed the restrictions on the value of the `authority` property and added a note referencing the old IDPF registry. See [issue 2200](https://github.com/w3c/epub-specs/issues/2120).
*   31-Mar-2022: Removed the restriction on deprecated MathML features and added a general caution that any technology may make changes that can cause an EPUB publication to become invalid. See [issue 2118](https://github.com/w3c/epub-specs/issues/2118).
*   31-Mar-2022: Reformulated custom attributes as a content authoring feature and added a new section on custom rendering properties. See [issue 2134](https://github.com/w3c/epub-specs/issues/2134).
*   25-Mar-2022: Fixed conflicting statements about the requirement for semantics in media overlay documents and clarified requirements for skippability and escapability. See [issue 2066](https://github.com/w3c/epub-specs/issues/2066).
*   22-Mar-2022: Removed the recommendation that reading systems recognize the built-in `collection-type` values and replaced with a note about enabling improved handling of related content. See [issue 2071](https://github.com/w3c/epub-specs/issues/2071).
*   21-Mar-2022: Add a tolerance of one second for the sum of the individual media overlay docuemnts matching the total duration. See [issue 2093](https://github.com/w3c/epub-specs/issues/2093).
*   17-Mar-2022: Deprecate the creation of new collection types. See [issue 2060](https://github.com/w3c/epub-specs/pull/2060).
*   17-Mar-2022: Removed dated requirements on the use of `epub:type` that suggest equivalence with ARIA roles. See [issue 2070](https://github.com/w3c/epub-specs/pull/2070).
*   16-Mar-2022: Add new section on conformance checking and definition for EPUB conformance checker. See [pull request 2025](https://github.com/w3c/epub-specs/pull/2025).
*   14-Mar-2022: Renamed the term "valid-relative-container-URL-with-fragment" to "valid-relative-ocf-URL-with-fragment string". See [issue 2076](https://github.com/w3c/epub-specs/issues/2076).
*   09-Mar-2022: Restore requirement that valid-relative-container-URL-with-fragment strings resolve to resources in the OCF abstract container. See [issue 2024](https://github.com/w3c/epub-specs/issues/2024).
*   09-Mar-2022: Added NCX doctype to allowed external identifiers. See [issue 2045](https://github.com/w3c/epub-specs/issues/2045).
*   08-Mar-2022: Require use of the fixed layout property values defined in this specification. See [issue 2039](https://github.com/w3c/epub-specs/issues/2039).
*   08-Mar-2022: Clarified that the refines attribute must not be used with global fixed layout property declarations. See [issue 2036](https://github.com/w3c/epub-specs/issues/2036).
*   07-Mar-2022: Consolidated the usage requirements for manifest properties into a new Resource Properties section. See [issue 2030](https://github.com/w3c/epub-specs/issues/2030).
*   05-Mar-2022: Forbid circular references and self-references in refinement chains. See [issue 2031](https://github.com/w3c/epub-specs/issues/2031).
*   19-Feb-2022: Clarified the ``[`audio`](#dfn-audio)`` element's definition by making it optional and adapted the specification's text elsewhere to address the situation when the element is indeed not present. See [issue 1986](https://github.com/w3c/epub-specs/issues/1986).
*   04-Feb-2022: Expanded the section on security and privacy to include new sections on the threat model for EPUB publications and additional recommendations for ensuring security and privacy. See [issue 1871](https://github.com/w3c/epub-specs/issues/1871), [issue 1872](https://github.com/w3c/epub-specs/issues/1872), [issue 1875](https://github.com/w3c/epub-specs/issues/1875) and [issue 1876](https://github.com/w3c/epub-specs/issues/1876).
*   21-Jan-2022: term "risky", used for the class of unsupported features, has been renamed to "under-implemented". See the [WG resolution](https://www.w3.org/publishing/groups/epub-wg/Meetings/Minutes/2022-01-20-epub#resolution1).
*   08-Dec-2021: The `page-spread-center` property is now an alias for `spread-none`. See [issue 1929](https://github.com/w3c/epub-specs/issues/1929).
*   03-Dec-2021: Added a new risky class for unsupported features. See [issue 1944](https://github.com/w3c/epub-specs/issues/1944).
*   03-Dec-2021: Remove the element-based restrictions on remote resources. See [issue 1913](https://github.com/w3c/epub-specs/issues/1913).
*   01-Dec-2021: Deprecated the use of `page-spread-center`. It is now an alias for `spread-none`. See [issue 1929](https://github.com/w3c/epub-specs/issues/1929).
*   26-Nov-2021: A requirement and an algorithm to detect out-of-container URLs has been added to the specification. See [issue 1912](https://github.com/w3c/epub-specs/issues/1912).
*   18-Nov-2021: Change to only disallow deprecated characters in the Tags and Variation Selectors Supplement. See [issue 1885](https://github.com/w3c/epub-specs/issues/1885).
*   12-Nov-2021: Change the recommendation to use SHA-1 to encrypt the obfuscation key to a requirement. See [issue 1873](https://github.com/w3c/epub-specs/issues/1873).
*   12-Nov-2021: Restrict the obfuscation algorithm to fonts and add caution to use better protection methods whenever possible. See [issue 1873](https://github.com/w3c/epub-specs/issues/1873).
*   12-Nov-2021: Removed the statement about rights.xml being reserved for future standardization of DRM information. See [issue 1874](https://github.com/w3c/epub-specs/issues/181).
*   10-Nov-2021: Proper definition of the content URL and handling of relative URLs. See [issue 1374](https://github.com/w3c/epub-specs/issues/1374) and [issue 1888](https://github.com/w3c/epub-specs/issues/1888)
*   29-Oct-2021: Recommended that EPUB creators not use path-absolute-URL strings for referencing resources due to the lack of a consistent root. See [issue 1681](https://github.com/w3c/epub-specs/issues/1681).
*   18-Oct-2021: Clarified the contexts from which remote resources may be referenced. See [issue 1857](https://github.com/w3c/epub-specs/issues/1857).
*   12-Oct-2021: The Structure Semantics Vocabulary has been moved into a separate Working Group Note. See [issue 1763](https://github.com/w3c/epub-specs/issues/1763).
*   27-Aug-2021: Add clarifications for including landmarks, such as limiting the number, recommending known semantics, and ensuring the labels are human readable. Also added recommendation to not include nested lists to match the page list. See [issue 1761](https://github.com/w3c/epub-specs/issues/1761).
*   22-July-2021: Clarified TTS handling of images in media overlays. See [issue 1745](https://github.com/w3c/epub-specs/issues/1745).
*   09-July-2021: Restored the custom attributes section due to known usage but without reference to the attribute registry. See [issue 1602](https://github.com/w3c/epub-specs/issues/1602).
*   09-July-2021: Added the "Relationship to URL" section to explain the use of URL standard terminology in this document relative to resource formats that do not reference it. See [issue 1726](https://github.com/w3c/epub-specs/issues/1726).
*   05-July-2021: Removed the section on private use area characters from the XHTML restrictions. The issues are more complex than what is covered and not in scope of EPUB to define. See [issue 1732](https://github.com/w3c/epub-specs/issues/1732).
*   28-June-2021: Added a note discouraging EPUB creators from referencing resources outside the directory containing the package document to avoid interoperability issues. See [issue 1687](https://github.com/w3c/epub-specs/issues/1687)
*   23-June-2021: Added the `base` element to the list of discouraged XHTML constructs. See [issue 1699](https://github.com/w3c/epub-specs/issues/1699).
*   18-June-2021: Moved requirements for authoring SSML, PLS lexicons and CSS 3 Speech to the [EPUB 3 Text-to-Speech Enhancements](https://www.w3.org/TR/epub-tts-10/) note. The ability to use these technologies in EPUB 3 publications remains unchanged. See [issue 1690](https://github.com/w3c/epub-specs/issues/1690).
*   16-June-2021: Absolute URLs with `file` scheme should not be used on manifest items. See [issue 1688](https://github.com/w3c/epub-specs/issues/1688).
*   31-May-2021: Require Unicode normalization and full case folding (in this order) for file name uniqueness comparisons. See [issue 1631](https://github.com/w3c/epub-specs/issues/1631) and [pull request 1648](https://github.com/w3c/epub-specs/pull/1648).
*   31-May-2021: Confirmed that SVG content documents do not have to be valid to the SVG specification, only meet the well-formedness and ID requirements currently referenced and the restrictions imposed by this specification. See [issue 1323](https://github.com/w3c/epub-specs/issues/1323).
*   12-May-2021: Clarified that manifest items must not contain fragment identifiers. See [issue 1303](https://github.com/w3c/epub-specs/issues/1303).
*   12-May-2021: Changed all references to URIs/IRIs to URLs and references to RFCs 3986 and 3987 to the URL standard. See [issue 808](https://github.com/w3c/epub-specs/issues/808).
*   08-May-2021: Added clarifying text that `link` element can be used to link individual metadata properties in an alternative format. See [issue 1666](https://github.com/w3c/epub-specs/issues/1666).
*   06-May-2021: Noted that the working group will no longer maintain the publication type and collection role registries and removed dependence on the latter for validating collection types (use of NMToken values remains restricted to extension specifications). The registry of authority codes is now integrated into the property definition. See [pull request 1664](https://github.com/w3c/epub-specs/pull/1664).
*   06-May-2021: Added `application/ecmascript` as a core media type for scripts. See [issue 1353](https://github.com/w3c/epub-specs/issues/1353).
*   06-May-2021: Added new section on fragment identifiers to media overlays and now recommend HTML target element references and SVG fragment identifiers instead of requiring conformance to the incompatible XPointer Shorthand syntax. See [issue 1586](https://github.com/w3c/epub-specs/issues/1586).
*   28-Apr-2021: Drop requirement for resources referenced from HTML `link` elements to have core media type fallbacks. See [issue 1312](https://github.com/w3c/epub-specs/issues/1312).
*   22-Apr-2021: The usage of UTF-16 for CSS and XML has been changed, UTF-8 is the recommended encoding. See [issue 1628](https://github.com/w3c/epub-specs/issues/1628).
*   19-Apr-2021: The use of custom attributes in EPUB content documents is no longer supported. See [issue 1602](https://github.com/w3c/epub-specs/issues/1602).
*   13-Apr-2021: Require path names in OCF to also be UTF-8 encoded. See [issue 1630](https://github.com/w3c/epub-specs/issues/1630).
*   12-Apr-2021: Added a reference to the SVG `direction` attribute in [6.3.1.2 CSS requirements](#sec-css-req). See [issue 1614](https://github.com/w3c/epub-specs/issues/1613).
*   09-Apr-2021: Added a new section dedicated to accessibility in EPUB publications.
*   04-May-2021: Removed requirements around SVG `requiredExtensions` attribute. See [issue 1087](https://github.com/w3c/epub-specs/issues/1087).
*   26-Mar-2021: Removed requirement for page list ordering to reflect the order of page breaks in the content. See [issue 1500](https://github.com/w3c/epub-specs/issues/1500).
*   26-Mar-2021: Allowed `dc:creator` and `dc:contributor` elements to have multiple roles and allowed roles for `publisher`. See [issue 1129](https://github.com/w3c/epub-specs/issues/1129) and [issue 1583](https://github.com/w3c/epub-specs/issues/1583)
*   23-Mar-2021: Clarified the requirements for the use of data URLs in EPUB publications. See [issue 1564](https://github.com/w3c/epub-specs/issues/1564).
*   17-Mar-2021: Include non characters at the end of the supplementary planes in list of characters not allowed in file names. See [issue 1538](https://github.com/w3c/epub-specs/issues/1538).
*   15-Mar-2021: Removed the normative dependencies on XML schemas and added element and attribute definitions for the `container.xml`, `encryption.xml` and `signatures.xml` files. All schemas are considered non-normative. See [issue 1566](https://github.com/w3c/epub-specs/issues/1566).
*   10-Mar-2021: Require that resources referenced from an EPUB publication not be located in the `META-INF` directory. See [issue 1205](https://github.com/w3c/epub-specs/issues/1205).
*   08-Mar-2021: The fix for [issue 1322](https://github.com/w3c/epub-specs/issues/1322) on 20-Jan-2021 incorrectly mentioned EPUB content documents having durations. Corrected to media overlay documents.
*   08-Mar-2021: Added recommendation that `refines` attribute use fragment identifiers to reference publication resources. See [issue 1361](https://github.com/w3c/epub-specs/issues/1361).
*   08-Mar-2021: Change requirement that media overlay document `par` and `seq` ordering match the default reading order to guidance. See [issue 1458](https://github.com/w3c/epub-specs/issues/1458)
*   05-Mar-2021: Clarified that whitespace within metadata element values is collapsed per the \[[infra](#bib-infra "Infra Standard")\] specification definition. See [issue 1528](https://github.com/w3c/epub-specs/issues/1528).
*   26-Feb-2021: Created a new section for describing general metadata value requirements, specifically whitespace handling. See [issue 1528](https://github.com/w3c/epub-specs/issues/1528).
*   17-Feb-2020: File extension recommendations have been removed (affects the package document, XHTML content documents, media overlay documents). See [issue 1294](https://github.com/w3c/epub-specs/issues/1294).
*   15-Feb-2021: Clarified that `nav` elements without an `epub:type` attribute are not subject to the EPUB navigation document's content model restrictions. See [issue 976](https://github.com/w3c/epub-specs/issues/976).
*   10-Feb-2021: A first draft of the [security and privacy section](#sec-security-privacy) has been added.
*   04-Feb-2021: Clarify that the value of `dc:language` elements must be well-formed language tags. See [issue 1325](https://github.com/w3c/epub-specs/issues/1325).
*   02-Feb-2021: Added `auto` value for `dir` attribute and clarified the precedence of the attribute. See [issue 1491](https://github.com/w3c/epub-specs/issues/1491) and [issue 1494](https://github.com/w3c/epub-specs/issues/1494).
*   02-Feb-2021: Added the `hreflang` attribute to `link` elements to identify the language of linked resources. See [issue 1488](https://github.com/w3c/epub-specs/issues/1488).
*   20-Jan-2021: Clarified that user-defined media overlay style classes must be declared in the package document metadata. See [issue 1319](https://github.com/w3c/epub-specs/issues/1319).
*   20-Jan-2021: Add recommendation that the sum of the media overlay durations for each EPUB content document match the total duration specified for the EPUB publication. See [issue 1322](https://github.com/w3c/epub-specs/issues/1322).
*   20-Jan-2021: Clarified that the `epub:type` attribute does not improve the accessibility of publications. Added pointers to the `role` attribute and the DPUB-ARIA vocabulary for accessibility.
*   13-Jan-2021: The requirement for progressive enhancement with spine-level scripting has been changed to a recommendation that top-level content documents remain consumable when scripting is not available. See [issue 1444](https://github.com/w3c/epub-specs/issues/1444).
*   24-Dec-2020: The specification no longer refers to a release identifier, but the requirement to include a last modification date remains for backwards compatibility. See [issue 1440](https://github.com/w3c/epub-specs/issues/1440).
*   16-Dec-2020: Terminology and requirements related to "renditions" of an EPUB publication have been simplified to improve the readability of the specifications (i.e., to align with the generally understood concept that an EPUB publication has only a single rendering described by a single package document). These changes do not affect the ability to include multiple renditions, which are now more fully covered in \[[epub-multi-rend-11](#bib-epub-multi-rend-11 "EPUB 3 Multiple-Rendition Publications 1.1")\]. See [issue 1436](https://github.com/w3c/epub-specs/issues/1436).
*   14-Nov-2020: The term "semantic inflection" is no longer used to describe the process of adding structural semantics to elements. The term is not widely understood outside of EPUB and is unnecessarily complex. The specification now simply refers to "expressing" or "adding" structural semantics.
*   09-Nov-2020: The requirement that the ordering of the `toc nav` match the ordering of EPUB content documents in the spine, and the elements within each file, has been reduced to a recommendation. See [issue 1283](https://github.com/w3c/epub-specs/issues/1283).
*   06-Nov-2020: Clarified that HTML `script` elements that contain [data blocks are not instances of scripting](#sec-scripted-context). See [issue 1352](https://github.com/w3c/epub-specs/issues/1352).
*   06-Nov-2020: Added WebP to the [image core media types](#cmt-grp-image). See [issue 1344](https://github.com/w3c/epub-specs/issues/1344).
*   06-Nov-2020: A [restricted set of external identifiers](#app-identifiers-allowed) are now allowed in publication resources. [References to external entities](#sec-xml-constraints) from the internal DTD subset remain restricted, however. See [issue 1338](https://github.com/w3c/epub-specs/issues/1338).
*   12-Oct-2020: Added OPUS to the [audio core media types](#cmt-grp-audio) with a warning that it is still subject to review depending on support in Mac/iOS. See [issue 645](https://github.com/w3c/epub-specs/issues/645).
*   30-Sept-2020: The structure of the EPUB core specifications has been simplified to ease understanding and access to information. This specification now consolidates the authoring requirements from the EPUB 3.2 specification together with the Packages, Content Documents, OCF and Media Overlays specifications. A separate document, EPUB Reading Systems 3.3, consolidates the reading system requirements from those documents.

L. Acknowledgements
-------------------

[](#ack)

_This section is non-normative._

Specifications, like art, are human creations. No human has done more for EPUB than Garth Conboy, who has been there every step of the way, from the very first OEB 1.0 in 1999 to today's EPUB 3.3. None of this would have happened without Garth's vision, knowledge, and preternatural good nature. We dedicate EPUB 3.3 to his memory. We are forever in your debt, Garth.

The following members of the EPUB 3 Working Group contributed to the development of this specification:

*   Shadi Abou-Zahra (Amazon)
*   Will AWAD (Newgen Knowledgeworks)
*   Noel Ray Barron (Apple Inc.)
*   Sofia Bautista (Legible Media Inc.)
*   Leah Brochu (National Network for Equitable Library Service)
*   Matthew C. Chan (House of Anansi Press)
*   Yu-Wei Chang (Taiwan Digital Publishing Forum)
*   Juan Corona (Legible Media Inc.)
*   Dave Cramer (W3C Invited Expert, chair)
*   Romain Deltour (DAISY Consortium)
*   Marisa DeMeglio (DAISY Consortium)
*   Brady Duga (Google LLC)
*   Reinaldo Ferraz (NIC.br - Brazilian Network Information Center)
*   Symon Flaming (Rakuten Group, Inc.)
*   John Foliot (W3C Invited Expert)
*   Teenya Franklin (Pearson plc)
*   Hadrien Gardeur (EDRLab)
*   Matt Garrish (DAISY Consortium)
*   Jen Goulden (Crawford Technologies)
*   David Hall (Apple Inc.)
*   Ivan Herman (W3C, staff contact)
*   Tetsu Hoshino (Kodansha, Publishers, Ltd.)
*   jasen huang (ByteDance)
*   Norikazu Ishizu (Kadokawa Corporation)
*   Norihito IYENAGA (Kodansha, Publishers, Ltd.)
*   Rick Johnson (VitalSource Technologies)
*   Ken Jones (Circular Software)
*   Antonio Kamiya (Dentsu Group Inc.)
*   Deborah Kaplan (W3C Invited Expert)
*   Bill Kasdorf (Book Industry Study Group)
*   Hiroshi Kawada (MEDIA DO Co., Ltd.)
*   George Kerscher (DAISY Consortium)
*   Kazuhito Kidachi (Mitsue-Links Co., Ltd.)
*   Masakazu Kitahara (Voyager Japan, Inc.)
*   Toshiaki Koike (Voyager Japan, Inc.)
*   Ryo Kuroda (ACCESS CO., LTD.)
*   Charles LaPierre (Benetech)
*   Dan Lazin (Google LLC)
*   Philippe Le Hegaret (W3C)
*   Laurent Le Meur (EDRLab)
*   YuYu Lin (Taiwan Digital Publishing Forum)
*   Farrah Little (National Network for Equitable Library Service)
*   Victor Lopes (Apple Inc.)
*   Karan Malhotra (Newgen Knowledgeworks)
*   Makoto Murata (DAISY Consortium)
*   Cristina Mussinelli (Fondazione LIA)
*   Yoichiro Nagao (Kodansha, Publishers, Ltd.)
*   Theresa O'Connor (Apple Inc.)
*   Yoshinori Ohmura (SHUEISHA Inc.)
*   Rachel Osolen (National Network for Equitable Library Service)
*   Gregorio Pellegrino (Fondazione LIA)
*   Vijaya Gowri Perumal (Newgen Knowledgeworks)
*   Wendy Reid (Rakuten Group, Inc., chair)
*   John Roque (Apple Inc.)
*   Leonard Rosenthol (Adobe)
*   Shinobu Sato (Kadokawa Corporation)
*   Ben Schroeter (Pearson plc)
*   Daihei Shiohama (MEDIA DO Co., Ltd.)
*   Tzviya Siegman (Wiley)
*   Avneesh Singh (DAISY Consortium)
*   MOTOI SUZUKI (SHUEISHA Inc.)
*   Yutaka Suzuki (Kadokawa Corporation)
*   Kyrce Swenson (Pearson plc)
*   Shinya Takami (Kadokawa Corporation, chair)
*   Mateus Teixeira (W. W. Norton & Company)
*   Yukio Tomikura (Kodansha, Publishers, Ltd.)
*   Aimee Ubbink (Crawford Technologies)
*   xinyuan wang (ByteDance)
*   Daniel Weck (DAISY Consortium)
*   Fuqiao Xue (W3C)
*   Evan Yamanishi (W. W. Norton & Company)
*   Osamu Yoshiba (Kodansha, Publishers, Ltd.)
*   Junichi Yoshii (Kodansha, Publishers, Ltd.)
*   Naomi Yoshizawa (W3C)
*   Laurence Zaysser (EDRLab)

M. References
-------------

[](#references)

### M.1 Normative references

[](#normative-references)

\[bcp47\]

[Tags for Identifying Languages](https://www.rfc-editor.org/rfc/rfc5646). A. Phillips, Ed.; M. Davis, Ed. IETF. September 2009. Best Current Practice. URL: [https://www.rfc-editor.org/rfc/rfc5646](https://www.rfc-editor.org/rfc/rfc5646)

\[bidi\]

[Unicode Bidirectional Algorithm](https://www.unicode.org/reports/tr9/tr9-50.html). Manish Goregaokar मनीष गोरेगांवकर; Robin Leroy. Unicode Consortium. 2 September 2024. Unicode Standard Annex #9. URL: [https://www.unicode.org/reports/tr9/tr9-50.html](https://www.unicode.org/reports/tr9/tr9-50.html)

\[charmod-norm\]

[Character Model for the World Wide Web: String Matching](https://www.w3.org/TR/charmod-norm/). Addison Phillips et al. W3C. 11 August 2021. W3C Working Group Note. URL: [https://www.w3.org/TR/charmod-norm/](https://www.w3.org/TR/charmod-norm/)

\[css-text-3\]

[CSS Text Module Level 3](https://www.w3.org/TR/css-text-3/). Elika Etemad; Koji Ishii; Florian Rivoal. W3C. 30 September 2024. CRD. URL: [https://www.w3.org/TR/css-text-3/](https://www.w3.org/TR/css-text-3/)

\[css-text-decor-3\]

[CSS Text Decoration Module Level 3](https://www.w3.org/TR/css-text-decor-3/). Elika Etemad; Koji Ishii. W3C. 5 May 2022. CRD. URL: [https://www.w3.org/TR/css-text-decor-3/](https://www.w3.org/TR/css-text-decor-3/)

\[css-writing-modes-3\]

[CSS Writing Modes Level 3](https://www.w3.org/TR/css-writing-modes-3/). Elika Etemad; Koji Ishii. W3C. 10 December 2019. W3C Recommendation. URL: [https://www.w3.org/TR/css-writing-modes-3/](https://www.w3.org/TR/css-writing-modes-3/)

\[css2\]

[Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification](https://www.w3.org/TR/CSS2/). Bert Bos; Tantek Çelik; Ian Hickson; Håkon Wium Lie. W3C. 7 June 2011. W3C Recommendation. URL: [https://www.w3.org/TR/CSS2/](https://www.w3.org/TR/CSS2/)

\[csssnapshot\]

[CSS Snapshot](https://www.w3.org/TR/CSS/). URL: [https://www.w3.org/TR/CSS/](https://www.w3.org/TR/CSS/)

\[datetime\]

[Date and Time Formats](https://www.w3.org/TR/NOTE-datetime). Misha Wolf. W3C. 27 August 1998. W3C Working Group Note. URL: [https://www.w3.org/TR/NOTE-datetime](https://www.w3.org/TR/NOTE-datetime)

\[dcterms\]

[DCMI Metadata Terms](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/). DCMI Usage Board. DCMI. 20 January 2020. DCMI Recommendation. URL: [https://www.dublincore.org/specifications/dublin-core/dcmi-terms/](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/)

\[dom\]

[DOM Standard](https://dom.spec.whatwg.org/). Anne van Kesteren. WHATWG. Living Standard. URL: [https://dom.spec.whatwg.org/](https://dom.spec.whatwg.org/)

\[ecmascript\]

[ECMAScript Language Specification](https://tc39.es/ecma262/multipage/). Ecma International. URL: [https://tc39.es/ecma262/multipage/](https://tc39.es/ecma262/multipage/)

\[epub-a11y-11\]

[EPUB Accessibility 1.1](https://www.w3.org/TR/epub-a11y-11/). George Kerscher; Matt Garrish; Charles LaPierre; Avneesh Singh; Gregorio Pellegrino. W3C. 17 October 2024. W3C Recommendation. URL: [https://www.w3.org/TR/epub-a11y-11/](https://www.w3.org/TR/epub-a11y-11/)

\[epub-rs-33\]

[EPUB Reading Systems 3.3](https://www.w3.org/TR/epub-rs-33/). Ivan Herman; Matt Garrish; Dave Cramer. W3C. 17 October 2024. W3C Recommendation. URL: [https://www.w3.org/TR/epub-rs-33/](https://www.w3.org/TR/epub-rs-33/)

\[epub-ssv-11\]

[EPUB 3 Structural Semantics Vocabulary 1.1](https://www.w3.org/TR/epub-ssv-11/). Ivan Herman; Matt Garrish. W3C. 13 March 2025. W3C Working Group Note. URL: [https://www.w3.org/TR/epub-ssv-11/](https://www.w3.org/TR/epub-ssv-11/)

\[epubcontentdocs-301\]

[EPUB Content Documents 3.0.1](https://idpf.org/epub/301/spec/epub-contentdocs-20140626.html). Markus Gylling; William McCoy; Elika J. Etimad; Matt Garrish. IDPF. 26 June 2014. URL: [https://idpf.org/epub/301/spec/epub-contentdocs-20140626.html](https://idpf.org/epub/301/spec/epub-contentdocs-20140626.html)

\[epubpackages-32\]

[EPUB Packages 3.2](https://www.w3.org/publishing/epub32/epub-packages.html). Matt Garrish; Dave Cramer. EPUB 3 Community Group. 08 May 2019. URL: [https://www.w3.org/publishing/epub32/epub-packages.html](https://www.w3.org/publishing/epub32/epub-packages.html)

\[epubpublications-30\]

[EPUB Publications 3.0](https://idpf.org/epub/30/spec/epub30-publications-20111011.html). Markus Gylling; William McCoy; Matt Garrish. IDPF. 11 October 2011. URL: [https://idpf.org/epub/30/spec/epub30-publications-20111011.html](https://idpf.org/epub/30/spec/epub30-publications-20111011.html)

\[epubpublications-301\]

[EPUB Publications 3.0.1](https://idpf.org/epub/301/spec/epub-publications-20140626.html). Markus Gylling; William McCoy; Matt Garrish. IDPF. 26 June 2014. URL: [https://idpf.org/epub/301/spec/epub-publications-20140626.html](https://idpf.org/epub/301/spec/epub-publications-20140626.html)

\[fips-180-4\]

[FIPS PUB 180-4: Secure Hash Standard (SHS)](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf). U.S. Department of Commerce/National Institute of Standards and Technology. August 2015. National Standard. URL: [https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf)

\[geolocation\]

[Geolocation](https://www.w3.org/TR/geolocation/). Marcos Caceres; Reilly Grant. W3C. 16 September 2024. W3C Recommendation. URL: [https://www.w3.org/TR/geolocation/](https://www.w3.org/TR/geolocation/)

\[gif\]

[Graphics Interchange Format](https://www.w3.org/Graphics/GIF/spec-gif89a.txt). CompuServe Incorporated. 31 July 1990. URL: [https://www.w3.org/Graphics/GIF/spec-gif89a.txt](https://www.w3.org/Graphics/GIF/spec-gif89a.txt)

\[html\]

[HTML Standard](https://html.spec.whatwg.org/multipage/). Anne van Kesteren; Domenic Denicola; Dominic Farolino; Ian Hickson; Philip Jägenstedt; Simon Pieters. WHATWG. Living Standard. URL: [https://html.spec.whatwg.org/multipage/](https://html.spec.whatwg.org/multipage/)

\[html-rdfa\]

[HTML+RDFa 1.1 - Second Edition](https://www.w3.org/TR/html-rdfa/). Manu Sporny. W3C. 17 March 2015. W3C Recommendation. URL: [https://www.w3.org/TR/html-rdfa/](https://www.w3.org/TR/html-rdfa/)

\[infra\]

[Infra Standard](https://infra.spec.whatwg.org/). Anne van Kesteren; Domenic Denicola. WHATWG. Living Standard. URL: [https://infra.spec.whatwg.org/](https://infra.spec.whatwg.org/)

\[iso8601-1\]

[Date and time — Representations for information interchange — Part 1: Basic rules. ISO 8601-1:2019.](https://www.iso.org/standard/70907.html). International Organization for Standardization (ISO). 2019. ISO 8601-1:2019. URL: [https://www.iso.org/standard/70907.html](https://www.iso.org/standard/70907.html)

\[jpeg\]

[JPEG File Interchange Format](https://www.w3.org/Graphics/JPEG/jfif3.pdf). Eric Hamilton. C-Cube Microsystems. Milpitas, CA, USA. September 1992. URL: [https://www.w3.org/Graphics/JPEG/jfif3.pdf](https://www.w3.org/Graphics/JPEG/jfif3.pdf)

\[mathml3\]

[Mathematical Markup Language (MathML) Version 3.0 2nd Edition](https://www.w3.org/TR/MathML3/). David Carlisle; Patrick D F Ion; Robert R Miner. W3C. 10 April 2014. W3C Recommendation. URL: [https://www.w3.org/TR/MathML3/](https://www.w3.org/TR/MathML3/)

\[mp3\]

[Information technology — Coding of moving pictures and associated audio for digital storage media at up to about 1,5 Mbit/s — Part 3: Audio](https://www.iso.org/standard/22412.html). ISO/IEC. August 1993. Published. URL: [https://www.iso.org/standard/22412.html](https://www.iso.org/standard/22412.html)

\[mp4\]

[Information technology — Coding of audio-visual objects — Part 14: MP4 file format](https://www.iso.org/standard/79110.html). ISO/IEC. January 2020. Published. URL: [https://www.iso.org/standard/79110.html](https://www.iso.org/standard/79110.html)

\[mpeg4-audio\]

[Information technology — Coding of audio-visual objects — Part 3: Audio](https://www.iso.org/standard/76383.html). ISO/IEC. December 2019. Published. URL: [https://www.iso.org/standard/76383.html](https://www.iso.org/standard/76383.html)

\[onix\]

[ONIX for Books 3.0](https://www.editeur.org/8/ONIX/). URL: [https://www.editeur.org/8/ONIX/](https://www.editeur.org/8/ONIX/)

\[opentype\]

[OpenType specification](http://www.microsoft.com/typography/otspec/default.htm). Microsoft. URL: [http://www.microsoft.com/typography/otspec/default.htm](http://www.microsoft.com/typography/otspec/default.htm)

\[opf-201\]

[Open Packaging Format 2.0.1](https://idpf.org/epub/20/spec/OPF_2.0.1_draft.htm). IDPF. 04 September 2010. URL: [https://idpf.org/epub/20/spec/OPF\_2.0.1\_draft.htm](https://idpf.org/epub/20/spec/OPF_2.0.1_draft.htm)

\[png\]

[Portable Network Graphics (PNG) Specification (Third Edition)](https://www.w3.org/TR/png-3/). Chris Lilley; Leonard Rosenthol; Pierre-Anthony Lemieux; Chris Needham; Simon Thompson; Chris Seeger; Chris Blume; Cosmin Truta. W3C. 13 March 2025. W3C Candidate Recommendation. URL: [https://www.w3.org/TR/png-3/](https://www.w3.org/TR/png-3/)

\[push-api\]

[Push API](https://www.w3.org/TR/push-api/). Peter Beverloo; Martin Thomson; Marcos Caceres. W3C. 3 September 2024. W3C Working Draft. URL: [https://www.w3.org/TR/push-api/](https://www.w3.org/TR/push-api/)

\[rdfa-core\]

[RDFa Core 1.1 - Third Edition](https://www.w3.org/TR/rdfa-core/). Ben Adida; Mark Birbeck; Shane McCarron; Ivan Herman et al. W3C. 17 March 2015. W3C Recommendation. URL: [https://www.w3.org/TR/rdfa-core/](https://www.w3.org/TR/rdfa-core/)

\[rfc2046\]

[Multipurpose Internet Mail Extensions (MIME) Part Two: Media Types](https://www.rfc-editor.org/rfc/rfc2046). N. Freed; N. Borenstein. IETF. November 1996. Draft Standard. URL: [https://www.rfc-editor.org/rfc/rfc2046](https://www.rfc-editor.org/rfc/rfc2046)

\[RFC2119\]

[Key words for use in RFCs to Indicate Requirement Levels](https://www.rfc-editor.org/rfc/rfc2119). S. Bradner. IETF. March 1997. Best Current Practice. URL: [https://www.rfc-editor.org/rfc/rfc2119](https://www.rfc-editor.org/rfc/rfc2119)

\[rfc2397\]

[The "data" URL scheme](https://www.rfc-editor.org/rfc/rfc2397). L. Masinter. IETF. August 1998. Proposed Standard. URL: [https://www.rfc-editor.org/rfc/rfc2397](https://www.rfc-editor.org/rfc/rfc2397)

\[rfc4329\]

[Scripting Media Types](https://www.rfc-editor.org/rfc/rfc4329). B. Hoehrmann. IETF. April 2006. Informational. URL: [https://www.rfc-editor.org/rfc/rfc4329](https://www.rfc-editor.org/rfc/rfc4329)

\[rfc7303\]

[XML Media Types](https://www.rfc-editor.org/rfc/rfc7303). H. Thompson; C. Lilley. IETF. July 2014. Proposed Standard. URL: [https://www.rfc-editor.org/rfc/rfc7303](https://www.rfc-editor.org/rfc/rfc7303)

\[rfc7845\]

[Ogg Encapsulation for the Opus Audio Codec](https://www.rfc-editor.org/rfc/rfc7845). T. Terriberry; R. Lee; R. Giles. IETF. April 2016. Proposed Standard. URL: [https://www.rfc-editor.org/rfc/rfc7845](https://www.rfc-editor.org/rfc/rfc7845)

\[rfc8089\]

[The "file" URI Scheme](https://www.rfc-editor.org/rfc/rfc8089). M. Kerwin. IETF. February 2017. Proposed Standard. URL: [https://www.rfc-editor.org/rfc/rfc8089](https://www.rfc-editor.org/rfc/rfc8089)

\[RFC8174\]

[Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words](https://www.rfc-editor.org/rfc/rfc8174). B. Leiba. IETF. May 2017. Best Current Practice. URL: [https://www.rfc-editor.org/rfc/rfc8174](https://www.rfc-editor.org/rfc/rfc8174)

\[rfc9110\]

[HTTP Semantics](https://httpwg.org/specs/rfc9110.html). R. Fielding, Ed.; M. Nottingham, Ed.; J. Reschke, Ed. IETF. June 2022. Internet Standard. URL: [https://httpwg.org/specs/rfc9110.html](https://httpwg.org/specs/rfc9110.html)

\[rfc9649\]

[WebP Image Format](https://www.rfc-editor.org/rfc/rfc9649). J. Zern; P. Massimino; J. Alakuijala. IETF. November 2024. Informational. URL: [https://www.rfc-editor.org/rfc/rfc9649](https://www.rfc-editor.org/rfc/rfc9649)

\[smil3\]

[Synchronized Multimedia Integration Language (SMIL 3.0)](https://www.w3.org/TR/SMIL3/). Dick Bulterman. W3C. 1 December 2008. W3C Recommendation. URL: [https://www.w3.org/TR/SMIL3/](https://www.w3.org/TR/SMIL3/)

\[svg\]

[SVG](https://www.w3.org/TR/SVG/). W3C. URL: [https://www.w3.org/TR/SVG/](https://www.w3.org/TR/SVG/)

\[truetype\]

[TrueType™ Reference Manual](https://developer.apple.com/fonts/TrueType-Reference-Manual/). Apple, Inc. URL: [https://developer.apple.com/fonts/TrueType-Reference-Manual/](https://developer.apple.com/fonts/TrueType-Reference-Manual/)

\[uax15\]

[Unicode Normalization Forms](https://www.unicode.org/reports/tr15/tr15-56.html). Ken Whistler. Unicode Consortium. 14 August 2024. Unicode Standard Annex #15. URL: [https://www.unicode.org/reports/tr15/tr15-56.html](https://www.unicode.org/reports/tr15/tr15-56.html)

\[unicode\]

[The Unicode Standard](https://www.unicode.org/versions/latest/). Unicode Consortium. URL: [https://www.unicode.org/versions/latest/](https://www.unicode.org/versions/latest/)

\[url\]

[URL Standard](https://url.spec.whatwg.org/). Anne van Kesteren. WHATWG. Living Standard. URL: [https://url.spec.whatwg.org/](https://url.spec.whatwg.org/)

\[us-ascii\]

"Coded Character Set - 7-bit American Standard Code for Information Interchange", ANSI X3.4, 1986..

\[wai-aria\]

[Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/TR/wai-aria/). W3C. URL: [https://www.w3.org/TR/wai-aria/](https://www.w3.org/TR/wai-aria/)

\[woff\]

[WOFF File Format 1.0](https://www.w3.org/TR/WOFF/). Jonathan Kew; Tal Leming; Erik van Blokland. W3C. 13 December 2012. W3C Recommendation. URL: [https://www.w3.org/TR/WOFF/](https://www.w3.org/TR/WOFF/)

\[woff2\]

[WOFF File Format 2.0](https://www.w3.org/TR/WOFF2/). Vladimir Levantovsky. W3C. 8 August 2024. W3C Recommendation. URL: [https://www.w3.org/TR/WOFF2/](https://www.w3.org/TR/WOFF2/)

\[xinclude\]

[XML Inclusions (XInclude) Version 1.0 (Second Edition)](https://www.w3.org/TR/xinclude/). Jonathan Marsh; David Orchard; Daniel Veillard. W3C. 15 November 2006. W3C Recommendation. URL: [https://www.w3.org/TR/xinclude/](https://www.w3.org/TR/xinclude/)

\[xml\]

[Extensible Markup Language (XML) 1.0 (Fifth Edition)](https://www.w3.org/TR/xml/). Tim Bray; Jean Paoli; Michael Sperberg-McQueen; Eve Maler; François Yergeau et al. W3C. 26 November 2008. W3C Recommendation. URL: [https://www.w3.org/TR/xml/](https://www.w3.org/TR/xml/)

\[xml-names\]

[Namespaces in XML 1.0 (Third Edition)](https://www.w3.org/TR/xml-names/). Tim Bray; Dave Hollander; Andrew Layman; Richard Tobin; Henry Thompson et al. W3C. 8 December 2009. W3C Recommendation. URL: [https://www.w3.org/TR/xml-names/](https://www.w3.org/TR/xml-names/)

\[xmldsig-core\]

[XML Signature Syntax and Processing (Second Edition)](https://www.w3.org/TR/xmldsig-core/). Donald Eastlake; Joseph Reagle; David Solo; Frederick Hirsch; Thomas Roessler et al. W3C. 10 June 2008. W3C Recommendation. URL: [https://www.w3.org/TR/xmldsig-core/](https://www.w3.org/TR/xmldsig-core/)

\[xmldsig-core1\]

[XML Signature Syntax and Processing Version 1.1](https://www.w3.org/TR/xmldsig-core1/). Donald Eastlake; Joseph Reagle; David Solo; Frederick Hirsch; Magnus Nyström; Thomas Roessler; Kelvin Yiu. W3C. 11 April 2013. W3C Recommendation. URL: [https://www.w3.org/TR/xmldsig-core1/](https://www.w3.org/TR/xmldsig-core1/)

\[xmlenc-core1\]

[XML Encryption Syntax and Processing Version 1.1](https://www.w3.org/TR/xmlenc-core1/). Donald Eastlake; Joseph Reagle; Frederick Hirsch; Thomas Roessler. W3C. 11 April 2013. W3C Recommendation. URL: [https://www.w3.org/TR/xmlenc-core1/](https://www.w3.org/TR/xmlenc-core1/)

\[xmlenc-decrypt\]

[Decryption Transform for XML Signature](https://www.w3.org/TR/xmlenc-decrypt/). Merlin Hughes; Takeshi Imamura; Hiroshi Maruyama. W3C. 10 December 2002. W3C Recommendation. URL: [https://www.w3.org/TR/xmlenc-decrypt/](https://www.w3.org/TR/xmlenc-decrypt/)

\[xmlschema-2\]

[XML Schema Part 2: Datatypes Second Edition](https://www.w3.org/TR/xmlschema-2/). Paul V. Biron; Ashok Malhotra. W3C. 28 October 2004. W3C Recommendation. URL: [https://www.w3.org/TR/xmlschema-2/](https://www.w3.org/TR/xmlschema-2/)

\[zip\]

[.ZIP File Format Specification](https://pkware.cachefly.net/webdocs/casestudies/APPNOTE.TXT). 15 July 2020. Final. URL: [https://pkware.cachefly.net/webdocs/casestudies/APPNOTE.TXT](https://pkware.cachefly.net/webdocs/casestudies/APPNOTE.TXT)

### M.2 Informative references

[](#informative-references)

\[audiobooks\]

[Audiobooks](https://www.w3.org/TR/audiobooks/). Wendy Reid; Matt Garrish. W3C. 10 November 2020. W3C Recommendation. URL: [https://www.w3.org/TR/audiobooks/](https://www.w3.org/TR/audiobooks/)

\[css-viewport-1\]

[CSS Viewport Module Level 1](https://drafts.csswg.org/css-viewport/). W3C. URL: [https://drafts.csswg.org/css-viewport/](https://drafts.csswg.org/css-viewport/)

\[dpub-aria\]

[Digital Publishing WAI-ARIA Module](https://www.w3.org/TR/dpub-aria/). W3C. URL: [https://www.w3.org/TR/dpub-aria/](https://www.w3.org/TR/dpub-aria/)

\[epub-a11y-tech-11\]

[EPUB Accessibility Techniques 1.1](https://www.w3.org/TR/epub-a11y-tech-11/). Matt Garrish; George Kerscher; Charles LaPierre; Gregorio Pellegrino; Avneesh Singh. W3C. 13 March 2025. W3C Working Group Note. URL: [https://www.w3.org/TR/epub-a11y-tech-11/](https://www.w3.org/TR/epub-a11y-tech-11/)

\[epub-multi-rend-11\]

[EPUB 3 Multiple-Rendition Publications 1.1](https://www.w3.org/TR/epub-multi-rend-11/). Matt Garrish. W3C. 13 March 2025. W3C Working Group Note. URL: [https://www.w3.org/TR/epub-multi-rend-11/](https://www.w3.org/TR/epub-multi-rend-11/)

\[epub-overview-33\]

[EPUB 3 Overview](https://www.w3.org/TR/epub-overview-33/). Matt Garrish; Ivan Herman. W3C. 13 March 2025. W3C Working Group Note. URL: [https://www.w3.org/TR/epub-overview-33/](https://www.w3.org/TR/epub-overview-33/)

\[epub-tts-10\]

[EPUB 3 Text-to-Speech Enhancements 1.0](https://www.w3.org/TR/epub-tts-10/). Matt Garrish. W3C. 13 March 2025. W3C Working Group Note. URL: [https://www.w3.org/TR/epub-tts-10/](https://www.w3.org/TR/epub-tts-10/)

\[fetch\]

[Fetch Standard](https://fetch.spec.whatwg.org/). Anne van Kesteren. WHATWG. Living Standard. URL: [https://fetch.spec.whatwg.org/](https://fetch.spec.whatwg.org/)

\[h264\]

[H.264 : Advanced video coding for generic audiovisual services](https://www.itu.int/ITU-T/recommendations/rec.aspx?rec=13189). 2017-04-13. URL: [https://www.itu.int/ITU-T/recommendations/rec.aspx?rec=13189](https://www.itu.int/ITU-T/recommendations/rec.aspx?rec=13189)

\[international-specs\]

[Internationalization Best Practices for Spec Developers](https://www.w3.org/TR/international-specs/). Richard Ishida; Addison Phillips. W3C. 13 February 2025. W3C Working Group Note. URL: [https://www.w3.org/TR/international-specs/](https://www.w3.org/TR/international-specs/)

\[iso22424\]

[ISO/IEC TS 22424-1:2020 — Digital publishing — EPUB3 preservation](https://www.iso.org/standard/73163.html). 2020-01. URL: [https://www.iso.org/standard/73163.html](https://www.iso.org/standard/73163.html)

\[isoschematron\]

[ISO/IEC 19757-3: Rule-based validation — Schematron](http://standards.iso.org/ittf/PubliclyAvailableStandards/c040833_ISO_IEC_19757-3_2006(E).zip). 2006-06-01. URL: [http://standards.iso.org/ittf/PubliclyAvailableStandards/c040833\_ISO\_IEC\_19757-3\_2006(E).zip](http://standards.iso.org/ittf/PubliclyAvailableStandards/c040833_ISO_IEC_19757-3_2006(E).zip)

\[json-ld11\]

[JSON-LD 1.1](https://www.w3.org/TR/json-ld11/). Gregg Kellogg; Pierre-Antoine Champin; Dave Longley. W3C. 16 July 2020. W3C Recommendation. URL: [https://www.w3.org/TR/json-ld11/](https://www.w3.org/TR/json-ld11/)

\[mediaqueries-3\]

[Media Queries Level 3](https://www.w3.org/TR/mediaqueries-3/). Florian Rivoal. W3C. 21 May 2024. W3C Recommendation. URL: [https://www.w3.org/TR/mediaqueries-3/](https://www.w3.org/TR/mediaqueries-3/)

\[nvdl\]

[ISO/IEC 19757-4: NVDL (Namespace-based Validation Dispatching Language)](http://standards.iso.org/ittf/PubliclyAvailableStandards/c038615_ISO_IEC_19757-4_2006(E).zip). 2006-06-01. URL: [http://standards.iso.org/ittf/PubliclyAvailableStandards/c038615\_ISO\_IEC\_19757-4\_2006(E).zip](http://standards.iso.org/ittf/PubliclyAvailableStandards/c038615_ISO_IEC_19757-4_2006(E).zip)

\[odf\]

[Open Document Format for Office Applications (OpenDocument) v1.0](https://www.oasis-open.org/committees/download.php/12572/OpenDocument-v1.0-os.pdf). 1 May 2005. URL: [https://www.oasis-open.org/committees/download.php/12572/OpenDocument-v1.0-os.pdf](https://www.oasis-open.org/committees/download.php/12572/OpenDocument-v1.0-os.pdf)

\[relaxng-schema\]

[Information technology -- Document Schema Definition Language (DSDL) -- Part 2: Regular-grammar-based validation -- RELAX NG](http://standards.iso.org/ittf/PubliclyAvailableStandards/c052348_ISO_IEC_19757-2_2008(E).zip). ISO/IEC. 2008. URL: [http://standards.iso.org/ittf/PubliclyAvailableStandards/c052348\_ISO\_IEC\_19757-2\_2008(E).zip](http://standards.iso.org/ittf/PubliclyAvailableStandards/c052348_ISO_IEC_19757-2_2008(E).zip)

\[rfc3986\]

[Uniform Resource Identifier (URI): Generic Syntax](https://www.rfc-editor.org/rfc/rfc3986). T. Berners-Lee; R. Fielding; L. Masinter. IETF. January 2005. Internet Standard. URL: [https://www.rfc-editor.org/rfc/rfc3986](https://www.rfc-editor.org/rfc/rfc3986)

\[rfc4839\]

[Media Type Registrations for the Open eBook Publication Structure (OEBPS) Package File (OPF)](https://www.rfc-editor.org/rfc/rfc4839). G. Conboy; J. Rivlin; J. Ferraiolo. IETF. April 2007. Informational. URL: [https://www.rfc-editor.org/rfc/rfc4839](https://www.rfc-editor.org/rfc/rfc4839)

\[rfc6386\]

[VP8 Data Format and Decoding Guide](https://www.rfc-editor.org/rfc/rfc6386). J. Bankoski; J. Koleszar; L. Quillio; J. Salonen; P. Wilkins; Y. Xu. IETF. November 2011. Informational. URL: [https://www.rfc-editor.org/rfc/rfc6386](https://www.rfc-editor.org/rfc/rfc6386)

\[rfc8141\]

[Uniform Resource Names (URNs)](https://www.rfc-editor.org/rfc/rfc8141). P. Saint-Andre; J. Klensin. IETF. April 2017. Proposed Standard. URL: [https://www.rfc-editor.org/rfc/rfc8141](https://www.rfc-editor.org/rfc/rfc8141)

\[uaag20\]

[User Agent Accessibility Guidelines (UAAG) 2.0](https://www.w3.org/TR/UAAG20/). James Allan; Greg Lowney; Kimberly Patch; Jeanne F Spellman. W3C. 15 December 2015. W3C Working Group Note. URL: [https://www.w3.org/TR/UAAG20/](https://www.w3.org/TR/UAAG20/)

\[uax44\]

[Unicode Character Database](https://www.unicode.org/reports/tr44/tr44-34.html). Ken Whistler. Unicode Consortium. 27 August 2024. Unicode Standard Annex #44. URL: [https://www.unicode.org/reports/tr44/tr44-34.html](https://www.unicode.org/reports/tr44/tr44-34.html)

\[wcag2\]

[Web Content Accessibility Guidelines (WCAG) 2](https://www.w3.org/TR/WCAG2/). W3C. URL: [https://www.w3.org/TR/WCAG2/](https://www.w3.org/TR/WCAG2/)

\[webvtt\]

[WebVTT: The Web Video Text Tracks Format](https://www.w3.org/TR/webvtt1/). Silvia Pfeiffer. W3C. 4 April 2019. W3C Candidate Recommendation. URL: [https://www.w3.org/TR/webvtt1/](https://www.w3.org/TR/webvtt1/)

\[xhr\]

[XMLHttpRequest Standard](https://xhr.spec.whatwg.org/). Anne van Kesteren. WHATWG. Living Standard. URL: [https://xhr.spec.whatwg.org/](https://xhr.spec.whatwg.org/)

\[xmlbase\]

[XML Base (Second Edition)](https://www.w3.org/TR/xmlbase/). Jonathan Marsh; Richard Tobin. W3C. 28 January 2009. W3C Recommendation. URL: [https://www.w3.org/TR/xmlbase/](https://www.w3.org/TR/xmlbase/)

\[xmlsec-rngschema-20130411\]

[XML Security RELAX NG Schemas](https://www.w3.org/TR/2013/NOTE-xmlsec-rngschema-20130411/). Murata Makoto; Frederick Hirsch. W3C. 11 April 2013. W3C Working Group Note. URL: [https://www.w3.org/TR/2013/NOTE-xmlsec-rngschema-20130411/](https://www.w3.org/TR/2013/NOTE-xmlsec-rngschema-20130411/)

[↑](#title)

[Permalink](#dfn-codec) exported

**Referenced in:**

*   [§ 4.2.6.3.2.2 Order of compression and encryption](#ref-for-dfn-codec-1 "§ 4.2.6.3.2.2 Order of compression and encryption")

[Permalink](#dfn-container-resource) exported

**Referenced in:**

*   [§ 1.4 Terminology](#ref-for-dfn-container-resource-1 "§ 1.4 Terminology")
*   [§ 3.1.1 The manifest plane](#ref-for-dfn-container-resource-2 "§ 3.1.1 The manifest plane")
*   [§ 4.2.1 Introduction](#ref-for-dfn-container-resource-3 "§ 4.2.1 Introduction")
*   [§ 5.6.1 The manifest element](#ref-for-dfn-container-resource-4 "§ 5.6.1 The manifest element")
*   [§ H.1 Resources](#ref-for-dfn-container-resource-5 "§ H.1 Resources")

[Permalink](#dfn-container-root-url) exported

**Referenced in:**

*   [§ 4.2.5 URLs in the OCF abstract container](#ref-for-dfn-container-root-url-1 "§ 4.2.5 URLs in the OCF abstract container") [(2)](#ref-for-dfn-container-root-url-2 "Reference 2") [(3)](#ref-for-dfn-container-root-url-3 "Reference 3") [(4)](#ref-for-dfn-container-root-url-4 "Reference 4") [(5)](#ref-for-dfn-container-root-url-5 "Reference 5") [(6)](#ref-for-dfn-container-root-url-6 "Reference 6") [(7)](#ref-for-dfn-container-root-url-7 "Reference 7")
*   [§ 4.2.6.2 Parsing URLs in the META-INF directory](#ref-for-dfn-container-root-url-8 "§ 4.2.6.2 Parsing URLs in the META-INF directory")

[Permalink](#dfn-content-url) exported

**Referenced in:**

*   [§ 4.2.5 URLs in the OCF abstract container](#ref-for-dfn-content-url-1 "§ 4.2.5 URLs in the OCF abstract container")
*   [§ 5.2 Parsing URLs in the package document](#ref-for-dfn-content-url-2 "§ 5.2 Parsing URLs in the package document")

[Permalink](#dfn-core-media-type-resource) exported

**Referenced in:**

*   [§ 1.4 Terminology](#ref-for-dfn-core-media-type-resource-1 "§ 1.4 Terminology")
*   [§ 3.1 Introduction](#ref-for-dfn-core-media-type-resource-2 "§ 3.1 Introduction")
*   [§ 3.1.3 The content plane](#ref-for-dfn-core-media-type-resource-3 "§ 3.1.3 The content plane")
*   [§ 3.2 Core media types](#ref-for-dfn-core-media-type-resource-4 "§ 3.2 Core media types")
*   [§ 3.4 Exempt resources](#ref-for-dfn-core-media-type-resource-5 "§ 3.4 Exempt resources")
*   [§ 3.5.1 Manifest fallbacks](#ref-for-dfn-core-media-type-resource-6 "§ 3.5.1 Manifest fallbacks")
*   [§ 3.5.2.2 HTML img fallbacks](#ref-for-dfn-core-media-type-resource-7 "§ 3.5.2.2 HTML img fallbacks")
*   [§ 3.6 Resource locations](#ref-for-dfn-core-media-type-resource-8 "§ 3.6 Resource locations")
*   [§ 3.7 Data URLs](#ref-for-dfn-core-media-type-resource-9 "§ 3.7 Data URLs")
*   [§ 3.9 XML conformance](#ref-for-dfn-core-media-type-resource-10 "§ 3.9 XML conformance")
*   [§ 5.6.2 The item element](#ref-for-dfn-core-media-type-resource-11 "§ 5.6.2 The item element")
*   [§ 6.1.1 Introduction](#ref-for-dfn-core-media-type-resource-12 "§ 6.1.1 Introduction")
*   [§ 6.2.1 Introduction](#ref-for-dfn-core-media-type-resource-13 "§ 6.2.1 Introduction")
*   [§ H.1 Resources](#ref-for-dfn-core-media-type-resource-14 "§ H.1 Resources")

[Permalink](#dfn-epub-conformance-checker) exported

**Referenced in:**

*   [§ 1.3 Relationship to other specifications](#ref-for-dfn-epub-conformance-checker-1 "§ 1.3 Relationship to other specifications")
*   [§ 2.1 Conformance checking](#ref-for-dfn-epub-conformance-checker-2 "§ 2.1 Conformance checking")
*   [§ 3.4 Exempt resources](#ref-for-dfn-epub-conformance-checker-3 "§ 3.4 Exempt resources")
*   [§ 4.2.3 File paths and file names](#ref-for-dfn-epub-conformance-checker-4 "§ 4.2.3 File paths and file names")
*   [§ 5.9.2 Support](#ref-for-dfn-epub-conformance-checker-5 "§ 5.9.2 Support")
*   [§ A.1 Under-implemented features](#ref-for-dfn-epub-conformance-checker-6 "§ A.1 Under-implemented features")
*   [§ A.2 Deprecated features](#ref-for-dfn-epub-conformance-checker-7 "§ A.2 Deprecated features")
*   [§ D.1.5 Reserved prefixes](#ref-for-dfn-epub-conformance-checker-8 "§ D.1.5 Reserved prefixes")

[Permalink](#dfn-epub-container) exported

**Referenced in:**

*   [§ 1.4 Terminology](#ref-for-dfn-epub-container-1 "§ 1.4 Terminology") [(2)](#ref-for-dfn-epub-container-2 "Reference 2") [(3)](#ref-for-dfn-epub-container-3 "Reference 3") [(4)](#ref-for-dfn-epub-container-4 "Reference 4") [(5)](#ref-for-dfn-epub-container-5 "Reference 5")
*   [§ 2. EPUB publication conformance](#ref-for-dfn-epub-container-6 "§ 2. EPUB publication conformance")
*   [§ 3.1.2 The spine plane](#ref-for-dfn-epub-container-7 "§ 3.1.2 The spine plane")
*   [§ 3.4 Exempt resources](#ref-for-dfn-epub-container-8 "§ 3.4 Exempt resources")
*   [§ 3.6 Resource locations](#ref-for-dfn-epub-container-9 "§ 3.6 Resource locations")
*   [§ 4.2.5 URLs in the OCF abstract container](#ref-for-dfn-epub-container-10 "§ 4.2.5 URLs in the OCF abstract container")
*   [§ 4.2.6.3.1.2 The rootfiles element](#ref-for-dfn-epub-container-11 "§ 4.2.6.3.1.2 The rootfiles element")
*   [§ 4.2.6.3.1.3 The rootfile element](#ref-for-dfn-epub-container-12 "§ 4.2.6.3.1.3 The rootfile element")
*   [§ 5.5.6 The link element](#ref-for-dfn-epub-container-13 "§ 5.5.6 The link element")
*   [§ 5.6.2.2 Examples](#ref-for-dfn-epub-container-14 "§ 5.6.2.2 Examples")
*   [§ 7.3 The nav element: restrictions](#ref-for-dfn-epub-container-15 "§ 7.3 The nav element: restrictions")
*   [§ 11.2 Threat model](#ref-for-dfn-epub-container-16 "§ 11.2 Threat model")
*   [§ D.6.4 remote-resources](#ref-for-dfn-epub-container-17 "§ D.6.4 remote-resources")
*   [§ H.1 Resources](#ref-for-dfn-epub-container-18 "§ H.1 Resources")

[Permalink](#dfn-ocf-zip-container) exported

**Referenced in:**

*   [§ 1.4 Terminology](#ref-for-dfn-ocf-zip-container-1 "§ 1.4 Terminology")
*   [§ 4.2.1 Introduction](#ref-for-dfn-ocf-zip-container-2 "§ 4.2.1 Introduction")
*   [§ 4.2.2 File and directory structure](#ref-for-dfn-ocf-zip-container-3 "§ 4.2.2 File and directory structure")
*   [§ 4.2.6.3.1.4 The links element](#ref-for-dfn-ocf-zip-container-4 "§ 4.2.6.3.1.4 The links element")
*   [§ 4.2.6.3.2.2 Order of compression and encryption](#ref-for-dfn-ocf-zip-container-5 "§ 4.2.6.3.2.2 Order of compression and encryption")
*   [§ 4.3.1 Introduction](#ref-for-dfn-ocf-zip-container-6 "§ 4.3.1 Introduction")
*   [§ 4.3.2 ZIP file requirements](#ref-for-dfn-ocf-zip-container-7 "§ 4.3.2 ZIP file requirements")
*   [§ 4.3.3 OCF ZIP container media type identification](#ref-for-dfn-ocf-zip-container-8 "§ 4.3.3 OCF ZIP container media type identification")
*   [§ 4.4.1 Introduction](#ref-for-dfn-ocf-zip-container-9 "§ 4.4.1 Introduction") [(2)](#ref-for-dfn-ocf-zip-container-10 "Reference 2")
*   [§ 4.4.2 Limitations](#ref-for-dfn-ocf-zip-container-11 "§ 4.4.2 Limitations")
*   [§ 4.4.4 Obfuscation algorithm](#ref-for-dfn-ocf-zip-container-12 "§ 4.4.4 Obfuscation algorithm")
*   [§ H.3 Packaged EPUB](#ref-for-dfn-ocf-zip-container-13 "§ H.3 Packaged EPUB")

[Permalink](#dfn-epub-content-document) exported

**Referenced in:**

*   [§ 1.2 Organization](#ref-for-dfn-epub-content-document-1 "§ 1.2 Organization")
*   [§ 1.4 Terminology](#ref-for-dfn-epub-content-document-2 "§ 1.4 Terminology") [(2)](#ref-for-dfn-epub-content-document-3 "Reference 2") [(3)](#ref-for-dfn-epub-content-document-4 "Reference 3") [(4)](#ref-for-dfn-epub-content-document-5 "Reference 4") [(5)](#ref-for-dfn-epub-content-document-6 "Reference 5") [(6)](#ref-for-dfn-epub-content-document-7 "Reference 6") [(7)](#ref-for-dfn-epub-content-document-8 "Reference 7") [(8)](#ref-for-dfn-epub-content-document-9 "Reference 8") [(9)](#ref-for-dfn-epub-content-document-10 "Reference 9") [(10)](#ref-for-dfn-epub-content-document-11 "Reference 10")
*   [§ 3.1 Introduction](#ref-for-dfn-epub-content-document-12 "§ 3.1 Introduction")
*   [§ 3.1.2 The spine plane](#ref-for-dfn-epub-content-document-13 "§ 3.1.2 The spine plane")
*   [§ 3.1.3 The content plane](#ref-for-dfn-epub-content-document-14 "§ 3.1.3 The content plane")
*   [§ 3.2 Core media types](#ref-for-dfn-epub-content-document-15 "§ 3.2 Core media types")
*   [§ 3.3 Foreign resources](#ref-for-dfn-epub-content-document-16 "§ 3.3 Foreign resources")
*   [§ 3.4 Exempt resources](#ref-for-dfn-epub-content-document-17 "§ 3.4 Exempt resources")
*   [§ 3.5.1 Manifest fallbacks](#ref-for-dfn-epub-content-document-18 "§ 3.5.1 Manifest fallbacks")
*   [§ 5.5.6 The link element](#ref-for-dfn-epub-content-document-19 "§ 5.5.6 The link element")
*   [§ 5.6.2.2 Examples](#ref-for-dfn-epub-content-document-20 "§ 5.6.2.2 Examples") [(2)](#ref-for-dfn-epub-content-document-21 "Reference 2") [(3)](#ref-for-dfn-epub-content-document-22 "Reference 3")
*   [§ 5.7.1 The spine element](#ref-for-dfn-epub-content-document-23 "§ 5.7.1 The spine element")
*   [§ 5.7.2 The itemref element](#ref-for-dfn-epub-content-document-24 "§ 5.7.2 The itemref element") [(2)](#ref-for-dfn-epub-content-document-25 "Reference 2")
*   [§ 5.8.1 The collection element](#ref-for-dfn-epub-content-document-26 "§ 5.8.1 The collection element")
*   [§ 6.3.2.1 Script inclusion](#ref-for-dfn-epub-content-document-27 "§ 6.3.2.1 Script inclusion")
*   [§ 6.3.2.2.1 Container-constrained scripts](#ref-for-dfn-epub-content-document-28 "§ 6.3.2.2.1 Container-constrained scripts")
*   [§ 6.3.2.4 Scripting accessibility](#ref-for-dfn-epub-content-document-29 "§ 6.3.2.4 Scripting accessibility")
*   [§ 6.3.2.5 Scripting fallbacks](#ref-for-dfn-epub-content-document-30 "§ 6.3.2.5 Scripting fallbacks")
*   [§ 7.4.2 The toc nav element](#ref-for-dfn-epub-content-document-31 "§ 7.4.2 The toc nav element")
*   [§ 7.4.3 The page-list nav element](#ref-for-dfn-epub-content-document-32 "§ 7.4.3 The page-list nav element")
*   [§ 8.2.1 Introduction](#ref-for-dfn-epub-content-document-33 "§ 8.2.1 Introduction")
*   [§ 8.2.2.1 Layout](#ref-for-dfn-epub-content-document-34 "§ 8.2.2.1 Layout")
*   [§ 8.2.2.2 Orientation](#ref-for-dfn-epub-content-document-35 "§ 8.2.2.2 Orientation")
*   [§ 8.2.2.3 Synthetic spreads](#ref-for-dfn-epub-content-document-36 "§ 8.2.2.3 Synthetic spreads")
*   [§ 8.2.2.4 Spread placement](#ref-for-dfn-epub-content-document-37 "§ 8.2.2.4 Spread placement") [(2)](#ref-for-dfn-epub-content-document-38 "Reference 2")
*   [§ 8.3 Reflowable layouts](#ref-for-dfn-epub-content-document-39 "§ 8.3 Reflowable layouts")
*   [§ 8.3.1 The rendition:flow property](#ref-for-dfn-epub-content-document-40 "§ 8.3.1 The rendition:flow property")
*   [§ 8.3.2 The rendition:align-x-center property](#ref-for-dfn-epub-content-document-41 "§ 8.3.2 The rendition:align-x-center property")
*   [§ 9.1 Introduction](#ref-for-dfn-epub-content-document-42 "§ 9.1 Introduction")
*   [§ 9.2.1 Media overlay document requirements](#ref-for-dfn-epub-content-document-43 "§ 9.2.1 Media overlay document requirements")
*   [§ 9.2.2.4 The body element](#ref-for-dfn-epub-content-document-44 "§ 9.2.2.4 The body element")
*   [§ 9.2.2.5 The seq element](#ref-for-dfn-epub-content-document-45 "§ 9.2.2.5 The seq element") [(2)](#ref-for-dfn-epub-content-document-46 "Reference 2")
*   [§ 9.2.2.6 The par element](#ref-for-dfn-epub-content-document-47 "§ 9.2.2.6 The par element")
*   [§ 9.2.2.7 The text element](#ref-for-dfn-epub-content-document-48 "§ 9.2.2.7 The text element") [(2)](#ref-for-dfn-epub-content-document-49 "Reference 2")
*   [§ 9.3.1 Introduction](#ref-for-dfn-epub-content-document-50 "§ 9.3.1 Introduction")
*   [§ 9.3.2 Relationship to the EPUB content document](#ref-for-dfn-epub-content-document-51 "§ 9.3.2 Relationship to the EPUB content document")
*   [§ 9.3.2.1 Overlay structure](#ref-for-dfn-epub-content-document-52 "§ 9.3.2.1 Overlay structure")
*   [§ 9.3.2.2 Referencing document fragments](#ref-for-dfn-epub-content-document-53 "§ 9.3.2.2 Referencing document fragments")
*   [§ 9.3.2.3 Overlay granularity](#ref-for-dfn-epub-content-document-54 "§ 9.3.2.3 Overlay granularity")
*   [§ 9.3.4 Associating style information](#ref-for-dfn-epub-content-document-55 "§ 9.3.4 Associating style information")
*   [§ 9.3.5.1 Including media overlays](#ref-for-dfn-epub-content-document-56 "§ 9.3.5.1 Including media overlays")
*   [§ 9.3.5.2 Overlays package metadata](#ref-for-dfn-epub-content-document-57 "§ 9.3.5.2 Overlays package metadata")
*   [§ 9.4.2 Escapability](#ref-for-dfn-epub-content-document-58 "§ 9.4.2 Escapability")
*   [§ 11.2 Threat model](#ref-for-dfn-epub-content-document-59 "§ 11.2 Threat model")
*   [§ C.1 Introduction](#ref-for-dfn-epub-content-document-60 "§ C.1 Introduction")
*   [§ D.1.1 Introduction](#ref-for-dfn-epub-content-document-61 "§ D.1.1 Introduction")
*   [§ D.1.4 The prefix attribute](#ref-for-dfn-epub-content-document-62 "§ D.1.4 The prefix attribute")
*   [§ D.5.1 Custom rendering properties](#ref-for-dfn-epub-content-document-63 "§ D.5.1 Custom rendering properties")
*   [§ D.6.2 mathml](#ref-for-dfn-epub-content-document-64 "§ D.6.2 mathml")
*   [§ D.6.5 scripted](#ref-for-dfn-epub-content-document-65 "§ D.6.5 scripted")
*   [§ D.7.1 page-spread-left](#ref-for-dfn-epub-content-document-66 "§ D.7.1 page-spread-left")
*   [§ D.7.2 page-spread-right](#ref-for-dfn-epub-content-document-67 "§ D.7.2 page-spread-right")
*   [§ D.8.1 active-class](#ref-for-dfn-epub-content-document-68 "§ D.8.1 active-class")
*   [§ D.8.4 playback-active-class](#ref-for-dfn-epub-content-document-69 "§ D.8.4 playback-active-class")
*   [§ H.1 Resources](#ref-for-dfn-epub-content-document-70 "§ H.1 Resources")

[Permalink](#dfn-epub-creator) exported

**Referenced in:**

*   [§ 1.1 Overview](#ref-for-dfn-epub-creator-1 "§ 1.1 Overview")
*   [§ 1.2 Organization](#ref-for-dfn-epub-creator-2 "§ 1.2 Organization")
*   [§ 1.3 Relationship to other specifications](#ref-for-dfn-epub-creator-3 "§ 1.3 Relationship to other specifications")
*   [§ 1.3.1 Relationship to HTML](#ref-for-dfn-epub-creator-4 "§ 1.3.1 Relationship to HTML")
*   [§ 1.3.2 Relationship to SVG](#ref-for-dfn-epub-creator-5 "§ 1.3.2 Relationship to SVG")
*   [§ 1.4 Terminology](#ref-for-dfn-epub-creator-6 "§ 1.4 Terminology") [(2)](#ref-for-dfn-epub-creator-7 "Reference 2") [(3)](#ref-for-dfn-epub-creator-8 "Reference 3")
*   [§ 2.1 Conformance checking](#ref-for-dfn-epub-creator-9 "§ 2.1 Conformance checking")
*   [§ 3.1.1 The manifest plane](#ref-for-dfn-epub-creator-10 "§ 3.1.1 The manifest plane")
*   [§ 3.1.2 The spine plane](#ref-for-dfn-epub-creator-11 "§ 3.1.2 The spine plane")
*   [§ 3.1.3 The content plane](#ref-for-dfn-epub-creator-12 "§ 3.1.3 The content plane")
*   [§ 3.2 Core media types](#ref-for-dfn-epub-creator-13 "§ 3.2 Core media types")
*   [§ 3.3 Foreign resources](#ref-for-dfn-epub-creator-14 "§ 3.3 Foreign resources")
*   [§ 3.4 Exempt resources](#ref-for-dfn-epub-creator-15 "§ 3.4 Exempt resources")
*   [§ 3.5.1 Manifest fallbacks](#ref-for-dfn-epub-creator-16 "§ 3.5.1 Manifest fallbacks")
*   [§ 3.5.2.1 HTML audio and video fallbacks](#ref-for-dfn-epub-creator-17 "§ 3.5.2.1 HTML audio and video fallbacks")
*   [§ 3.5.2.2 HTML img fallbacks](#ref-for-dfn-epub-creator-18 "§ 3.5.2.2 HTML img fallbacks")
*   [§ 3.5.2.3 HTML script element](#ref-for-dfn-epub-creator-19 "§ 3.5.2.3 HTML script element")
*   [§ 3.6 Resource locations](#ref-for-dfn-epub-creator-20 "§ 3.6 Resource locations")
*   [§ 3.7 Data URLs](#ref-for-dfn-epub-creator-21 "§ 3.7 Data URLs")
*   [§ 3.8 File URLs](#ref-for-dfn-epub-creator-22 "§ 3.8 File URLs")
*   [§ 4.2.1 Introduction](#ref-for-dfn-epub-creator-23 "§ 4.2.1 Introduction")
*   [§ 4.2.2 File and directory structure](#ref-for-dfn-epub-creator-24 "§ 4.2.2 File and directory structure")
*   [§ 4.2.3 File paths and file names](#ref-for-dfn-epub-creator-25 "§ 4.2.3 File paths and file names")
*   [§ 4.2.5 URLs in the OCF abstract container](#ref-for-dfn-epub-creator-26 "§ 4.2.5 URLs in the OCF abstract container")
*   [§ 4.2.6.3.1.3 The rootfile element](#ref-for-dfn-epub-creator-27 "§ 4.2.6.3.1.3 The rootfile element")
*   [§ 4.2.6.3.2 Encryption file (encryption.xml)](#ref-for-dfn-epub-creator-28 "§ 4.2.6.3.2 Encryption file (encryption.xml)")
*   [§ 4.2.6.3.2.1 The encryption element](#ref-for-dfn-epub-creator-29 "§ 4.2.6.3.2.1 The encryption element")
*   [§ 4.2.6.3.2.2 Order of compression and encryption](#ref-for-dfn-epub-creator-30 "§ 4.2.6.3.2.2 Order of compression and encryption")
*   [§ 4.2.6.3.4 Metadata file (metadata.xml)](#ref-for-dfn-epub-creator-31 "§ 4.2.6.3.4 Metadata file (metadata.xml)")
*   [§ 4.2.6.3.5 Rights management file (rights.xml)](#ref-for-dfn-epub-creator-32 "§ 4.2.6.3.5 Rights management file (rights.xml)")
*   [§ 4.2.6.3.6.1 The signatures element](#ref-for-dfn-epub-creator-33 "§ 4.2.6.3.6.1 The signatures element")
*   [§ 4.3.2 ZIP file requirements](#ref-for-dfn-epub-creator-34 "§ 4.3.2 ZIP file requirements")
*   [§ 4.3.3 OCF ZIP container media type identification](#ref-for-dfn-epub-creator-35 "§ 4.3.3 OCF ZIP container media type identification")
*   [§ 4.4 Font obfuscation](#ref-for-dfn-epub-creator-36 "§ 4.4 Font obfuscation")
*   [§ 4.4.1 Introduction](#ref-for-dfn-epub-creator-37 "§ 4.4.1 Introduction")
*   [§ 4.4.2 Limitations](#ref-for-dfn-epub-creator-38 "§ 4.4.2 Limitations")
*   [§ 4.4.3 Obfuscation key](#ref-for-dfn-epub-creator-39 "§ 4.4.3 Obfuscation key")
*   [§ 4.4.4 Obfuscation algorithm](#ref-for-dfn-epub-creator-40 "§ 4.4.4 Obfuscation algorithm")
*   [§ 4.4.5 Specifying obfuscated fonts](#ref-for-dfn-epub-creator-41 "§ 4.4.5 Specifying obfuscated fonts")
*   [§ 5.3.1 The dir attribute (under-implemented)](#ref-for-dfn-epub-creator-42 "§ 5.3.1 The dir attribute (under-implemented)")
*   [§ 5.3.6 The refines attribute](#ref-for-dfn-epub-creator-43 "§ 5.3.6 The refines attribute")
*   [§ 5.5.1 The metadata element](#ref-for-dfn-epub-creator-44 "§ 5.5.1 The metadata element")
*   [§ 5.5.3.1.1 The dc:identifier element](#ref-for-dfn-epub-creator-45 "§ 5.5.3.1.1 The dc:identifier element")
*   [§ 5.5.3.1.2 The dc:title element](#ref-for-dfn-epub-creator-46 "§ 5.5.3.1.2 The dc:title element")
*   [§ 5.5.3.1.3 The dc:language element](#ref-for-dfn-epub-creator-47 "§ 5.5.3.1.3 The dc:language element")
*   [§ 5.5.3.2.3 The dc:creator element](#ref-for-dfn-epub-creator-48 "§ 5.5.3.2.3 The dc:creator element")
*   [§ 5.5.3.2.4 The dc:date element](#ref-for-dfn-epub-creator-49 "§ 5.5.3.2.4 The dc:date element")
*   [§ 5.5.3.2.5 The dc:subject element](#ref-for-dfn-epub-creator-50 "§ 5.5.3.2.5 The dc:subject element")
*   [§ 5.5.3.2.6 The dc:type element](#ref-for-dfn-epub-creator-51 "§ 5.5.3.2.6 The dc:type element")
*   [§ 5.5.4 The meta element](#ref-for-dfn-epub-creator-52 "§ 5.5.4 The meta element")
*   [§ 5.5.5 Last modified date](#ref-for-dfn-epub-creator-53 "§ 5.5.5 Last modified date")
*   [§ 5.5.6 The link element](#ref-for-dfn-epub-creator-54 "§ 5.5.6 The link element")
*   [§ 5.6.2 The item element](#ref-for-dfn-epub-creator-55 "§ 5.6.2 The item element")
*   [§ 5.6.2.1 Resource properties](#ref-for-dfn-epub-creator-56 "§ 5.6.2.1 Resource properties")
*   [§ 5.6.2.2 Examples](#ref-for-dfn-epub-creator-57 "§ 5.6.2.2 Examples") [(2)](#ref-for-dfn-epub-creator-58 "Reference 2") [(3)](#ref-for-dfn-epub-creator-59 "Reference 3") [(4)](#ref-for-dfn-epub-creator-60 "Reference 4")
*   [§ 5.7.1 The spine element](#ref-for-dfn-epub-creator-61 "§ 5.7.1 The spine element")
*   [§ 5.7.2 The itemref element](#ref-for-dfn-epub-creator-62 "§ 5.7.2 The itemref element")
*   [§ 5.8.1 The collection element](#ref-for-dfn-epub-creator-63 "§ 5.8.1 The collection element")
*   [§ 5.9.1 Introduction](#ref-for-dfn-epub-creator-64 "§ 5.9.1 Introduction")
*   [§ 5.9.2 Support](#ref-for-dfn-epub-creator-65 "§ 5.9.2 Support")
*   [§ 5.9.3 The meta element](#ref-for-dfn-epub-creator-66 "§ 5.9.3 The meta element")
*   [§ 6.1.3.1 Structural semantics](#ref-for-dfn-epub-creator-67 "§ 6.1.3.1 Structural semantics")
*   [§ 6.1.3.2 RDFa](#ref-for-dfn-epub-creator-68 "§ 6.1.3.2 RDFa")
*   [§ 6.1.3.3 Content switching (deprecated)](#ref-for-dfn-epub-creator-69 "§ 6.1.3.3 Content switching (deprecated)")
*   [§ 6.1.4.1 Embedded MathML](#ref-for-dfn-epub-creator-70 "§ 6.1.4.1 Embedded MathML")
*   [§ 6.1.4.3.1 The base element](#ref-for-dfn-epub-creator-71 "§ 6.1.4.3.1 The base element")
*   [§ 6.1.4.3.2 The rp element](#ref-for-dfn-epub-creator-72 "§ 6.1.4.3.2 The rp element")
*   [§ 6.1.4.3.3 The embed element](#ref-for-dfn-epub-creator-73 "§ 6.1.4.3.3 The embed element")
*   [§ 6.2 SVG content documents](#ref-for-dfn-epub-creator-74 "§ 6.2 SVG content documents")
*   [§ 6.2.1 Introduction](#ref-for-dfn-epub-creator-75 "§ 6.2.1 Introduction")
*   [§ 6.2.3 Restrictions on SVG](#ref-for-dfn-epub-creator-76 "§ 6.2.3 Restrictions on SVG")
*   [§ 6.3.1.2 CSS requirements](#ref-for-dfn-epub-creator-77 "§ 6.3.1.2 CSS requirements")
*   [§ 6.3.1.3 Prefixed properties](#ref-for-dfn-epub-creator-78 "§ 6.3.1.3 Prefixed properties")
*   [§ 6.3.2.1 Script inclusion](#ref-for-dfn-epub-creator-79 "§ 6.3.2.1 Script inclusion")
*   [§ 6.3.2.2 Scripting contexts](#ref-for-dfn-epub-creator-80 "§ 6.3.2.2 Scripting contexts")
*   [§ 6.3.2.2.1 Container-constrained scripts](#ref-for-dfn-epub-creator-81 "§ 6.3.2.2.1 Container-constrained scripts")
*   [§ 6.3.2.2.2 Spine-level scripts](#ref-for-dfn-epub-creator-82 "§ 6.3.2.2.2 Spine-level scripts")
*   [§ 6.3.2.3 Event model](#ref-for-dfn-epub-creator-83 "§ 6.3.2.3 Event model")
*   [§ 6.3.2.5 Scripting fallbacks](#ref-for-dfn-epub-creator-84 "§ 6.3.2.5 Scripting fallbacks")
*   [§ 7.1 Introduction](#ref-for-dfn-epub-creator-85 "§ 7.1 Introduction")
*   [§ 7.4.1 Introduction](#ref-for-dfn-epub-creator-86 "§ 7.4.1 Introduction")
*   [§ 7.4.2 The toc nav element](#ref-for-dfn-epub-creator-87 "§ 7.4.2 The toc nav element")
*   [§ 7.4.3 The page-list nav element](#ref-for-dfn-epub-creator-88 "§ 7.4.3 The page-list nav element")
*   [§ 7.4.4 The landmarks nav element](#ref-for-dfn-epub-creator-89 "§ 7.4.4 The landmarks nav element")
*   [§ 7.5 Using in the spine](#ref-for-dfn-epub-creator-90 "§ 7.5 Using in the spine")
*   [§ 8.1 Introduction](#ref-for-dfn-epub-creator-91 "§ 8.1 Introduction")
*   [§ 8.2.1 Introduction](#ref-for-dfn-epub-creator-92 "§ 8.2.1 Introduction")
*   [§ 8.2.2.1 Layout](#ref-for-dfn-epub-creator-93 "§ 8.2.2.1 Layout")
*   [§ 8.2.2.1.1 Layout overrides](#ref-for-dfn-epub-creator-94 "§ 8.2.2.1.1 Layout overrides")
*   [§ 8.2.2.2 Orientation](#ref-for-dfn-epub-creator-95 "§ 8.2.2.2 Orientation") [(2)](#ref-for-dfn-epub-creator-96 "Reference 2")
*   [§ 8.2.2.2.1 Orientation overrides](#ref-for-dfn-epub-creator-97 "§ 8.2.2.2.1 Orientation overrides")
*   [§ 8.2.2.3 Synthetic spreads](#ref-for-dfn-epub-creator-98 "§ 8.2.2.3 Synthetic spreads")
*   [§ 8.2.2.3.1 Synthetic spread overrides](#ref-for-dfn-epub-creator-99 "§ 8.2.2.3.1 Synthetic spread overrides")
*   [§ 8.2.2.4 Spread placement](#ref-for-dfn-epub-creator-100 "§ 8.2.2.4 Spread placement")
*   [§ 8.2.2.5 Viewport dimensions (deprecated)](#ref-for-dfn-epub-creator-101 "§ 8.2.2.5 Viewport dimensions (deprecated)")
*   [§ 8.3 Reflowable layouts](#ref-for-dfn-epub-creator-102 "§ 8.3 Reflowable layouts")
*   [§ 8.3.1 The rendition:flow property](#ref-for-dfn-epub-creator-103 "§ 8.3.1 The rendition:flow property")
*   [§ 8.3.1.1 Spine overrides](#ref-for-dfn-epub-creator-104 "§ 8.3.1.1 Spine overrides")
*   [§ 8.3.2 The rendition:align-x-center property](#ref-for-dfn-epub-creator-105 "§ 8.3.2 The rendition:align-x-center property")
*   [§ 9.1 Introduction](#ref-for-dfn-epub-creator-106 "§ 9.1 Introduction")
*   [§ 9.2.2.7 The text element](#ref-for-dfn-epub-creator-107 "§ 9.2.2.7 The text element")
*   [§ 9.3.1 Introduction](#ref-for-dfn-epub-creator-108 "§ 9.3.1 Introduction")
*   [§ 9.3.2 Relationship to the EPUB content document](#ref-for-dfn-epub-creator-109 "§ 9.3.2 Relationship to the EPUB content document")
*   [§ 9.3.2.1 Overlay structure](#ref-for-dfn-epub-creator-110 "§ 9.3.2.1 Overlay structure")
*   [§ 9.3.2.3 Overlay granularity](#ref-for-dfn-epub-creator-111 "§ 9.3.2.3 Overlay granularity")
*   [§ 9.3.3 Structural semantics in overlays](#ref-for-dfn-epub-creator-112 "§ 9.3.3 Structural semantics in overlays")
*   [§ 9.3.4 Associating style information](#ref-for-dfn-epub-creator-113 "§ 9.3.4 Associating style information")
*   [§ 9.3.5.1 Including media overlays](#ref-for-dfn-epub-creator-114 "§ 9.3.5.1 Including media overlays")
*   [§ 9.3.5.2 Overlays package metadata](#ref-for-dfn-epub-creator-115 "§ 9.3.5.2 Overlays package metadata") [(2)](#ref-for-dfn-epub-creator-116 "Reference 2")
*   [§ 9.4.1 Skippability](#ref-for-dfn-epub-creator-117 "§ 9.4.1 Skippability")
*   [§ 9.4.2 Escapability](#ref-for-dfn-epub-creator-118 "§ 9.4.2 Escapability")
*   [§ 9.5 Navigation document overlays](#ref-for-dfn-epub-creator-119 "§ 9.5 Navigation document overlays") [(2)](#ref-for-dfn-epub-creator-120 "Reference 2")
*   [§ 10. Accessibility](#ref-for-dfn-epub-creator-121 "§ 10. Accessibility")
*   [§ 11.1 Overview](#ref-for-dfn-epub-creator-122 "§ 11.1 Overview")
*   [§ 11.2 Threat model](#ref-for-dfn-epub-creator-123 "§ 11.2 Threat model")
*   [§ 11.2.1 EPUB-specific features](#ref-for-dfn-epub-creator-124 "§ 11.2.1 EPUB-specific features")
*   [§ 11.3 Recommendations](#ref-for-dfn-epub-creator-125 "§ 11.3 Recommendations")
*   [§ A.1 Under-implemented features](#ref-for-dfn-epub-creator-126 "§ A.1 Under-implemented features")
*   [§ A.2 Deprecated features](#ref-for-dfn-epub-creator-127 "§ A.2 Deprecated features")
*   [§ B. Allowed external identifiers](#ref-for-dfn-epub-creator-128 "§ B. Allowed external identifiers")
*   [§ C.1 Introduction](#ref-for-dfn-epub-creator-129 "§ C.1 Introduction")
*   [§ D.1.1 Introduction](#ref-for-dfn-epub-creator-130 "§ D.1.1 Introduction")
*   [§ D.1.2 The property data type](#ref-for-dfn-epub-creator-131 "§ D.1.2 The property data type")
*   [§ D.1.3 Default vocabularies](#ref-for-dfn-epub-creator-132 "§ D.1.3 Default vocabularies")
*   [§ D.1.4 The prefix attribute](#ref-for-dfn-epub-creator-133 "§ D.1.4 The prefix attribute") [(2)](#ref-for-dfn-epub-creator-134 "Reference 2") [(3)](#ref-for-dfn-epub-creator-135 "Reference 3")
*   [§ D.1.5 Reserved prefixes](#ref-for-dfn-epub-creator-136 "§ D.1.5 Reserved prefixes") [(2)](#ref-for-dfn-epub-creator-137 "Reference 2")
*   [§ D.2 Property field definitions](#ref-for-dfn-epub-creator-138 "§ D.2 Property field definitions")
*   [§ D.3.3 belongs-to-collection](#ref-for-dfn-epub-creator-139 "§ D.3.3 belongs-to-collection")
*   [§ D.3.4 collection-type](#ref-for-dfn-epub-creator-140 "§ D.3.4 collection-type")
*   [§ D.3.7 group-position](#ref-for-dfn-epub-creator-141 "§ D.3.7 group-position")
*   [§ D.3.8 identifier-type](#ref-for-dfn-epub-creator-142 "§ D.3.8 identifier-type")
*   [§ D.3.10 role](#ref-for-dfn-epub-creator-143 "§ D.3.10 role")
*   [§ D.3.13 title-type](#ref-for-dfn-epub-creator-144 "§ D.3.13 title-type")
*   [§ D.5.1 Custom rendering properties](#ref-for-dfn-epub-creator-145 "§ D.5.1 Custom rendering properties")
*   [§ D.8.1 active-class](#ref-for-dfn-epub-creator-146 "§ D.8.1 active-class")
*   [§ E. Prefixed CSS properties](#ref-for-dfn-epub-creator-147 "§ E. Prefixed CSS properties")
*   [§ F.1 Introduction](#ref-for-dfn-epub-creator-148 "§ F.1 Introduction")

[Permalink](#dfn-epub-manifest) exported

**Referenced in:**

*   [§ 1.4 Terminology](#ref-for-dfn-epub-manifest-1 "§ 1.4 Terminology")
*   [§ 3.1.1 The manifest plane](#ref-for-dfn-epub-manifest-2 "§ 3.1.1 The manifest plane")
*   [§ 3.1.2 The spine plane](#ref-for-dfn-epub-manifest-3 "§ 3.1.2 The spine plane")
*   [§ 3.2 Core media types](#ref-for-dfn-epub-manifest-4 "§ 3.2 Core media types")
*   [§ 3.5.1 Manifest fallbacks](#ref-for-dfn-epub-manifest-5 "§ 3.5.1 Manifest fallbacks")
*   [§ 3.6 Resource locations](#ref-for-dfn-epub-manifest-6 "§ 3.6 Resource locations")
*   [§ 4.2.2 File and directory structure](#ref-for-dfn-epub-manifest-7 "§ 4.2.2 File and directory structure")
*   [§ 5.7.2 The itemref element](#ref-for-dfn-epub-manifest-8 "§ 5.7.2 The itemref element")
*   [§ 6.1.4.1 Embedded MathML](#ref-for-dfn-epub-manifest-9 "§ 6.1.4.1 Embedded MathML")
*   [§ 6.1.4.2 Embedded SVG](#ref-for-dfn-epub-manifest-10 "§ 6.1.4.2 Embedded SVG")
*   [§ 6.3.2.1 Script inclusion](#ref-for-dfn-epub-manifest-11 "§ 6.3.2.1 Script inclusion")
*   [§ 9.3.5.1 Including media overlays](#ref-for-dfn-epub-manifest-12 "§ 9.3.5.1 Including media overlays")
*   [§ 9.3.5.2 Overlays package metadata](#ref-for-dfn-epub-manifest-13 "§ 9.3.5.2 Overlays package metadata")
*   [§ B. Allowed external identifiers](#ref-for-dfn-epub-manifest-14 "§ B. Allowed external identifiers")
*   [§ H.1 Resources](#ref-for-dfn-epub-manifest-15 "§ H.1 Resources")

[Permalink](#dfn-epub-navigation-document) exported

**Referenced in:**

*   [§ 1.2 Organization](#ref-for-dfn-epub-navigation-document-1 "§ 1.2 Organization")
*   [§ 2. EPUB publication conformance](#ref-for-dfn-epub-navigation-document-2 "§ 2. EPUB publication conformance")
*   [§ 5.6.2.1 Resource properties](#ref-for-dfn-epub-navigation-document-3 "§ 5.6.2.1 Resource properties")
*   [§ 5.7.1 The spine element](#ref-for-dfn-epub-navigation-document-4 "§ 5.7.1 The spine element")
*   [§ 5.9.4 The guide element](#ref-for-dfn-epub-navigation-document-5 "§ 5.9.4 The guide element")
*   [§ 7.1 Introduction](#ref-for-dfn-epub-navigation-document-6 "§ 7.1 Introduction")
*   [§ 7.3 The nav element: restrictions](#ref-for-dfn-epub-navigation-document-7 "§ 7.3 The nav element: restrictions")
*   [§ 7.4.1 Introduction](#ref-for-dfn-epub-navigation-document-8 "§ 7.4.1 Introduction")
*   [§ 7.4.3 The page-list nav element](#ref-for-dfn-epub-navigation-document-9 "§ 7.4.3 The page-list nav element")
*   [§ 7.4.4 The landmarks nav element](#ref-for-dfn-epub-navigation-document-10 "§ 7.4.4 The landmarks nav element")
*   [§ 7.4.5 Other nav elements](#ref-for-dfn-epub-navigation-document-11 "§ 7.4.5 Other nav elements")
*   [§ 7.5 Using in the spine](#ref-for-dfn-epub-navigation-document-12 "§ 7.5 Using in the spine")
*   [§ 9.5 Navigation document overlays](#ref-for-dfn-epub-navigation-document-13 "§ 9.5 Navigation document overlays")
*   [§ D.6.3 nav](#ref-for-dfn-epub-navigation-document-14 "§ D.6.3 nav")
*   [§ H.1 Resources](#ref-for-dfn-epub-navigation-document-15 "§ H.1 Resources")

[Permalink](#dfn-epub-publication) exported

**Referenced in:**

*   [§ Abstract](#ref-for-dfn-epub-publication-1 "§ Abstract")
*   [§ 1.1 Overview](#ref-for-dfn-epub-publication-2 "§ 1.1 Overview")
*   [§ 1.2 Organization](#ref-for-dfn-epub-publication-3 "§ 1.2 Organization")
*   [§ 1.3 Relationship to other specifications](#ref-for-dfn-epub-publication-4 "§ 1.3 Relationship to other specifications")
*   [§ 1.3.1 Relationship to HTML](#ref-for-dfn-epub-publication-5 "§ 1.3.1 Relationship to HTML")
*   [§ 1.3.6 Relationship to URL](#ref-for-dfn-epub-publication-6 "§ 1.3.6 Relationship to URL")
*   [§ 1.4 Terminology](#ref-for-dfn-epub-publication-7 "§ 1.4 Terminology") [(2)](#ref-for-dfn-epub-publication-8 "Reference 2") [(3)](#ref-for-dfn-epub-publication-9 "Reference 3") [(4)](#ref-for-dfn-epub-publication-10 "Reference 4") [(5)](#ref-for-dfn-epub-publication-11 "Reference 5") [(6)](#ref-for-dfn-epub-publication-12 "Reference 6") [(7)](#ref-for-dfn-epub-publication-13 "Reference 7") [(8)](#ref-for-dfn-epub-publication-14 "Reference 8") [(9)](#ref-for-dfn-epub-publication-15 "Reference 9") [(10)](#ref-for-dfn-epub-publication-16 "Reference 10") [(11)](#ref-for-dfn-epub-publication-17 "Reference 11")
*   [§ 2. EPUB publication conformance](#ref-for-dfn-epub-publication-18 "§ 2. EPUB publication conformance")
*   [§ 2.1 Conformance checking](#ref-for-dfn-epub-publication-19 "§ 2.1 Conformance checking")
*   [§ 3.1 Introduction](#ref-for-dfn-epub-publication-20 "§ 3.1 Introduction")
*   [§ 3.1.1 The manifest plane](#ref-for-dfn-epub-publication-21 "§ 3.1.1 The manifest plane")
*   [§ 3.1.2 The spine plane](#ref-for-dfn-epub-publication-22 "§ 3.1.2 The spine plane")
*   [§ 3.4 Exempt resources](#ref-for-dfn-epub-publication-23 "§ 3.4 Exempt resources")
*   [§ 3.8 File URLs](#ref-for-dfn-epub-publication-24 "§ 3.8 File URLs")
*   [§ 4.1 Introduction](#ref-for-dfn-epub-publication-25 "§ 4.1 Introduction")
*   [§ 4.2.1 Introduction](#ref-for-dfn-epub-publication-26 "§ 4.2.1 Introduction")
*   [§ 4.2.2 File and directory structure](#ref-for-dfn-epub-publication-27 "§ 4.2.2 File and directory structure")
*   [§ 4.2.6.3.1.3 The rootfile element](#ref-for-dfn-epub-publication-28 "§ 4.2.6.3.1.3 The rootfile element")
*   [§ 4.2.6.3.2.1 The encryption element](#ref-for-dfn-epub-publication-29 "§ 4.2.6.3.2.1 The encryption element")
*   [§ 4.2.6.3.3 Manifest file (manifest.xml)](#ref-for-dfn-epub-publication-30 "§ 4.2.6.3.3 Manifest file (manifest.xml)")
*   [§ 4.2.6.3.5 Rights management file (rights.xml)](#ref-for-dfn-epub-publication-31 "§ 4.2.6.3.5 Rights management file (rights.xml)")
*   [§ 4.2.6.3.6 Digital signatures file (signatures.xml)](#ref-for-dfn-epub-publication-32 "§ 4.2.6.3.6 Digital signatures file (signatures.xml)")
*   [§ 4.3.1 Introduction](#ref-for-dfn-epub-publication-33 "§ 4.3.1 Introduction")
*   [§ 4.4.1 Introduction](#ref-for-dfn-epub-publication-34 "§ 4.4.1 Introduction")
*   [§ 4.4.5 Specifying obfuscated fonts](#ref-for-dfn-epub-publication-35 "§ 4.4.5 Specifying obfuscated fonts")
*   [§ 5.1 Introduction](#ref-for-dfn-epub-publication-36 "§ 5.1 Introduction")
*   [§ 5.4 The package element](#ref-for-dfn-epub-publication-37 "§ 5.4 The package element")
*   [§ 5.5.1 The metadata element](#ref-for-dfn-epub-publication-38 "§ 5.5.1 The metadata element")
*   [§ 5.5.3.1.1 The dc:identifier element](#ref-for-dfn-epub-publication-39 "§ 5.5.3.1.1 The dc:identifier element")
*   [§ 5.5.3.1.2 The dc:title element](#ref-for-dfn-epub-publication-40 "§ 5.5.3.1.2 The dc:title element")
*   [§ 5.5.3.1.3 The dc:language element](#ref-for-dfn-epub-publication-41 "§ 5.5.3.1.3 The dc:language element")
*   [§ 5.5.3.2.3 The dc:creator element](#ref-for-dfn-epub-publication-42 "§ 5.5.3.2.3 The dc:creator element")
*   [§ 5.5.3.2.4 The dc:date element](#ref-for-dfn-epub-publication-43 "§ 5.5.3.2.4 The dc:date element")
*   [§ 5.5.3.2.5 The dc:subject element](#ref-for-dfn-epub-publication-44 "§ 5.5.3.2.5 The dc:subject element")
*   [§ 5.5.3.2.6 The dc:type element](#ref-for-dfn-epub-publication-45 "§ 5.5.3.2.6 The dc:type element")
*   [§ 5.5.4 The meta element](#ref-for-dfn-epub-publication-46 "§ 5.5.4 The meta element")
*   [§ 5.5.5 Last modified date](#ref-for-dfn-epub-publication-47 "§ 5.5.5 Last modified date")
*   [§ 5.5.6 The link element](#ref-for-dfn-epub-publication-48 "§ 5.5.6 The link element")
*   [§ 5.7.2 The itemref element](#ref-for-dfn-epub-publication-49 "§ 5.7.2 The itemref element")
*   [§ 5.8.1 The collection element](#ref-for-dfn-epub-publication-50 "§ 5.8.1 The collection element")
*   [§ 5.9.2 Support](#ref-for-dfn-epub-publication-51 "§ 5.9.2 Support")
*   [§ 6.1.2 XHTML requirements](#ref-for-dfn-epub-publication-52 "§ 6.1.2 XHTML requirements")
*   [§ 6.1.4.3.1 The base element](#ref-for-dfn-epub-publication-53 "§ 6.1.4.3.1 The base element")
*   [§ 6.2.2 SVG requirements](#ref-for-dfn-epub-publication-54 "§ 6.2.2 SVG requirements")
*   [§ 6.3.2.1 Script inclusion](#ref-for-dfn-epub-publication-55 "§ 6.3.2.1 Script inclusion")
*   [§ 6.3.2.2.2 Spine-level scripts](#ref-for-dfn-epub-publication-56 "§ 6.3.2.2.2 Spine-level scripts")
*   [§ 6.3.2.3 Event model](#ref-for-dfn-epub-publication-57 "§ 6.3.2.3 Event model")
*   [§ 7.1 Introduction](#ref-for-dfn-epub-publication-58 "§ 7.1 Introduction")
*   [§ 7.4.2 The toc nav element](#ref-for-dfn-epub-publication-59 "§ 7.4.2 The toc nav element")
*   [§ 7.4.3 The page-list nav element](#ref-for-dfn-epub-publication-60 "§ 7.4.3 The page-list nav element")
*   [§ 8.2.1 Introduction](#ref-for-dfn-epub-publication-61 "§ 8.2.1 Introduction")
*   [§ 8.3 Reflowable layouts](#ref-for-dfn-epub-publication-62 "§ 8.3 Reflowable layouts")
*   [§ 8.3.1 The rendition:flow property](#ref-for-dfn-epub-publication-63 "§ 8.3.1 The rendition:flow property")
*   [§ 8.3.1.1 Spine overrides](#ref-for-dfn-epub-publication-64 "§ 8.3.1.1 Spine overrides")
*   [§ 9.1 Introduction](#ref-for-dfn-epub-publication-65 "§ 9.1 Introduction")
*   [§ 9.3.2.4 Text-to-speech rendering](#ref-for-dfn-epub-publication-66 "§ 9.3.2.4 Text-to-speech rendering")
*   [§ 9.3.4 Associating style information](#ref-for-dfn-epub-publication-67 "§ 9.3.4 Associating style information")
*   [§ 9.3.5.2 Overlays package metadata](#ref-for-dfn-epub-publication-68 "§ 9.3.5.2 Overlays package metadata")
*   [§ 10. Accessibility](#ref-for-dfn-epub-publication-69 "§ 10. Accessibility")
*   [§ 11.1 Overview](#ref-for-dfn-epub-publication-70 "§ 11.1 Overview")
*   [§ 11.2 Threat model](#ref-for-dfn-epub-publication-71 "§ 11.2 Threat model")
*   [§ 11.3 Recommendations](#ref-for-dfn-epub-publication-72 "§ 11.3 Recommendations")
*   [§ A.2 Deprecated features](#ref-for-dfn-epub-publication-73 "§ A.2 Deprecated features")
*   [§ D.3.3 belongs-to-collection](#ref-for-dfn-epub-publication-74 "§ D.3.3 belongs-to-collection")
*   [§ D.3.4 collection-type](#ref-for-dfn-epub-publication-75 "§ D.3.4 collection-type")
*   [§ D.3.7 group-position](#ref-for-dfn-epub-publication-76 "§ D.3.7 group-position")
*   [§ D.3.11 source-of](#ref-for-dfn-epub-publication-77 "§ D.3.11 source-of")
*   [§ D.4.1.5 record](#ref-for-dfn-epub-publication-78 "§ D.4.1.5 record")
*   [§ D.6.1 cover-image](#ref-for-dfn-epub-publication-79 "§ D.6.1 cover-image")
*   [§ D.6.3 nav](#ref-for-dfn-epub-publication-80 "§ D.6.3 nav")
*   [§ D.8.2 duration](#ref-for-dfn-epub-publication-81 "§ D.8.2 duration")
*   [§ H.1 Resources](#ref-for-dfn-epub-publication-82 "§ H.1 Resources")
*   [§ H.3 Packaged EPUB](#ref-for-dfn-epub-publication-83 "§ H.3 Packaged EPUB")
*   [§ I.1 The application/oebps-package+xml media type](#ref-for-dfn-epub-publication-84 "§ I.1 The application/oebps-package+xml media type")
*   [§ I.2 The application/epub+zip media type](#ref-for-dfn-epub-publication-85 "§ I.2 The application/epub+zip media type")
*   [§ K. Change log](#ref-for-dfn-epub-publication-86 "§ K. Change log")

[Permalink](#dfn-epub-reading-system) exported

**Referenced in:**

*   [§ 1.1 Overview](#ref-for-dfn-epub-reading-system-1 "§ 1.1 Overview")
*   [§ 1.2 Organization](#ref-for-dfn-epub-reading-system-2 "§ 1.2 Organization") [(2)](#ref-for-dfn-epub-reading-system-3 "Reference 2")
*   [§ 1.4 Terminology](#ref-for-dfn-epub-reading-system-4 "§ 1.4 Terminology") [(2)](#ref-for-dfn-epub-reading-system-5 "Reference 2")
*   [§ 3.1.2 The spine plane](#ref-for-dfn-epub-reading-system-6 "§ 3.1.2 The spine plane")
*   [§ 3.1.3 The content plane](#ref-for-dfn-epub-reading-system-7 "§ 3.1.3 The content plane")
*   [§ 3.3 Foreign resources](#ref-for-dfn-epub-reading-system-8 "§ 3.3 Foreign resources")
*   [§ 3.4 Exempt resources](#ref-for-dfn-epub-reading-system-9 "§ 3.4 Exempt resources")
*   [§ 3.5.1 Manifest fallbacks](#ref-for-dfn-epub-reading-system-10 "§ 3.5.1 Manifest fallbacks")
*   [§ 3.5.2.1 HTML audio and video fallbacks](#ref-for-dfn-epub-reading-system-11 "§ 3.5.2.1 HTML audio and video fallbacks")
*   [§ 3.6 Resource locations](#ref-for-dfn-epub-reading-system-12 "§ 3.6 Resource locations")
*   [§ 3.7 Data URLs](#ref-for-dfn-epub-reading-system-13 "§ 3.7 Data URLs")
*   [§ 4.1 Introduction](#ref-for-dfn-epub-reading-system-14 "§ 4.1 Introduction")
*   [§ 4.2.2 File and directory structure](#ref-for-dfn-epub-reading-system-15 "§ 4.2.2 File and directory structure")
*   [§ 4.2.3 File paths and file names](#ref-for-dfn-epub-reading-system-16 "§ 4.2.3 File paths and file names")
*   [§ 4.2.5 URLs in the OCF abstract container](#ref-for-dfn-epub-reading-system-17 "§ 4.2.5 URLs in the OCF abstract container")
*   [§ 4.2.6.3.2.1 The encryption element](#ref-for-dfn-epub-reading-system-18 "§ 4.2.6.3.2.1 The encryption element")
*   [§ 4.2.6.3.2.2 Order of compression and encryption](#ref-for-dfn-epub-reading-system-19 "§ 4.2.6.3.2.2 Order of compression and encryption")
*   [§ 4.2.6.3.6 Digital signatures file (signatures.xml)](#ref-for-dfn-epub-reading-system-20 "§ 4.2.6.3.6 Digital signatures file (signatures.xml)")
*   [§ 4.3.1 Introduction](#ref-for-dfn-epub-reading-system-21 "§ 4.3.1 Introduction")
*   [§ 4.4.2 Limitations](#ref-for-dfn-epub-reading-system-22 "§ 4.4.2 Limitations")
*   [§ 5.1 Introduction](#ref-for-dfn-epub-reading-system-23 "§ 5.1 Introduction")
*   [§ 5.3.1 The dir attribute (under-implemented)](#ref-for-dfn-epub-reading-system-24 "§ 5.3.1 The dir attribute (under-implemented)")
*   [§ 5.5.1 The metadata element](#ref-for-dfn-epub-reading-system-25 "§ 5.5.1 The metadata element")
*   [§ 5.5.3.1.2 The dc:title element](#ref-for-dfn-epub-reading-system-26 "§ 5.5.3.1.2 The dc:title element")
*   [§ 5.5.3.1.3 The dc:language element](#ref-for-dfn-epub-reading-system-27 "§ 5.5.3.1.3 The dc:language element")
*   [§ 5.5.3.2.3 The dc:creator element](#ref-for-dfn-epub-reading-system-28 "§ 5.5.3.2.3 The dc:creator element")
*   [§ 5.5.6 The link element](#ref-for-dfn-epub-reading-system-29 "§ 5.5.6 The link element")
*   [§ 5.6.1 The manifest element](#ref-for-dfn-epub-reading-system-30 "§ 5.6.1 The manifest element")
*   [§ 5.6.2.1 Resource properties](#ref-for-dfn-epub-reading-system-31 "§ 5.6.2.1 Resource properties")
*   [§ 5.6.2.2 Examples](#ref-for-dfn-epub-reading-system-32 "§ 5.6.2.2 Examples") [(2)](#ref-for-dfn-epub-reading-system-33 "Reference 2")
*   [§ 5.7.1 The spine element](#ref-for-dfn-epub-reading-system-34 "§ 5.7.1 The spine element")
*   [§ 5.7.2 The itemref element](#ref-for-dfn-epub-reading-system-35 "§ 5.7.2 The itemref element")
*   [§ 5.9.1 Introduction](#ref-for-dfn-epub-reading-system-36 "§ 5.9.1 Introduction")
*   [§ 5.9.3 The meta element](#ref-for-dfn-epub-reading-system-37 "§ 5.9.3 The meta element")
*   [§ 5.9.4 The guide element](#ref-for-dfn-epub-reading-system-38 "§ 5.9.4 The guide element")
*   [§ 5.9.5 NCX](#ref-for-dfn-epub-reading-system-39 "§ 5.9.5 NCX")
*   [§ 6.1.3.3 Content switching (deprecated)](#ref-for-dfn-epub-reading-system-40 "§ 6.1.3.3 Content switching (deprecated)")
*   [§ 6.1.3.5 Custom attributes](#ref-for-dfn-epub-reading-system-41 "§ 6.1.3.5 Custom attributes")
*   [§ 6.1.4.1 Embedded MathML](#ref-for-dfn-epub-reading-system-42 "§ 6.1.4.1 Embedded MathML")
*   [§ 6.1.4.3.1 The base element](#ref-for-dfn-epub-reading-system-43 "§ 6.1.4.3.1 The base element")
*   [§ 6.1.4.3.2 The rp element](#ref-for-dfn-epub-reading-system-44 "§ 6.1.4.3.2 The rp element")
*   [§ 6.1.4.3.3 The embed element](#ref-for-dfn-epub-reading-system-45 "§ 6.1.4.3.3 The embed element")
*   [§ 6.2 SVG content documents](#ref-for-dfn-epub-reading-system-46 "§ 6.2 SVG content documents")
*   [§ 6.3.1.1 Introduction](#ref-for-dfn-epub-reading-system-47 "§ 6.3.1.1 Introduction")
*   [§ 6.3.1.2 CSS requirements](#ref-for-dfn-epub-reading-system-48 "§ 6.3.1.2 CSS requirements")
*   [§ 6.3.1.3 Prefixed properties](#ref-for-dfn-epub-reading-system-49 "§ 6.3.1.3 Prefixed properties")
*   [§ 6.3.2.1 Script inclusion](#ref-for-dfn-epub-reading-system-50 "§ 6.3.2.1 Script inclusion")
*   [§ 6.3.2.2 Scripting contexts](#ref-for-dfn-epub-reading-system-51 "§ 6.3.2.2 Scripting contexts")
*   [§ 6.3.2.2.1 Container-constrained scripts](#ref-for-dfn-epub-reading-system-52 "§ 6.3.2.2.1 Container-constrained scripts")
*   [§ 6.3.2.2.2 Spine-level scripts](#ref-for-dfn-epub-reading-system-53 "§ 6.3.2.2.2 Spine-level scripts")
*   [§ 6.3.2.3 Event model](#ref-for-dfn-epub-reading-system-54 "§ 6.3.2.3 Event model")
*   [§ 7.1 Introduction](#ref-for-dfn-epub-reading-system-55 "§ 7.1 Introduction")
*   [§ 7.4.4 The landmarks nav element](#ref-for-dfn-epub-reading-system-56 "§ 7.4.4 The landmarks nav element")
*   [§ 7.4.5 Other nav elements](#ref-for-dfn-epub-reading-system-57 "§ 7.4.5 Other nav elements")
*   [§ 7.5 Using in the spine](#ref-for-dfn-epub-reading-system-58 "§ 7.5 Using in the spine")
*   [§ 8.1 Introduction](#ref-for-dfn-epub-reading-system-59 "§ 8.1 Introduction")
*   [§ 8.2.1 Introduction](#ref-for-dfn-epub-reading-system-60 "§ 8.2.1 Introduction")
*   [§ 8.2.2.1 Layout](#ref-for-dfn-epub-reading-system-61 "§ 8.2.2.1 Layout")
*   [§ 8.2.2.2 Orientation](#ref-for-dfn-epub-reading-system-62 "§ 8.2.2.2 Orientation")
*   [§ 8.2.2.2.1 Orientation overrides](#ref-for-dfn-epub-reading-system-63 "§ 8.2.2.2.1 Orientation overrides")
*   [§ 8.2.2.3 Synthetic spreads](#ref-for-dfn-epub-reading-system-64 "§ 8.2.2.3 Synthetic spreads")
*   [§ 8.2.2.3.1 Synthetic spread overrides](#ref-for-dfn-epub-reading-system-65 "§ 8.2.2.3.1 Synthetic spread overrides")
*   [§ 8.2.2.4 Spread placement](#ref-for-dfn-epub-reading-system-66 "§ 8.2.2.4 Spread placement")
*   [§ 8.3.1 The rendition:flow property](#ref-for-dfn-epub-reading-system-67 "§ 8.3.1 The rendition:flow property")
*   [§ 9.1 Introduction](#ref-for-dfn-epub-reading-system-68 "§ 9.1 Introduction")
*   [§ 9.3.2 Relationship to the EPUB content document](#ref-for-dfn-epub-reading-system-69 "§ 9.3.2 Relationship to the EPUB content document")
*   [§ 9.3.2.1 Overlay structure](#ref-for-dfn-epub-reading-system-70 "§ 9.3.2.1 Overlay structure") [(2)](#ref-for-dfn-epub-reading-system-71 "Reference 2")
*   [§ 9.3.2.2 Referencing document fragments](#ref-for-dfn-epub-reading-system-72 "§ 9.3.2.2 Referencing document fragments")
*   [§ 9.3.3 Structural semantics in overlays](#ref-for-dfn-epub-reading-system-73 "§ 9.3.3 Structural semantics in overlays")
*   [§ 9.3.4 Associating style information](#ref-for-dfn-epub-reading-system-74 "§ 9.3.4 Associating style information")
*   [§ 9.4.1 Skippability](#ref-for-dfn-epub-reading-system-75 "§ 9.4.1 Skippability")
*   [§ 9.4.2 Escapability](#ref-for-dfn-epub-reading-system-76 "§ 9.4.2 Escapability")
*   [§ 9.5 Navigation document overlays](#ref-for-dfn-epub-reading-system-77 "§ 9.5 Navigation document overlays")
*   [§ 11.1 Overview](#ref-for-dfn-epub-reading-system-78 "§ 11.1 Overview")
*   [§ 11.2.1 EPUB-specific features](#ref-for-dfn-epub-reading-system-79 "§ 11.2.1 EPUB-specific features")
*   [§ 11.3 Recommendations](#ref-for-dfn-epub-reading-system-80 "§ 11.3 Recommendations")
*   [§ A. Unsupported features](#ref-for-dfn-epub-reading-system-81 "§ A. Unsupported features")
*   [§ A.2 Deprecated features](#ref-for-dfn-epub-reading-system-82 "§ A.2 Deprecated features")
*   [§ C.1 Introduction](#ref-for-dfn-epub-reading-system-83 "§ C.1 Introduction")
*   [§ C.2 The epub:type attribute](#ref-for-dfn-epub-reading-system-84 "§ C.2 The epub:type attribute")
*   [§ D.1.1 Introduction](#ref-for-dfn-epub-reading-system-85 "§ D.1.1 Introduction")
*   [§ D.3.3 belongs-to-collection](#ref-for-dfn-epub-reading-system-86 "§ D.3.3 belongs-to-collection")
*   [§ D.3.4 collection-type](#ref-for-dfn-epub-reading-system-87 "§ D.3.4 collection-type")
*   [§ D.3.13 title-type](#ref-for-dfn-epub-reading-system-88 "§ D.3.13 title-type")
*   [§ D.4.1.1 alternate](#ref-for-dfn-epub-reading-system-89 "§ D.4.1.1 alternate")
*   [§ D.5.1 Custom rendering properties](#ref-for-dfn-epub-reading-system-90 "§ D.5.1 Custom rendering properties")
*   [§ E. Prefixed CSS properties](#ref-for-dfn-epub-reading-system-91 "§ E. Prefixed CSS properties")

[Permalink](#dfn-epub-spine) exported

**Referenced in:**

*   [§ 1.2 Organization](#ref-for-dfn-epub-spine-1 "§ 1.2 Organization")
*   [§ 1.4 Terminology](#ref-for-dfn-epub-spine-2 "§ 1.4 Terminology") [(2)](#ref-for-dfn-epub-spine-3 "Reference 2") [(3)](#ref-for-dfn-epub-spine-4 "Reference 3") [(4)](#ref-for-dfn-epub-spine-5 "Reference 4") [(5)](#ref-for-dfn-epub-spine-6 "Reference 5")
*   [§ 3.1 Introduction](#ref-for-dfn-epub-spine-7 "§ 3.1 Introduction")
*   [§ 3.1.2 The spine plane](#ref-for-dfn-epub-spine-8 "§ 3.1.2 The spine plane")
*   [§ 3.2 Core media types](#ref-for-dfn-epub-spine-9 "§ 3.2 Core media types")
*   [§ 3.4 Exempt resources](#ref-for-dfn-epub-spine-10 "§ 3.4 Exempt resources")
*   [§ 3.5.1 Manifest fallbacks](#ref-for-dfn-epub-spine-11 "§ 3.5.1 Manifest fallbacks")
*   [§ 3.7 Data URLs](#ref-for-dfn-epub-spine-12 "§ 3.7 Data URLs")
*   [§ 5.5.6 The link element](#ref-for-dfn-epub-spine-13 "§ 5.5.6 The link element")
*   [§ 5.6.2.2 Examples](#ref-for-dfn-epub-spine-14 "§ 5.6.2.2 Examples")
*   [§ 5.7.2 The itemref element](#ref-for-dfn-epub-spine-15 "§ 5.7.2 The itemref element")
*   [§ 7.1 Introduction](#ref-for-dfn-epub-spine-16 "§ 7.1 Introduction")
*   [§ 7.3 The nav element: restrictions](#ref-for-dfn-epub-spine-17 "§ 7.3 The nav element: restrictions")
*   [§ 7.4.2 The toc nav element](#ref-for-dfn-epub-spine-18 "§ 7.4.2 The toc nav element")
*   [§ 7.5 Using in the spine](#ref-for-dfn-epub-spine-19 "§ 7.5 Using in the spine")
*   [§ 8.2.2.1 Layout](#ref-for-dfn-epub-spine-20 "§ 8.2.2.1 Layout")
*   [§ 8.2.2.1.1 Layout overrides](#ref-for-dfn-epub-spine-21 "§ 8.2.2.1.1 Layout overrides")
*   [§ 8.2.2.2 Orientation](#ref-for-dfn-epub-spine-22 "§ 8.2.2.2 Orientation")
*   [§ 8.2.2.2.1 Orientation overrides](#ref-for-dfn-epub-spine-23 "§ 8.2.2.2.1 Orientation overrides")
*   [§ 8.2.2.3.1 Synthetic spread overrides](#ref-for-dfn-epub-spine-24 "§ 8.2.2.3.1 Synthetic spread overrides")
*   [§ 8.2.2.4 Spread placement](#ref-for-dfn-epub-spine-25 "§ 8.2.2.4 Spread placement")
*   [§ 8.3.1 The rendition:flow property](#ref-for-dfn-epub-spine-26 "§ 8.3.1 The rendition:flow property")
*   [§ 8.3.1.1 Spine overrides](#ref-for-dfn-epub-spine-27 "§ 8.3.1.1 Spine overrides")
*   [§ 8.3.2 The rendition:align-x-center property](#ref-for-dfn-epub-spine-28 "§ 8.3.2 The rendition:align-x-center property")
*   [§ 9.5 Navigation document overlays](#ref-for-dfn-epub-spine-29 "§ 9.5 Navigation document overlays")
*   [§ D.5 Package rendering vocabulary](#ref-for-dfn-epub-spine-30 "§ D.5 Package rendering vocabulary")
*   [§ D.5.1 Custom rendering properties](#ref-for-dfn-epub-spine-31 "§ D.5.1 Custom rendering properties")

[Permalink](#dfn-exempt-resource) exported

**Referenced in:**

*   [§ 3.1 Introduction](#ref-for-dfn-exempt-resource-1 "§ 3.1 Introduction")
*   [§ 3.1.3 The content plane](#ref-for-dfn-exempt-resource-2 "§ 3.1.3 The content plane")
*   [§ 3.4 Exempt resources](#ref-for-dfn-exempt-resource-3 "§ 3.4 Exempt resources")
*   [§ 3.5.2.1 HTML audio and video fallbacks](#ref-for-dfn-exempt-resource-4 "§ 3.5.2.1 HTML audio and video fallbacks")
*   [§ H.1 Resources](#ref-for-dfn-exempt-resource-5 "§ H.1 Resources")

[Permalink](#dfn-file-name) exported

**Referenced in:**

*   [§ 4.2.3 File paths and file names](#ref-for-dfn-file-name-1 "§ 4.2.3 File paths and file names")
*   [§ 4.2.4 Deriving file paths](#ref-for-dfn-file-name-2 "§ 4.2.4 Deriving file paths")

[Permalink](#dfn-file-path) exported

**Referenced in:**

*   [§ 4.2.3 File paths and file names](#ref-for-dfn-file-path-1 "§ 4.2.3 File paths and file names")
*   [§ 4.2.5 URLs in the OCF abstract container](#ref-for-dfn-file-path-2 "§ 4.2.5 URLs in the OCF abstract container")

[Permalink](#dfn-fixed-layout-document) exported

**Referenced in:**

*   [§ 6.3.2.2.1 Container-constrained scripts](#ref-for-dfn-fixed-layout-document-1 "§ 6.3.2.2.1 Container-constrained scripts")
*   [§ 8.2.1 Introduction](#ref-for-dfn-fixed-layout-document-2 "§ 8.2.1 Introduction")
*   [§ 8.2.2.1 Layout](#ref-for-dfn-fixed-layout-document-3 "§ 8.2.2.1 Layout")
*   [§ 8.2.2.6 Content document dimensions](#ref-for-dfn-fixed-layout-document-4 "§ 8.2.2.6 Content document dimensions") [(2)](#ref-for-dfn-fixed-layout-document-5 "Reference 2") [(3)](#ref-for-dfn-fixed-layout-document-6 "Reference 3")
*   [§ F.1 Introduction](#ref-for-dfn-fixed-layout-document-7 "§ F.1 Introduction")
*   [§ F.2 Syntax](#ref-for-dfn-fixed-layout-document-8 "§ F.2 Syntax")

[Permalink](#dfn-foreign-content-document) exported

**Referenced in:**

*   [§ 1.4 Terminology](#ref-for-dfn-foreign-content-document-1 "§ 1.4 Terminology") [(2)](#ref-for-dfn-foreign-content-document-2 "Reference 2") [(3)](#ref-for-dfn-foreign-content-document-3 "Reference 3") [(4)](#ref-for-dfn-foreign-content-document-4 "Reference 4")
*   [§ 3.1 Introduction](#ref-for-dfn-foreign-content-document-5 "§ 3.1 Introduction")
*   [§ 3.1.2 The spine plane](#ref-for-dfn-foreign-content-document-6 "§ 3.1.2 The spine plane")
*   [§ 3.1.3 The content plane](#ref-for-dfn-foreign-content-document-7 "§ 3.1.3 The content plane")
*   [§ 3.2 Core media types](#ref-for-dfn-foreign-content-document-8 "§ 3.2 Core media types") [(2)](#ref-for-dfn-foreign-content-document-9 "Reference 2")
*   [§ 3.3 Foreign resources](#ref-for-dfn-foreign-content-document-10 "§ 3.3 Foreign resources")
*   [§ 3.4 Exempt resources](#ref-for-dfn-foreign-content-document-11 "§ 3.4 Exempt resources")
*   [§ 3.5.1 Manifest fallbacks](#ref-for-dfn-foreign-content-document-12 "§ 3.5.1 Manifest fallbacks")
*   [§ 5.6.2.2 Examples](#ref-for-dfn-foreign-content-document-13 "§ 5.6.2.2 Examples") [(2)](#ref-for-dfn-foreign-content-document-14 "Reference 2") [(3)](#ref-for-dfn-foreign-content-document-15 "Reference 3")
*   [§ 5.7.1 The spine element](#ref-for-dfn-foreign-content-document-16 "§ 5.7.1 The spine element")
*   [§ 5.7.2 The itemref element](#ref-for-dfn-foreign-content-document-17 "§ 5.7.2 The itemref element") [(2)](#ref-for-dfn-foreign-content-document-18 "Reference 2")
*   [§ H.1 Resources](#ref-for-dfn-foreign-content-document-19 "§ H.1 Resources")

[Permalink](#dfn-foreign-resource) exported

**Referenced in:**

*   [§ 1.4 Terminology](#ref-for-dfn-foreign-resource-1 "§ 1.4 Terminology")
*   [§ 3.1 Introduction](#ref-for-dfn-foreign-resource-2 "§ 3.1 Introduction")
*   [§ 3.1.3 The content plane](#ref-for-dfn-foreign-resource-3 "§ 3.1.3 The content plane")
*   [§ 3.3 Foreign resources](#ref-for-dfn-foreign-resource-4 "§ 3.3 Foreign resources")
*   [§ 3.4 Exempt resources](#ref-for-dfn-foreign-resource-5 "§ 3.4 Exempt resources") [(2)](#ref-for-dfn-foreign-resource-6 "Reference 2")
*   [§ 3.5.1 Manifest fallbacks](#ref-for-dfn-foreign-resource-7 "§ 3.5.1 Manifest fallbacks")
*   [§ 3.5.2.1 HTML audio and video fallbacks](#ref-for-dfn-foreign-resource-8 "§ 3.5.2.1 HTML audio and video fallbacks")
*   [§ 3.5.2.2 HTML img fallbacks](#ref-for-dfn-foreign-resource-9 "§ 3.5.2.2 HTML img fallbacks")
*   [§ 3.6 Resource locations](#ref-for-dfn-foreign-resource-10 "§ 3.6 Resource locations")
*   [§ 3.9 XML conformance](#ref-for-dfn-foreign-resource-11 "§ 3.9 XML conformance")

[Permalink](#dfn-linked-resource) exported

**Referenced in:**

*   [§ 3.1 Introduction](#ref-for-dfn-linked-resource-1 "§ 3.1 Introduction")
*   [§ 3.1.1 The manifest plane](#ref-for-dfn-linked-resource-2 "§ 3.1.1 The manifest plane")
*   [§ 5.5.6 The link element](#ref-for-dfn-linked-resource-3 "§ 5.5.6 The link element")
*   [§ 5.6.1 The manifest element](#ref-for-dfn-linked-resource-4 "§ 5.6.1 The manifest element")
*   [§ H.1 Resources](#ref-for-dfn-linked-resource-5 "§ H.1 Resources")

[Permalink](#dfn-media-overlay-document) exported

**Referenced in:**

*   [§ 1.2 Organization](#ref-for-dfn-media-overlay-document-1 "§ 1.2 Organization")
*   [§ 5.6.2 The item element](#ref-for-dfn-media-overlay-document-2 "§ 5.6.2 The item element")
*   [§ 9.2.1 Media overlay document requirements](#ref-for-dfn-media-overlay-document-3 "§ 9.2.1 Media overlay document requirements")
*   [§ 9.2.2.1 The smil element](#ref-for-dfn-media-overlay-document-4 "§ 9.2.2.1 The smil element")
*   [§ 9.2.2.2 The head element](#ref-for-dfn-media-overlay-document-5 "§ 9.2.2.2 The head element")
*   [§ 9.2.2.3 The metadata element](#ref-for-dfn-media-overlay-document-6 "§ 9.2.2.3 The metadata element")
*   [§ 9.2.2.4 The body element](#ref-for-dfn-media-overlay-document-7 "§ 9.2.2.4 The body element")
*   [§ 9.3.2.1 Overlay structure](#ref-for-dfn-media-overlay-document-8 "§ 9.3.2.1 Overlay structure")
*   [§ 9.3.2.3 Overlay granularity](#ref-for-dfn-media-overlay-document-9 "§ 9.3.2.3 Overlay granularity")
*   [§ 9.3.3 Structural semantics in overlays](#ref-for-dfn-media-overlay-document-10 "§ 9.3.3 Structural semantics in overlays") [(2)](#ref-for-dfn-media-overlay-document-11 "Reference 2")
*   [§ 9.3.4 Associating style information](#ref-for-dfn-media-overlay-document-12 "§ 9.3.4 Associating style information")
*   [§ 9.3.5.1 Including media overlays](#ref-for-dfn-media-overlay-document-13 "§ 9.3.5.1 Including media overlays")
*   [§ 9.3.5.2 Overlays package metadata](#ref-for-dfn-media-overlay-document-14 "§ 9.3.5.2 Overlays package metadata")
*   [§ 9.4.2 Escapability](#ref-for-dfn-media-overlay-document-15 "§ 9.4.2 Escapability")
*   [§ 9.5 Navigation document overlays](#ref-for-dfn-media-overlay-document-16 "§ 9.5 Navigation document overlays")
*   [§ C.1 Introduction](#ref-for-dfn-media-overlay-document-17 "§ C.1 Introduction")
*   [§ D.1.1 Introduction](#ref-for-dfn-media-overlay-document-18 "§ D.1.1 Introduction")
*   [§ D.1.4 The prefix attribute](#ref-for-dfn-media-overlay-document-19 "§ D.1.4 The prefix attribute")
*   [§ D.6.4 remote-resources](#ref-for-dfn-media-overlay-document-20 "§ D.6.4 remote-resources")
*   [§ D.8.2 duration](#ref-for-dfn-media-overlay-document-21 "§ D.8.2 duration") [(2)](#ref-for-dfn-media-overlay-document-22 "Reference 2")
*   [§ G.3 Media overlays schema](#ref-for-dfn-media-overlay-document-23 "§ G.3 Media overlays schema")

[Permalink](#dfn-non-codec) exported

**Referenced in:**

*   [§ 4.2.6.3.2.2 Order of compression and encryption](#ref-for-dfn-non-codec-1 "§ 4.2.6.3.2.2 Order of compression and encryption")

[Permalink](#dfn-ocf-abstract-container) exported

**Referenced in:**

*   [§ 1.4 Terminology](#ref-for-dfn-ocf-abstract-container-1 "§ 1.4 Terminology") [(2)](#ref-for-dfn-ocf-abstract-container-2 "Reference 2") [(3)](#ref-for-dfn-ocf-abstract-container-3 "Reference 3") [(4)](#ref-for-dfn-ocf-abstract-container-4 "Reference 4")
*   [§ 4.2.1 Introduction](#ref-for-dfn-ocf-abstract-container-5 "§ 4.2.1 Introduction")
*   [§ 4.2.2 File and directory structure](#ref-for-dfn-ocf-abstract-container-6 "§ 4.2.2 File and directory structure")
*   [§ 4.2.3 File paths and file names](#ref-for-dfn-ocf-abstract-container-7 "§ 4.2.3 File paths and file names")
*   [§ 4.2.5 URLs in the OCF abstract container](#ref-for-dfn-ocf-abstract-container-8 "§ 4.2.5 URLs in the OCF abstract container")
*   [§ 4.2.6.1 Inclusion in OCF abstract container](#ref-for-dfn-ocf-abstract-container-9 "§ 4.2.6.1 Inclusion in OCF abstract container")
*   [§ 4.2.6.2 Parsing URLs in the META-INF directory](#ref-for-dfn-ocf-abstract-container-10 "§ 4.2.6.2 Parsing URLs in the META-INF directory")
*   [§ 4.2.6.3.1 Container file (container.xml)](#ref-for-dfn-ocf-abstract-container-11 "§ 4.2.6.3.1 Container file (container.xml)")
*   [§ 4.2.6.3.2.1 The encryption element](#ref-for-dfn-ocf-abstract-container-12 "§ 4.2.6.3.2.1 The encryption element") [(2)](#ref-for-dfn-ocf-abstract-container-13 "Reference 2")
*   [§ 4.2.6.3.5 Rights management file (rights.xml)](#ref-for-dfn-ocf-abstract-container-14 "§ 4.2.6.3.5 Rights management file (rights.xml)")
*   [§ 4.2.6.3.6.1 The signatures element](#ref-for-dfn-ocf-abstract-container-15 "§ 4.2.6.3.6.1 The signatures element")
*   [§ 4.3.1 Introduction](#ref-for-dfn-ocf-abstract-container-16 "§ 4.3.1 Introduction")

[Permalink](#dfn-package-document) exported

**Referenced in:**

*   [§ 1.2 Organization](#ref-for-dfn-package-document-1 "§ 1.2 Organization")
*   [§ 1.4 Terminology](#ref-for-dfn-package-document-2 "§ 1.4 Terminology") [(2)](#ref-for-dfn-package-document-3 "Reference 2") [(3)](#ref-for-dfn-package-document-4 "Reference 3") [(4)](#ref-for-dfn-package-document-5 "Reference 4") [(5)](#ref-for-dfn-package-document-6 "Reference 5") [(6)](#ref-for-dfn-package-document-7 "Reference 6")
*   [§ 1.6 Authoring shorthands](#ref-for-dfn-package-document-8 "§ 1.6 Authoring shorthands") [(2)](#ref-for-dfn-package-document-9 "Reference 2")
*   [§ 2. EPUB publication conformance](#ref-for-dfn-package-document-10 "§ 2. EPUB publication conformance")
*   [§ 3.1.1 The manifest plane](#ref-for-dfn-package-document-11 "§ 3.1.1 The manifest plane")
*   [§ 3.3 Foreign resources](#ref-for-dfn-package-document-12 "§ 3.3 Foreign resources")
*   [§ 3.5.1 Manifest fallbacks](#ref-for-dfn-package-document-13 "§ 3.5.1 Manifest fallbacks")
*   [§ 4.2.1 Introduction](#ref-for-dfn-package-document-14 "§ 4.2.1 Introduction")
*   [§ 4.2.2 File and directory structure](#ref-for-dfn-package-document-15 "§ 4.2.2 File and directory structure")
*   [§ 4.2.5 URLs in the OCF abstract container](#ref-for-dfn-package-document-16 "§ 4.2.5 URLs in the OCF abstract container")
*   [§ 4.2.6.3.1 Container file (container.xml)](#ref-for-dfn-package-document-17 "§ 4.2.6.3.1 Container file (container.xml)")
*   [§ 4.2.6.3.1.2 The rootfiles element](#ref-for-dfn-package-document-18 "§ 4.2.6.3.1.2 The rootfiles element")
*   [§ 4.2.6.3.1.3 The rootfile element](#ref-for-dfn-package-document-19 "§ 4.2.6.3.1.3 The rootfile element")
*   [§ 4.2.6.3.3 Manifest file (manifest.xml)](#ref-for-dfn-package-document-20 "§ 4.2.6.3.3 Manifest file (manifest.xml)")
*   [§ 5.1 Introduction](#ref-for-dfn-package-document-21 "§ 5.1 Introduction")
*   [§ 5.2 Parsing URLs in the package document](#ref-for-dfn-package-document-22 "§ 5.2 Parsing URLs in the package document")
*   [§ 5.3.1 The dir attribute (under-implemented)](#ref-for-dfn-package-document-23 "§ 5.3.1 The dir attribute (under-implemented)")
*   [§ 5.4 The package element](#ref-for-dfn-package-document-24 "§ 5.4 The package element")
*   [§ 5.5.1 The metadata element](#ref-for-dfn-package-document-25 "§ 5.5.1 The metadata element")
*   [§ 5.5.5 Last modified date](#ref-for-dfn-package-document-26 "§ 5.5.5 Last modified date")
*   [§ 5.6.1 The manifest element](#ref-for-dfn-package-document-27 "§ 5.6.1 The manifest element")
*   [§ 9.3.4 Associating style information](#ref-for-dfn-package-document-28 "§ 9.3.4 Associating style information")
*   [§ 9.3.5.2 Overlays package metadata](#ref-for-dfn-package-document-29 "§ 9.3.5.2 Overlays package metadata")
*   [§ D.1.1 Introduction](#ref-for-dfn-package-document-30 "§ D.1.1 Introduction")
*   [§ D.1.4 The prefix attribute](#ref-for-dfn-package-document-31 "§ D.1.4 The prefix attribute")
*   [§ D.1.5 Reserved prefixes](#ref-for-dfn-package-document-32 "§ D.1.5 Reserved prefixes")
*   [§ D.4.1.1 alternate](#ref-for-dfn-package-document-33 "§ D.4.1.1 alternate")
*   [§ D.5 Package rendering vocabulary](#ref-for-dfn-package-document-34 "§ D.5 Package rendering vocabulary")
*   [§ D.5.1 Custom rendering properties](#ref-for-dfn-package-document-35 "§ D.5.1 Custom rendering properties")
*   [§ D.8 Media overlays vocabulary](#ref-for-dfn-package-document-36 "§ D.8 Media overlays vocabulary")
*   [§ G.1 Package document schema](#ref-for-dfn-package-document-37 "§ G.1 Package document schema")
*   [§ H.1 Resources](#ref-for-dfn-package-document-38 "§ H.1 Resources")
*   [§ H.2 Scripting contexts](#ref-for-dfn-package-document-39 "§ H.2 Scripting contexts")

[Permalink](#dfn-publication-resource) exported

**Referenced in:**

*   [§ 1.4 Terminology](#ref-for-dfn-publication-resource-1 "§ 1.4 Terminology") [(2)](#ref-for-dfn-publication-resource-2 "Reference 2") [(3)](#ref-for-dfn-publication-resource-3 "Reference 3") [(4)](#ref-for-dfn-publication-resource-4 "Reference 4") [(5)](#ref-for-dfn-publication-resource-5 "Reference 5") [(6)](#ref-for-dfn-publication-resource-6 "Reference 6") [(7)](#ref-for-dfn-publication-resource-7 "Reference 7") [(8)](#ref-for-dfn-publication-resource-8 "Reference 8") [(9)](#ref-for-dfn-publication-resource-9 "Reference 9") [(10)](#ref-for-dfn-publication-resource-10 "Reference 10") [(11)](#ref-for-dfn-publication-resource-11 "Reference 11")
*   [§ 2. EPUB publication conformance](#ref-for-dfn-publication-resource-12 "§ 2. EPUB publication conformance")
*   [§ 3.1 Introduction](#ref-for-dfn-publication-resource-13 "§ 3.1 Introduction")
*   [§ 3.1.1 The manifest plane](#ref-for-dfn-publication-resource-14 "§ 3.1.1 The manifest plane")
*   [§ 3.2 Core media types](#ref-for-dfn-publication-resource-15 "§ 3.2 Core media types")
*   [§ 3.5.1 Manifest fallbacks](#ref-for-dfn-publication-resource-16 "§ 3.5.1 Manifest fallbacks")
*   [§ 3.6 Resource locations](#ref-for-dfn-publication-resource-17 "§ 3.6 Resource locations")
*   [§ 3.7 Data URLs](#ref-for-dfn-publication-resource-18 "§ 3.7 Data URLs")
*   [§ 3.9 XML conformance](#ref-for-dfn-publication-resource-19 "§ 3.9 XML conformance")
*   [§ 4.2.1 Introduction](#ref-for-dfn-publication-resource-20 "§ 4.2.1 Introduction")
*   [§ 4.2.2 File and directory structure](#ref-for-dfn-publication-resource-21 "§ 4.2.2 File and directory structure")
*   [§ 5.1 Introduction](#ref-for-dfn-publication-resource-22 "§ 5.1 Introduction")
*   [§ 5.3.6 The refines attribute](#ref-for-dfn-publication-resource-23 "§ 5.3.6 The refines attribute")
*   [§ 5.5.3.1.3 The dc:language element](#ref-for-dfn-publication-resource-24 "§ 5.5.3.1.3 The dc:language element")
*   [§ 5.5.6 The link element](#ref-for-dfn-publication-resource-25 "§ 5.5.6 The link element") [(2)](#ref-for-dfn-publication-resource-26 "Reference 2") [(3)](#ref-for-dfn-publication-resource-27 "Reference 3")
*   [§ 5.6.1 The manifest element](#ref-for-dfn-publication-resource-28 "§ 5.6.1 The manifest element")
*   [§ 5.6.2 The item element](#ref-for-dfn-publication-resource-29 "§ 5.6.2 The item element")
*   [§ 5.6.2.2 Examples](#ref-for-dfn-publication-resource-30 "§ 5.6.2.2 Examples") [(2)](#ref-for-dfn-publication-resource-31 "Reference 2")
*   [§ 5.7.1 The spine element](#ref-for-dfn-publication-resource-32 "§ 5.7.1 The spine element")
*   [§ 11.2 Threat model](#ref-for-dfn-publication-resource-33 "§ 11.2 Threat model")
*   [§ B. Allowed external identifiers](#ref-for-dfn-publication-resource-34 "§ B. Allowed external identifiers")
*   [§ D.6.1 cover-image](#ref-for-dfn-publication-resource-35 "§ D.6.1 cover-image")
*   [§ D.6.2 mathml](#ref-for-dfn-publication-resource-36 "§ D.6.2 mathml")
*   [§ D.6.4 remote-resources](#ref-for-dfn-publication-resource-37 "§ D.6.4 remote-resources")
*   [§ D.6.5 scripted](#ref-for-dfn-publication-resource-38 "§ D.6.5 scripted")
*   [§ D.6.6 svg](#ref-for-dfn-publication-resource-39 "§ D.6.6 svg")
*   [§ D.6.7 switch](#ref-for-dfn-publication-resource-40 "§ D.6.7 switch")
*   [§ H.1 Resources](#ref-for-dfn-publication-resource-41 "§ H.1 Resources")
*   [§ I.1 The application/oebps-package+xml media type](#ref-for-dfn-publication-resource-42 "§ I.1 The application/oebps-package+xml media type")
*   [§ I.2 The application/epub+zip media type](#ref-for-dfn-publication-resource-43 "§ I.2 The application/epub+zip media type")

[Permalink](#dfn-remote-resource) exported

**Referenced in:**

*   [§ 1.4 Terminology](#ref-for-dfn-remote-resource-1 "§ 1.4 Terminology")
*   [§ 3.1.1 The manifest plane](#ref-for-dfn-remote-resource-2 "§ 3.1.1 The manifest plane")
*   [§ 3.6 Resource locations](#ref-for-dfn-remote-resource-3 "§ 3.6 Resource locations") [(2)](#ref-for-dfn-remote-resource-4 "Reference 2")
*   [§ 5.6.1 The manifest element](#ref-for-dfn-remote-resource-5 "§ 5.6.1 The manifest element")
*   [§ 5.6.2.2 Examples](#ref-for-dfn-remote-resource-6 "§ 5.6.2.2 Examples")
*   [§ 6.1.4.3.1 The base element](#ref-for-dfn-remote-resource-7 "§ 6.1.4.3.1 The base element")
*   [§ 11.2 Threat model](#ref-for-dfn-remote-resource-8 "§ 11.2 Threat model") [(2)](#ref-for-dfn-remote-resource-9 "Reference 2")
*   [§ 11.3 Recommendations](#ref-for-dfn-remote-resource-10 "§ 11.3 Recommendations")
*   [§ H.1 Resources](#ref-for-dfn-remote-resource-11 "§ H.1 Resources")

[Permalink](#dfn-root-directory) exported

**Referenced in:**

*   [§ 1.4 Terminology](#ref-for-dfn-root-directory-1 "§ 1.4 Terminology") [(2)](#ref-for-dfn-root-directory-2 "Reference 2")
*   [§ 4.2.1 Introduction](#ref-for-dfn-root-directory-3 "§ 4.2.1 Introduction")
*   [§ 4.2.2 File and directory structure](#ref-for-dfn-root-directory-4 "§ 4.2.2 File and directory structure")
*   [§ 4.2.4 Deriving file paths](#ref-for-dfn-root-directory-5 "§ 4.2.4 Deriving file paths")
*   [§ 4.2.5 URLs in the OCF abstract container](#ref-for-dfn-root-directory-6 "§ 4.2.5 URLs in the OCF abstract container")
*   [§ 4.2.6.1 Inclusion in OCF abstract container](#ref-for-dfn-root-directory-7 "§ 4.2.6.1 Inclusion in OCF abstract container")
*   [§ 4.2.6.2 Parsing URLs in the META-INF directory](#ref-for-dfn-root-directory-8 "§ 4.2.6.2 Parsing URLs in the META-INF directory")
*   [§ 4.2.6.3.1.3 The rootfile element](#ref-for-dfn-root-directory-9 "§ 4.2.6.3.1.3 The rootfile element")
*   [§ 4.2.6.3.1.5 The link element](#ref-for-dfn-root-directory-10 "§ 4.2.6.3.1.5 The link element")

[Permalink](#dfn-scripted-content-document) exported

**Referenced in:**

*   [§ 3.1.2 The spine plane](#ref-for-dfn-scripted-content-document-1 "§ 3.1.2 The spine plane")
*   [§ 5.6.2.1 Resource properties](#ref-for-dfn-scripted-content-document-2 "§ 5.6.2.1 Resource properties")
*   [§ 6.3.2.1 Script inclusion](#ref-for-dfn-scripted-content-document-3 "§ 6.3.2.1 Script inclusion")
*   [§ D.6.5 scripted](#ref-for-dfn-scripted-content-document-4 "§ D.6.5 scripted")

[Permalink](#dfn-svg-content-document) exported

**Referenced in:**

*   [§ 1.4 Terminology](#ref-for-dfn-svg-content-document-1 "§ 1.4 Terminology")
*   [§ 3.1.2 The spine plane](#ref-for-dfn-svg-content-document-2 "§ 3.1.2 The spine plane")
*   [§ 3.2 Core media types](#ref-for-dfn-svg-content-document-3 "§ 3.2 Core media types")
*   [§ 6.1.4.2 Embedded SVG](#ref-for-dfn-svg-content-document-4 "§ 6.1.4.2 Embedded SVG")
*   [§ 6.2.1 Introduction](#ref-for-dfn-svg-content-document-5 "§ 6.2.1 Introduction") [(2)](#ref-for-dfn-svg-content-document-6 "Reference 2")
*   [§ 6.2.2 SVG requirements](#ref-for-dfn-svg-content-document-7 "§ 6.2.2 SVG requirements")
*   [§ 6.2.3 Restrictions on SVG](#ref-for-dfn-svg-content-document-8 "§ 6.2.3 Restrictions on SVG")
*   [§ 6.3 Common resource requirements](#ref-for-dfn-svg-content-document-9 "§ 6.3 Common resource requirements")
*   [§ 6.3.2.2.1 Container-constrained scripts](#ref-for-dfn-svg-content-document-10 "§ 6.3.2.2.1 Container-constrained scripts")
*   [§ 8.2.2.3 Synthetic spreads](#ref-for-dfn-svg-content-document-11 "§ 8.2.2.3 Synthetic spreads")
*   [§ 8.2.2.5 Viewport dimensions (deprecated)](#ref-for-dfn-svg-content-document-12 "§ 8.2.2.5 Viewport dimensions (deprecated)")
*   [§ 9.3.2 Relationship to the EPUB content document](#ref-for-dfn-svg-content-document-13 "§ 9.3.2 Relationship to the EPUB content document")
*   [§ 9.3.2.2 Referencing document fragments](#ref-for-dfn-svg-content-document-14 "§ 9.3.2.2 Referencing document fragments")
*   [§ 9.3.4 Associating style information](#ref-for-dfn-svg-content-document-15 "§ 9.3.4 Associating style information")
*   [§ D.6.4 remote-resources](#ref-for-dfn-svg-content-document-16 "§ D.6.4 remote-resources")
*   [§ D.6.6 svg](#ref-for-dfn-svg-content-document-17 "§ D.6.6 svg")

[Permalink](#dfn-synthetic-spread) exported

**Referenced in:**

*   [§ 8.2.2.3 Synthetic spreads](#ref-for-dfn-synthetic-spread-1 "§ 8.2.2.3 Synthetic spreads")
*   [§ 8.2.2.4 Spread placement](#ref-for-dfn-synthetic-spread-2 "§ 8.2.2.4 Spread placement")

[Permalink](#dfn-top-level-content-document) exported

**Referenced in:**

*   [§ 3.7 Data URLs](#ref-for-dfn-top-level-content-document-1 "§ 3.7 Data URLs")
*   [§ 5.6.2.2 Examples](#ref-for-dfn-top-level-content-document-2 "§ 5.6.2.2 Examples") [(2)](#ref-for-dfn-top-level-content-document-3 "Reference 2")
*   [§ 6.2.1 Introduction](#ref-for-dfn-top-level-content-document-4 "§ 6.2.1 Introduction")
*   [§ 6.3.2.2 Scripting contexts](#ref-for-dfn-top-level-content-document-5 "§ 6.3.2.2 Scripting contexts")
*   [§ 6.3.2.2.2 Spine-level scripts](#ref-for-dfn-top-level-content-document-6 "§ 6.3.2.2.2 Spine-level scripts") [(2)](#ref-for-dfn-top-level-content-document-7 "Reference 2")
*   [§ 7.3 The nav element: restrictions](#ref-for-dfn-top-level-content-document-8 "§ 7.3 The nav element: restrictions")

[Permalink](#dfn-unique-identifier) exported

**Referenced in:**

*   [§ 4.4.3 Obfuscation key](#ref-for-dfn-unique-identifier-1 "§ 4.4.3 Obfuscation key")
*   [§ 5.5.3.1.1 The dc:identifier element](#ref-for-dfn-unique-identifier-2 "§ 5.5.3.1.1 The dc:identifier element")

[Permalink](#dfn-viewport) exported

**Referenced in:**

*   [§ 3.1.3 The content plane](#ref-for-dfn-viewport-1 "§ 3.1.3 The content plane")
*   [§ 3.2 Core media types](#ref-for-dfn-viewport-2 "§ 3.2 Core media types")
*   [§ 7.5 Using in the spine](#ref-for-dfn-viewport-3 "§ 7.5 Using in the spine")
*   [§ 8.2.2.3 Synthetic spreads](#ref-for-dfn-viewport-4 "§ 8.2.2.3 Synthetic spreads")
*   [§ 8.2.2.4 Spread placement](#ref-for-dfn-viewport-5 "§ 8.2.2.4 Spread placement")
*   [§ 8.2.2.6 Content document dimensions](#ref-for-dfn-viewport-6 "§ 8.2.2.6 Content document dimensions")
*   [§ 8.3 Reflowable layouts](#ref-for-dfn-viewport-7 "§ 8.3 Reflowable layouts")
*   [§ 8.3.2 The rendition:align-x-center property](#ref-for-dfn-viewport-8 "§ 8.3.2 The rendition:align-x-center property")

[Permalink](#dfn-xhtml-content-document) exported

**Referenced in:**

*   [§ 1.2 Organization](#ref-for-dfn-xhtml-content-document-1 "§ 1.2 Organization")
*   [§ 1.3.1 Relationship to HTML](#ref-for-dfn-xhtml-content-document-2 "§ 1.3.1 Relationship to HTML")
*   [§ 1.4 Terminology](#ref-for-dfn-xhtml-content-document-3 "§ 1.4 Terminology") [(2)](#ref-for-dfn-xhtml-content-document-4 "Reference 2") [(3)](#ref-for-dfn-xhtml-content-document-5 "Reference 3") [(4)](#ref-for-dfn-xhtml-content-document-6 "Reference 4")
*   [§ 3.1.2 The spine plane](#ref-for-dfn-xhtml-content-document-7 "§ 3.1.2 The spine plane")
*   [§ 3.2 Core media types](#ref-for-dfn-xhtml-content-document-8 "§ 3.2 Core media types")
*   [§ 3.5.2.3 HTML script element](#ref-for-dfn-xhtml-content-document-9 "§ 3.5.2.3 HTML script element")
*   [§ 4.2.5 URLs in the OCF abstract container](#ref-for-dfn-xhtml-content-document-10 "§ 4.2.5 URLs in the OCF abstract container")
*   [§ 5.6.2.1 Resource properties](#ref-for-dfn-xhtml-content-document-11 "§ 5.6.2.1 Resource properties")
*   [§ 6.1.1 Introduction](#ref-for-dfn-xhtml-content-document-12 "§ 6.1.1 Introduction")
*   [§ 6.1.2 XHTML requirements](#ref-for-dfn-xhtml-content-document-13 "§ 6.1.2 XHTML requirements")
*   [§ 6.1.3 HTML extensions](#ref-for-dfn-xhtml-content-document-14 "§ 6.1.3 HTML extensions")
*   [§ 6.1.3.1 Structural semantics](#ref-for-dfn-xhtml-content-document-15 "§ 6.1.3.1 Structural semantics")
*   [§ 6.1.3.2 RDFa](#ref-for-dfn-xhtml-content-document-16 "§ 6.1.3.2 RDFa")
*   [§ 6.1.3.5 Custom attributes](#ref-for-dfn-xhtml-content-document-17 "§ 6.1.3.5 Custom attributes")
*   [§ 6.1.4 HTML deviations and constraints](#ref-for-dfn-xhtml-content-document-18 "§ 6.1.4 HTML deviations and constraints")
*   [§ 6.1.4.1 Embedded MathML](#ref-for-dfn-xhtml-content-document-19 "§ 6.1.4.1 Embedded MathML")
*   [§ 6.1.4.2 Embedded SVG](#ref-for-dfn-xhtml-content-document-20 "§ 6.1.4.2 Embedded SVG")
*   [§ 6.3 Common resource requirements](#ref-for-dfn-xhtml-content-document-21 "§ 6.3 Common resource requirements")
*   [§ 6.3.2.1 Script inclusion](#ref-for-dfn-xhtml-content-document-22 "§ 6.3.2.1 Script inclusion")
*   [§ 6.3.2.2.1 Container-constrained scripts](#ref-for-dfn-xhtml-content-document-23 "§ 6.3.2.2.1 Container-constrained scripts")
*   [§ 7.1 Introduction](#ref-for-dfn-xhtml-content-document-24 "§ 7.1 Introduction")
*   [§ 7.2 Navigation document requirements](#ref-for-dfn-xhtml-content-document-25 "§ 7.2 Navigation document requirements")
*   [§ 7.3 The nav element: restrictions](#ref-for-dfn-xhtml-content-document-26 "§ 7.3 The nav element: restrictions")
*   [§ 8.2.2.3 Synthetic spreads](#ref-for-dfn-xhtml-content-document-27 "§ 8.2.2.3 Synthetic spreads")
*   [§ 8.2.2.5 Viewport dimensions (deprecated)](#ref-for-dfn-xhtml-content-document-28 "§ 8.2.2.5 Viewport dimensions (deprecated)")
*   [§ 9.3.2 Relationship to the EPUB content document](#ref-for-dfn-xhtml-content-document-29 "§ 9.3.2 Relationship to the EPUB content document")
*   [§ 9.3.2.2 Referencing document fragments](#ref-for-dfn-xhtml-content-document-30 "§ 9.3.2.2 Referencing document fragments")
*   [§ 9.3.4 Associating style information](#ref-for-dfn-xhtml-content-document-31 "§ 9.3.4 Associating style information")
*   [§ 9.5 Navigation document overlays](#ref-for-dfn-xhtml-content-document-32 "§ 9.5 Navigation document overlays")
*   [§ D.6.4 remote-resources](#ref-for-dfn-xhtml-content-document-33 "§ D.6.4 remote-resources")
*   [§ D.6.6 svg](#ref-for-dfn-xhtml-content-document-34 "§ D.6.6 svg")
*   [§ D.6.7 switch](#ref-for-dfn-xhtml-content-document-35 "§ D.6.7 switch")
*   [§ H.1 Resources](#ref-for-dfn-xhtml-content-document-36 "§ H.1 Resources")

[Permalink](#dfn-manifest-plane) exported

**Referenced in:**

*   [§ 3.1 Introduction](#ref-for-dfn-manifest-plane-1 "§ 3.1 Introduction")
*   [§ H.1 Resources](#ref-for-dfn-manifest-plane-2 "§ H.1 Resources")

[Permalink](#dfn-spine-plane) exported

**Referenced in:**

*   [§ 3.1 Introduction](#ref-for-dfn-spine-plane-1 "§ 3.1 Introduction")
*   [§ 3.1.1 The manifest plane](#ref-for-dfn-spine-plane-2 "§ 3.1.1 The manifest plane")
*   [§ H.1 Resources](#ref-for-dfn-spine-plane-3 "§ H.1 Resources")

[Permalink](#dfn-content-plane) exported

**Referenced in:**

*   [§ 3.1 Introduction](#ref-for-dfn-content-plane-1 "§ 3.1 Introduction")
*   [§ 3.1.1 The manifest plane](#ref-for-dfn-content-plane-2 "§ 3.1.1 The manifest plane")
*   [§ H.1 Resources](#ref-for-dfn-content-plane-3 "§ H.1 Resources")

[Permalink](#dfn-manifest-fallback-chain) exported

**Referenced in:**

*   [§ 1.4 Terminology](#ref-for-dfn-manifest-fallback-chain-1 "§ 1.4 Terminology") [(2)](#ref-for-dfn-manifest-fallback-chain-2 "Reference 2")
*   [§ 3.1.2 The spine plane](#ref-for-dfn-manifest-fallback-chain-3 "§ 3.1.2 The spine plane")
*   [§ 5.1 Introduction](#ref-for-dfn-manifest-fallback-chain-4 "§ 5.1 Introduction")
*   [§ 5.6.2.2 Examples](#ref-for-dfn-manifest-fallback-chain-5 "§ 5.6.2.2 Examples")
*   [§ 5.7.2 The itemref element](#ref-for-dfn-manifest-fallback-chain-6 "§ 5.7.2 The itemref element")

[Permalink](#dfn-valid-relative-container-url-with-fragment-string) exported

**Referenced in:**

*   [§ 4.2.5 URLs in the OCF abstract container](#ref-for-dfn-valid-relative-container-url-with-fragment-string-1 "§ 4.2.5 URLs in the OCF abstract container")

[Permalink](#dfn-container) exported

**Referenced in:**

*   [§ 4.2.6.3.1.2 The rootfiles element](#ref-for-dfn-container-1 "§ 4.2.6.3.1.2 The rootfiles element")
*   [§ 4.2.6.3.1.4 The links element](#ref-for-dfn-container-2 "§ 4.2.6.3.1.4 The links element")

[Permalink](#dfn-rootfiles) exported

**Referenced in:**

*   [§ 4.2.6.3.1.1 The container element](#ref-for-dfn-rootfiles-1 "§ 4.2.6.3.1.1 The container element")
*   [§ 4.2.6.3.1.3 The rootfile element](#ref-for-dfn-rootfiles-2 "§ 4.2.6.3.1.3 The rootfile element")

[Permalink](#dfn-rootfile) exported

**Referenced in:**

*   [§ 4.2.6.3.1.2 The rootfiles element](#ref-for-dfn-rootfile-1 "§ 4.2.6.3.1.2 The rootfiles element")

[Permalink](#dfn-links) exported

**Referenced in:**

*   [§ 4.2.6.3.1.1 The container element](#ref-for-dfn-links-1 "§ 4.2.6.3.1.1 The container element")
*   [§ 4.2.6.3.1.5 The link element](#ref-for-dfn-links-2 "§ 4.2.6.3.1.5 The link element")

[Permalink](#dfn-encryption) exported

**Referenced in:**

*   Not referenced in this document.

[Permalink](#dfn-encryptedkey) exported

**Referenced in:**

*   Not referenced in this document.

[Permalink](#dfn-encrypteddata) exported

**Referenced in:**

*   Not referenced in this document.

[Permalink](#dfn-compression) exported

**Referenced in:**

*   Not referenced in this document.

[Permalink](#dfn-signatures) exported

**Referenced in:**

*   Not referenced in this document.

[Permalink](#dfn-package) exported

**Referenced in:**

*   [§ 5.3.1 The dir attribute (under-implemented)](#ref-for-dfn-package-1 "§ 5.3.1 The dir attribute (under-implemented)")
*   [§ 5.3.3 The id attribute](#ref-for-dfn-package-2 "§ 5.3.3 The id attribute")
*   [§ 5.3.7 The xml:lang attribute](#ref-for-dfn-package-3 "§ 5.3.7 The xml:lang attribute")
*   [§ 5.5.1 The metadata element](#ref-for-dfn-package-4 "§ 5.5.1 The metadata element")
*   [§ 5.5.3.1.1 The dc:identifier element](#ref-for-dfn-package-5 "§ 5.5.3.1.1 The dc:identifier element")
*   [§ 5.6.1 The manifest element](#ref-for-dfn-package-6 "§ 5.6.1 The manifest element")
*   [§ 5.7.1 The spine element](#ref-for-dfn-package-7 "§ 5.7.1 The spine element")

[Permalink](#dfn-metadata) exported

**Referenced in:**

*   [§ 5.4 The package element](#ref-for-dfn-metadata-1 "§ 5.4 The package element")
*   [§ 5.5.3.1.1 The dc:identifier element](#ref-for-dfn-metadata-2 "§ 5.5.3.1.1 The dc:identifier element")
*   [§ 5.5.3.1.2 The dc:title element](#ref-for-dfn-metadata-3 "§ 5.5.3.1.2 The dc:title element")
*   [§ 5.5.3.1.3 The dc:language element](#ref-for-dfn-metadata-4 "§ 5.5.3.1.3 The dc:language element")
*   [§ 5.5.3.2.1 General definition](#ref-for-dfn-metadata-5 "§ 5.5.3.2.1 General definition")
*   [§ 5.5.4 The meta element](#ref-for-dfn-metadata-6 "§ 5.5.4 The meta element")
*   [§ 5.5.6 The link element](#ref-for-dfn-metadata-7 "§ 5.5.6 The link element") [(2)](#ref-for-dfn-metadata-8 "Reference 2")
*   [§ 5.6.1 The manifest element](#ref-for-dfn-metadata-9 "§ 5.6.1 The manifest element")
*   [§ 9.2.2.2 The head element](#ref-for-dfn-metadata-10 "§ 9.2.2.2 The head element")

[Permalink](#dfn-value)

**Referenced in:**

*   [§ 1.4 Terminology](#ref-for-dfn-value-1 "§ 1.4 Terminology")
*   [§ 5.5.3.1.3 The dc:language element](#ref-for-dfn-value-2 "§ 5.5.3.1.3 The dc:language element")
*   [§ 5.5.3.2.5 The dc:subject element](#ref-for-dfn-value-3 "§ 5.5.3.2.5 The dc:subject element") [(2)](#ref-for-dfn-value-4 "Reference 2") [(3)](#ref-for-dfn-value-5 "Reference 3")
*   [§ 5.5.3.2.6 The dc:type element](#ref-for-dfn-value-6 "§ 5.5.3.2.6 The dc:type element")
*   [§ 5.5.4 The meta element](#ref-for-dfn-value-7 "§ 5.5.4 The meta element") [(2)](#ref-for-dfn-value-8 "Reference 2")
*   [§ 5.5.5 Last modified date](#ref-for-dfn-value-9 "§ 5.5.5 Last modified date")

[Permalink](#dfn-dc-identifier) exported

**Referenced in:**

*   [§ 1.4 Terminology](#ref-for-dfn-dc-identifier-1 "§ 1.4 Terminology")
*   [§ 5.4 The package element](#ref-for-dfn-dc-identifier-2 "§ 5.4 The package element")
*   [§ 5.5.1 The metadata element](#ref-for-dfn-dc-identifier-3 "§ 5.5.1 The metadata element") [(2)](#ref-for-dfn-dc-identifier-4 "Reference 2")
*   [§ 5.5.3.2.1 General definition](#ref-for-dfn-dc-identifier-5 "§ 5.5.3.2.1 General definition")
*   [§ D.3.8 identifier-type](#ref-for-dfn-dc-identifier-6 "§ D.3.8 identifier-type")

[Permalink](#dfn-dc-title) exported

**Referenced in:**

*   [§ 5.5.1 The metadata element](#ref-for-dfn-dc-title-1 "§ 5.5.1 The metadata element") [(2)](#ref-for-dfn-dc-title-2 "Reference 2")
*   [§ 5.5.3.2.1 General definition](#ref-for-dfn-dc-title-3 "§ 5.5.3.2.1 General definition")
*   [§ D.3.13 title-type](#ref-for-dfn-dc-title-4 "§ D.3.13 title-type")

[Permalink](#dfn-dc-language) exported

**Referenced in:**

*   [§ 5.5.1 The metadata element](#ref-for-dfn-dc-language-1 "§ 5.5.1 The metadata element") [(2)](#ref-for-dfn-dc-language-2 "Reference 2")
*   [§ 5.5.3.2.1 General definition](#ref-for-dfn-dc-language-3 "§ 5.5.3.2.1 General definition")

[Permalink](#dfn-dc-contributor) exported

**Referenced in:**

*   [§ 5.5.3.2.3 The dc:creator element](#ref-for-dfn-dc-contributor-1 "§ 5.5.3.2.3 The dc:creator element")
*   [§ D.3.10 role](#ref-for-dfn-dc-contributor-2 "§ D.3.10 role")

[Permalink](#dfn-dc-creator) exported

**Referenced in:**

*   [§ 5.5.3.2.2 The dc:contributor element](#ref-for-dfn-dc-creator-1 "§ 5.5.3.2.2 The dc:contributor element")
*   [§ D.3.10 role](#ref-for-dfn-dc-creator-2 "§ D.3.10 role")

[Permalink](#dfn-dc-date) exported

**Referenced in:**

*   Not referenced in this document.

[Permalink](#dfn-dc-subject) exported

**Referenced in:**

*   [§ D.3.2 authority](#ref-for-dfn-dc-subject-1 "§ D.3.2 authority")
*   [§ D.3.12 term](#ref-for-dfn-dc-subject-2 "§ D.3.12 term")

[Permalink](#dfn-dc-type) exported

**Referenced in:**

*   Not referenced in this document.

[Permalink](#dfn-meta) exported

**Referenced in:**

*   [§ 5.3.1 The dir attribute (under-implemented)](#ref-for-dfn-meta-1 "§ 5.3.1 The dir attribute (under-implemented)")
*   [§ 5.3.3 The id attribute](#ref-for-dfn-meta-2 "§ 5.3.3 The id attribute")
*   [§ 5.3.6 The refines attribute](#ref-for-dfn-meta-3 "§ 5.3.6 The refines attribute")
*   [§ 5.3.7 The xml:lang attribute](#ref-for-dfn-meta-4 "§ 5.3.7 The xml:lang attribute")
*   [§ 5.5.1 The metadata element](#ref-for-dfn-meta-5 "§ 5.5.1 The metadata element") [(2)](#ref-for-dfn-meta-6 "Reference 2")
*   [§ 5.5.2 Metadata values](#ref-for-dfn-meta-7 "§ 5.5.2 Metadata values")
*   [§ 5.9.3 The meta element](#ref-for-dfn-meta-8 "§ 5.9.3 The meta element")
*   [§ 8.2.2.2 Orientation](#ref-for-dfn-meta-9 "§ 8.2.2.2 Orientation")
*   [§ 8.3.2 The rendition:align-x-center property](#ref-for-dfn-meta-10 "§ 8.3.2 The rendition:align-x-center property")
*   [§ 9.3.5.2 Overlays package metadata](#ref-for-dfn-meta-11 "§ 9.3.5.2 Overlays package metadata")
*   [§ D.3 Meta properties vocabulary](#ref-for-dfn-meta-12 "§ D.3 Meta properties vocabulary") [(2)](#ref-for-dfn-meta-13 "Reference 2")
*   [§ D.5 Package rendering vocabulary](#ref-for-dfn-meta-14 "§ D.5 Package rendering vocabulary")
*   [§ D.8 Media overlays vocabulary](#ref-for-dfn-meta-15 "§ D.8 Media overlays vocabulary")

[Permalink](#dfn-dcterms-modified) exported

**Referenced in:**

*   [§ 5.5.1 The metadata element](#ref-for-dfn-dcterms-modified-1 "§ 5.5.1 The metadata element")

[Permalink](#dfn-link) exported

**Referenced in:**

*   [§ 1.4 Terminology](#ref-for-dfn-link-1 "§ 1.4 Terminology")
*   [§ 3.1.1 The manifest plane](#ref-for-dfn-link-2 "§ 3.1.1 The manifest plane")
*   [§ 3.7 Data URLs](#ref-for-dfn-link-3 "§ 3.7 Data URLs")
*   [§ 5.3.2 The href attribute](#ref-for-dfn-link-4 "§ 5.3.2 The href attribute")
*   [§ 5.3.3 The id attribute](#ref-for-dfn-link-5 "§ 5.3.3 The id attribute")
*   [§ 5.3.4 The media-type attribute](#ref-for-dfn-link-6 "§ 5.3.4 The media-type attribute")
*   [§ 5.3.5 The properties attribute](#ref-for-dfn-link-7 "§ 5.3.5 The properties attribute")
*   [§ 5.3.6 The refines attribute](#ref-for-dfn-link-8 "§ 5.3.6 The refines attribute")
*   [§ 5.5.1 The metadata element](#ref-for-dfn-link-9 "§ 5.5.1 The metadata element") [(2)](#ref-for-dfn-link-10 "Reference 2")
*   [§ D.4 Metadata link vocabulary](#ref-for-dfn-link-11 "§ D.4 Metadata link vocabulary")
*   [§ D.4.2 Link properties](#ref-for-dfn-link-12 "§ D.4.2 Link properties")
*   [§ H.1 Resources](#ref-for-dfn-link-13 "§ H.1 Resources") [(2)](#ref-for-dfn-link-14 "Reference 2")

[Permalink](#dfn-manifest) exported

**Referenced in:**

*   [§ 3.1.1 The manifest plane](#ref-for-dfn-manifest-1 "§ 3.1.1 The manifest plane")
*   [§ 5.3.3 The id attribute](#ref-for-dfn-manifest-2 "§ 5.3.3 The id attribute")
*   [§ 5.4 The package element](#ref-for-dfn-manifest-3 "§ 5.4 The package element")
*   [§ 5.6.2 The item element](#ref-for-dfn-manifest-4 "§ 5.6.2 The item element")
*   [§ 5.7.1 The spine element](#ref-for-dfn-manifest-5 "§ 5.7.1 The spine element")

[Permalink](#dfn-item) exported

**Referenced in:**

*   [§ 3.1.1 The manifest plane](#ref-for-dfn-item-1 "§ 3.1.1 The manifest plane")
*   [§ 3.3 Foreign resources](#ref-for-dfn-item-2 "§ 3.3 Foreign resources")
*   [§ 3.5.1 Manifest fallbacks](#ref-for-dfn-item-3 "§ 3.5.1 Manifest fallbacks")
*   [§ 3.6 Resource locations](#ref-for-dfn-item-4 "§ 3.6 Resource locations")
*   [§ 3.7 Data URLs](#ref-for-dfn-item-5 "§ 3.7 Data URLs")
*   [§ 5.3.2 The href attribute](#ref-for-dfn-item-6 "§ 5.3.2 The href attribute") [(2)](#ref-for-dfn-item-7 "Reference 2")
*   [§ 5.3.3 The id attribute](#ref-for-dfn-item-8 "§ 5.3.3 The id attribute")
*   [§ 5.3.4 The media-type attribute](#ref-for-dfn-item-9 "§ 5.3.4 The media-type attribute")
*   [§ 5.3.5 The properties attribute](#ref-for-dfn-item-10 "§ 5.3.5 The properties attribute")
*   [§ 5.6.1 The manifest element](#ref-for-dfn-item-11 "§ 5.6.1 The manifest element")
*   [§ 5.7.2 The itemref element](#ref-for-dfn-item-12 "§ 5.7.2 The itemref element")
*   [§ 5.9.3 The meta element](#ref-for-dfn-item-13 "§ 5.9.3 The meta element")
*   [§ 6.1.4.2 Embedded SVG](#ref-for-dfn-item-14 "§ 6.1.4.2 Embedded SVG")
*   [§ 9.3.5.1 Including media overlays](#ref-for-dfn-item-15 "§ 9.3.5.1 Including media overlays")
*   [§ 9.3.5.2 Overlays package metadata](#ref-for-dfn-item-16 "§ 9.3.5.2 Overlays package metadata")
*   [§ D.1.2 The property data type](#ref-for-dfn-item-17 "§ D.1.2 The property data type")
*   [§ D.6 Manifest properties vocabulary](#ref-for-dfn-item-18 "§ D.6 Manifest properties vocabulary")

[Permalink](#dfn-spine) exported

**Referenced in:**

*   [§ 5.3.3 The id attribute](#ref-for-dfn-spine-1 "§ 5.3.3 The id attribute")
*   [§ 5.4 The package element](#ref-for-dfn-spine-2 "§ 5.4 The package element")
*   [§ 5.6.2 The item element](#ref-for-dfn-spine-3 "§ 5.6.2 The item element")
*   [§ 5.7.2 The itemref element](#ref-for-dfn-spine-4 "§ 5.7.2 The itemref element")
*   [§ 8.2.2.3 Synthetic spreads](#ref-for-dfn-spine-5 "§ 8.2.2.3 Synthetic spreads")

[Permalink](#dfn-itemref) exported

**Referenced in:**

*   [§ 1.4 Terminology](#ref-for-dfn-itemref-1 "§ 1.4 Terminology")
*   [§ 3.4 Exempt resources](#ref-for-dfn-itemref-2 "§ 3.4 Exempt resources")
*   [§ 5.3.2 The href attribute](#ref-for-dfn-itemref-3 "§ 5.3.2 The href attribute")
*   [§ 5.3.3 The id attribute](#ref-for-dfn-itemref-4 "§ 5.3.3 The id attribute")
*   [§ 5.3.5 The properties attribute](#ref-for-dfn-itemref-5 "§ 5.3.5 The properties attribute")
*   [§ 5.7.1 The spine element](#ref-for-dfn-itemref-6 "§ 5.7.1 The spine element")
*   [§ 8.2.2.1 Layout](#ref-for-dfn-itemref-7 "§ 8.2.2.1 Layout")
*   [§ 8.2.2.1.1 Layout overrides](#ref-for-dfn-itemref-8 "§ 8.2.2.1.1 Layout overrides")
*   [§ 8.2.2.2.1 Orientation overrides](#ref-for-dfn-itemref-9 "§ 8.2.2.2.1 Orientation overrides")
*   [§ 8.2.2.3.1 Synthetic spread overrides](#ref-for-dfn-itemref-10 "§ 8.2.2.3.1 Synthetic spread overrides")
*   [§ 8.3.1.1 Spine overrides](#ref-for-dfn-itemref-11 "§ 8.3.1.1 Spine overrides")
*   [§ 8.3.2 The rendition:align-x-center property](#ref-for-dfn-itemref-12 "§ 8.3.2 The rendition:align-x-center property")
*   [§ D.5 Package rendering vocabulary](#ref-for-dfn-itemref-13 "§ D.5 Package rendering vocabulary")
*   [§ D.7 Spine properties vocabulary](#ref-for-dfn-itemref-14 "§ D.7 Spine properties vocabulary")

[Permalink](#dfn-collection) exported

**Referenced in:**

*   [§ 5.3.1 The dir attribute (under-implemented)](#ref-for-dfn-collection-1 "§ 5.3.1 The dir attribute (under-implemented)")
*   [§ 5.3.3 The id attribute](#ref-for-dfn-collection-2 "§ 5.3.3 The id attribute")
*   [§ 5.3.7 The xml:lang attribute](#ref-for-dfn-collection-3 "§ 5.3.7 The xml:lang attribute")
*   [§ 5.4 The package element](#ref-for-dfn-collection-4 "§ 5.4 The package element")
*   [§ 5.8.1 The collection element](#ref-for-dfn-collection-5 "§ 5.8.1 The collection element") [(2)](#ref-for-dfn-collection-6 "Reference 2")
*   [§ D.4.1.1 alternate](#ref-for-dfn-collection-7 "§ D.4.1.1 alternate")

[Permalink](#dfn-smil) exported

**Referenced in:**

*   [§ 9.2.2.2 The head element](#ref-for-dfn-smil-1 "§ 9.2.2.2 The head element")
*   [§ 9.2.2.4 The body element](#ref-for-dfn-smil-2 "§ 9.2.2.4 The body element")

[Permalink](#dfn-head) exported

**Referenced in:**

*   [§ 9.2.2.1 The smil element](#ref-for-dfn-head-1 "§ 9.2.2.1 The smil element")
*   [§ 9.2.2.3 The metadata element](#ref-for-dfn-head-2 "§ 9.2.2.3 The metadata element")
*   [§ 9.2.2.4 The body element](#ref-for-dfn-head-3 "§ 9.2.2.4 The body element")

[Permalink](#dfn-body) exported

**Referenced in:**

*   [§ 9.2.2.1 The smil element](#ref-for-dfn-body-1 "§ 9.2.2.1 The smil element")
*   [§ 9.2.2.5 The seq element](#ref-for-dfn-body-2 "§ 9.2.2.5 The seq element")
*   [§ 9.2.2.6 The par element](#ref-for-dfn-body-3 "§ 9.2.2.6 The par element")
*   [§ 9.3.1 Introduction](#ref-for-dfn-body-4 "§ 9.3.1 Introduction")
*   [§ 9.3.2.1 Overlay structure](#ref-for-dfn-body-5 "§ 9.3.2.1 Overlay structure")
*   [§ 9.3.3 Structural semantics in overlays](#ref-for-dfn-body-6 "§ 9.3.3 Structural semantics in overlays")

[Permalink](#dfn-seq) exported

**Referenced in:**

*   [§ 9.2.2.4 The body element](#ref-for-dfn-seq-1 "§ 9.2.2.4 The body element") [(2)](#ref-for-dfn-seq-2 "Reference 2")
*   [§ 9.2.2.5 The seq element](#ref-for-dfn-seq-3 "§ 9.2.2.5 The seq element") [(2)](#ref-for-dfn-seq-4 "Reference 2")
*   [§ 9.2.2.6 The par element](#ref-for-dfn-seq-5 "§ 9.2.2.6 The par element")
*   [§ 9.3.1 Introduction](#ref-for-dfn-seq-6 "§ 9.3.1 Introduction")
*   [§ 9.3.2.1 Overlay structure](#ref-for-dfn-seq-7 "§ 9.3.2.1 Overlay structure")
*   [§ 9.3.2.3 Overlay granularity](#ref-for-dfn-seq-8 "§ 9.3.2.3 Overlay granularity")
*   [§ 9.3.3 Structural semantics in overlays](#ref-for-dfn-seq-9 "§ 9.3.3 Structural semantics in overlays")

[Permalink](#dfn-par) exported

**Referenced in:**

*   [§ 9.2.2.4 The body element](#ref-for-dfn-par-1 "§ 9.2.2.4 The body element") [(2)](#ref-for-dfn-par-2 "Reference 2")
*   [§ 9.2.2.5 The seq element](#ref-for-dfn-par-3 "§ 9.2.2.5 The seq element")
*   [§ 9.2.2.7 The text element](#ref-for-dfn-par-4 "§ 9.2.2.7 The text element")
*   [§ 9.2.2.8 The audio element](#ref-for-dfn-par-5 "§ 9.2.2.8 The audio element")
*   [§ 9.3.1 Introduction](#ref-for-dfn-par-6 "§ 9.3.1 Introduction")
*   [§ 9.3.2.1 Overlay structure](#ref-for-dfn-par-7 "§ 9.3.2.1 Overlay structure")
*   [§ 9.3.2.4 Text-to-speech rendering](#ref-for-dfn-par-8 "§ 9.3.2.4 Text-to-speech rendering")
*   [§ 9.3.3 Structural semantics in overlays](#ref-for-dfn-par-9 "§ 9.3.3 Structural semantics in overlays")

[Permalink](#dfn-text) exported

**Referenced in:**

*   [§ 9.2.2.6 The par element](#ref-for-dfn-text-1 "§ 9.2.2.6 The par element")
*   [§ 9.3.1 Introduction](#ref-for-dfn-text-2 "§ 9.3.1 Introduction")
*   [§ 9.3.2.1 Overlay structure](#ref-for-dfn-text-3 "§ 9.3.2.1 Overlay structure")
*   [§ 9.3.2.2 Referencing document fragments](#ref-for-dfn-text-4 "§ 9.3.2.2 Referencing document fragments")
*   [§ 9.3.2.3 Overlay granularity](#ref-for-dfn-text-5 "§ 9.3.2.3 Overlay granularity")
*   [§ 9.3.2.4 Text-to-speech rendering](#ref-for-dfn-text-6 "§ 9.3.2.4 Text-to-speech rendering")

[Permalink](#dfn-audio) exported

**Referenced in:**

*   [§ 9.2.2.6 The par element](#ref-for-dfn-audio-1 "§ 9.2.2.6 The par element")
*   [§ 9.2.2.7 The text element](#ref-for-dfn-audio-2 "§ 9.2.2.7 The text element")
*   [§ 9.3.1 Introduction](#ref-for-dfn-audio-3 "§ 9.3.1 Introduction")
*   [§ 9.3.2.1 Overlay structure](#ref-for-dfn-audio-4 "§ 9.3.2.1 Overlay structure")
*   [§ 9.3.2.4 Text-to-speech rendering](#ref-for-dfn-audio-5 "§ 9.3.2.4 Text-to-speech rendering")
*   [§ K. Change log](#ref-for-dfn-audio-6 "§ K. Change log")

[Permalink](#dfn-epub-type) exported

**Referenced in:**

*   [§ 6.1.3.1 Structural semantics](#ref-for-dfn-epub-type-1 "§ 6.1.3.1 Structural semantics")
*   [§ 6.2.3 Restrictions on SVG](#ref-for-dfn-epub-type-2 "§ 6.2.3 Restrictions on SVG") [(2)](#ref-for-dfn-epub-type-3 "Reference 2")
*   [§ 7.3 The nav element: restrictions](#ref-for-dfn-epub-type-4 "§ 7.3 The nav element: restrictions")
*   [§ 7.4.1 Introduction](#ref-for-dfn-epub-type-5 "§ 7.4.1 Introduction")
*   [§ 7.4.2 The toc nav element](#ref-for-dfn-epub-type-6 "§ 7.4.2 The toc nav element")
*   [§ 7.4.3 The page-list nav element](#ref-for-dfn-epub-type-7 "§ 7.4.3 The page-list nav element")
*   [§ 7.4.4 The landmarks nav element](#ref-for-dfn-epub-type-8 "§ 7.4.4 The landmarks nav element") [(2)](#ref-for-dfn-epub-type-9 "Reference 2")
*   [§ 7.4.5 Other nav elements](#ref-for-dfn-epub-type-10 "§ 7.4.5 Other nav elements")
*   [§ 9.3.3 Structural semantics in overlays](#ref-for-dfn-epub-type-11 "§ 9.3.3 Structural semantics in overlays")
*   [§ C.1 Introduction](#ref-for-dfn-epub-type-12 "§ C.1 Introduction")

[Permalink](https://www.rfc-editor.org/rfc/rfc5646#section-2.2.9)

**Referenced in:**

*   [§ 5.3.7 The xml:lang attribute](#ref-for-index-term-well-formed-language-tag-1 "§ 5.3.7 The xml:lang attribute")
*   [§ 5.5.3.1.3 The dc:language element](#ref-for-index-term-well-formed-language-tag-2 "§ 5.5.3.1.3 The dc:language element")
*   [§ 5.5.6 The link element](#ref-for-index-term-well-formed-language-tag-3 "§ 5.5.6 The link element")

[Permalink](https://www.unicode.org/reports/tr9/tr9-50.html#BD5)

**Referenced in:**

*   [§ 5.3.1 The dir attribute (under-implemented)](#ref-for-index-term-base-direction-1 "§ 5.3.1 The dir attribute (under-implemented)")

[Permalink](https://www.w3.org/TR/charmod-norm/#CanonicalFoldNormalizationStep)

**Referenced in:**

*   [§ 4.2.3 File paths and file names](#ref-for-index-term-unicode-canonical-case-fold-normalization-step-1 "§ 4.2.3 File paths and file names")

[Permalink](https://www.w3.org/TR/css-text-3/#hyphens-property)

**Referenced in:**

*   [§ E.2.1 The -epub-hyphens property](#ref-for-index-term-hyphens-property-1 "§ E.2.1 The -epub-hyphens property")

[Permalink](https://www.w3.org/TR/css-text-3/#line-break-property)

**Referenced in:**

*   [§ E.2.2 The -epub-line-break property](#ref-for-index-term-line-break-property-1 "§ E.2.2 The -epub-line-break property")

[Permalink](https://www.w3.org/TR/css-text-3/#text-align-last-property)

**Referenced in:**

*   [§ E.2.3 The -epub-text-align-last property](#ref-for-index-term-text-align-last-property-1 "§ E.2.3 The -epub-text-align-last property")

[Permalink](https://www.w3.org/TR/css-text-3/#text-transform-property)

**Referenced in:**

*   [§ E.2.5 The text-transform property](#ref-for-index-term-text-transform-property-1 "§ E.2.5 The text-transform property")

[Permalink](https://www.w3.org/TR/css-text-3/#word-break-property)

**Referenced in:**

*   [§ E.2.4 The -epub-word-break property](#ref-for-index-term-word-break-property-1 "§ E.2.4 The -epub-word-break property")

[Permalink](https://www.w3.org/TR/css-text-decor-3/#text-emphasis-color-property)

**Referenced in:**

*   [§ E.3.1 The -epub-text-emphasis-color Property](#ref-for-index-term-text-emphasis-color-property-1 "§ E.3.1 The -epub-text-emphasis-color Property")

[Permalink](https://www.w3.org/TR/css-text-decor-3/#text-emphasis-position-property)

**Referenced in:**

*   [§ E.3.2 The -epub-text-emphasis-position property](#ref-for-index-term-text-emphasis-position-property-1 "§ E.3.2 The -epub-text-emphasis-position property")

[Permalink](https://www.w3.org/TR/css-text-decor-3/#text-emphasis-style-property)

**Referenced in:**

*   [§ E.3.3 The -epub-text-emphasis-style property](#ref-for-index-term-text-emphasis-style-property-1 "§ E.3.3 The -epub-text-emphasis-style property")

[Permalink](https://www.w3.org/TR/css-text-decor-3/#text-underline-position-property)

**Referenced in:**

*   [§ E.3.4 The -epub-text-underline-position property](#ref-for-index-term-text-underline-position-property-1 "§ E.3.4 The -epub-text-underline-position property")

[Permalink](https://www.w3.org/TR/css-writing-modes-3/#direction)

**Referenced in:**

*   [§ 6.3.1.2 CSS requirements](#ref-for-index-term-direction-property-1 "§ 6.3.1.2 CSS requirements")

[Permalink](https://www.w3.org/TR/css-writing-modes-3/#text-combine-upright)

**Referenced in:**

*   [§ E.1.3 The -epub-text-combine-horizontal and -epub-text-combine properties](#ref-for-index-term-text-combine-upright-property-1 "§ E.1.3 The -epub-text-combine-horizontal and -epub-text-combine properties")

[Permalink](https://www.w3.org/TR/css-writing-modes-3/#propdef-text-orientation)

**Referenced in:**

*   [§ E.1.1 The -epub-text-orientation property](#ref-for-index-term-text-orientation-property-1 "§ E.1.1 The -epub-text-orientation property")

[Permalink](https://www.w3.org/TR/css-writing-modes-3/#unicode-bidi)

**Referenced in:**

*   [§ 6.3.1.2 CSS requirements](#ref-for-index-term-unicode-bidi-property-1 "§ 6.3.1.2 CSS requirements")

[Permalink](https://www.w3.org/TR/css-writing-modes-3/#propdef-writing-mode)

**Referenced in:**

*   [§ E.1.2 The -epub-writing-mode property](#ref-for-index-term-writing-mode-property-1 "§ E.1.2 The -epub-writing-mode property")

[Permalink](https://www.w3.org/TR/CSS2/syndata.html#numbers)

**Referenced in:**

*   [§ 8.2.2.6 Content document dimensions](#ref-for-index-term-number-1 "§ 8.2.2.6 Content document dimensions") [(2)](#ref-for-index-term-number-2 "Reference 2")

[Permalink](https://dom.spec.whatwg.org/#concept-child-text-content)

**Referenced in:**

*   [§ 5.5.2 Metadata values](#ref-for-index-term-child-text-content-1 "§ 5.5.2 Metadata values")

[Permalink](https://www.w3.org/TR/epub-a11y-11/#)

**Referenced in:**

*   [§ 1.1 Overview](#ref-for-index-term-epub-accessibility-1 "§ 1.1 Overview")
*   [§ 10. Accessibility](#ref-for-index-term-epub-accessibility-2 "§ 10. Accessibility")

[Permalink](https://www.w3.org/TR/epub-multi-rend-11/#container)

**Referenced in:**

*   [§ 4.2.2 File and directory structure](#ref-for-index-term-creating-multiple-renditions-1 "§ 4.2.2 File and directory structure")

[Permalink](https://www.w3.org/TR/epub-overview-33/#)

**Referenced in:**

*   [§ 1.1 Overview](#ref-for-index-term-epub-3-overview-1 "§ 1.1 Overview")

[Permalink](https://www.w3.org/TR/epub-overview-33/#sec-rendering)

**Referenced in:**

*   [§ 8.2.1 Introduction](#ref-for-index-term-rendering-and-css-1 "§ 8.2.1 Introduction")

[Permalink](https://www.w3.org/TR/epub-rs-33/#sec-epub-rs-conf-cmt)

**Referenced in:**

*   [§ 3.2 Core media types](#ref-for-index-term-core-media-types-1 "§ 3.2 Core media types")

[Permalink](https://www.w3.org/TR/epub-rs-33/#)

**Referenced in:**

*   [§ 1.1 Overview](#ref-for-index-term-epub-3-reading-systems-1 "§ 1.1 Overview")

[Permalink](https://www.w3.org/TR/epub-rs-33/#app-epubReadingSystem)

**Referenced in:**

*   [§ 11.2.1 EPUB-specific features](#ref-for-index-term-epubreadingsystem-object-1 "§ 11.2.1 EPUB-specific features")

[Permalink](https://www.w3.org/TR/epub-rs-33/#confreq-rs-scripted-fxl-support)

**Referenced in:**

*   [§ 6.3.2.2.2 Spine-level scripts](#ref-for-index-term-fixed-layout-documents-1 "§ 6.3.2.2.2 Spine-level scripts")

[Permalink](https://www.w3.org/TR/epub-rs-33/#sec-nav)

**Referenced in:**

*   [§ 9.5 Navigation document overlays](#ref-for-index-term-navigation-document-processing-1 "§ 9.5 Navigation document overlays")

[Permalink](https://www.w3.org/TR/epub-rs-33/#sec-property-values)

**Referenced in:**

*   [§ D.1.2 The property data type](#ref-for-index-term-processing-1 "§ D.1.2 The property data type")

[Permalink](https://www.w3.org/TR/epub-rs-33/#confreq-css-rs-fonts)

**Referenced in:**

*   [§ 3.4 Exempt resources](#ref-for-index-term-reading-system-support-requirements-for-fonts-1 "§ 3.4 Exempt resources")

[Permalink](https://www.w3.org/TR/epub-rs-33/#confreq-rs-scripted-scrolled)

**Referenced in:**

*   [§ 6.3.2.2.2 Spine-level scripts](#ref-for-index-term-reflowable-documents-set-to-scroll-1 "§ 6.3.2.2.2 Spine-level scripts")

[Permalink](https://www.w3.org/TR/epub-rs-33/#sec-scripted-content)

**Referenced in:**

*   [§ 6.3.2.1 Script inclusion](#ref-for-index-term-scripting-1 "§ 6.3.2.1 Script inclusion")
*   [§ 6.3.2.2 Scripting contexts](#ref-for-index-term-scripting-2 "§ 6.3.2.2 Scripting contexts")
*   [§ 6.3.2.2.1 Container-constrained scripts](#ref-for-index-term-scripting-3 "§ 6.3.2.2.1 Container-constrained scripts")

[Permalink](https://www.w3.org/TR/epub-rs-33/#sec-security-privacy)

**Referenced in:**

*   [§ 11.1 Overview](#ref-for-index-term-security-and-privacy-section-1 "§ 11.1 Overview")

[Permalink](https://www.w3.org/TR/epub-rs-33/#note-table-reading-mode)

**Referenced in:**

*   [§ 9.3.3 Structural semantics in overlays](#ref-for-index-term-table-reading-mode-1 "§ 9.3.3 Structural semantics in overlays")

[Permalink](https://www.w3.org/TR/epub-rs-33/#sec-container-iri)

**Referenced in:**

*   [§ 11.3 Recommendations](#ref-for-index-term-unique-origin-requirement-1 "§ 11.3 Recommendations")

[Permalink](https://www.w3.org/TR/epub-rs-33/#confreq-zip-rootdir)

**Referenced in:**

*   [§ 1.4 Terminology](#ref-for-index-term-virtual-in-nature-1 "§ 1.4 Terminology")

[Permalink](https://www.w3.org/TR/epub-ssv-11/#aside)

**Referenced in:**

*   [§ 9.4.2 Escapability](#ref-for-index-term-aside-1 "§ 9.4.2 Escapability")

[Permalink](https://www.w3.org/TR/epub-ssv-11/#bodymatter)

**Referenced in:**

*   [§ 7.4.4 The landmarks nav element](#ref-for-index-term-bodymatter-1 "§ 7.4.4 The landmarks nav element")

[Permalink](https://www.w3.org/TR/epub-ssv-11/#endnote)

**Referenced in:**

*   [§ 9.4.1 Skippability](#ref-for-index-term-endnote-1 "§ 9.4.1 Skippability")

[Permalink](https://www.w3.org/TR/epub-ssv-11/#figure)

**Referenced in:**

*   [§ 9.4.2 Escapability](#ref-for-index-term-figure-1 "§ 9.4.2 Escapability")

[Permalink](https://www.w3.org/TR/epub-ssv-11/#footnote)

**Referenced in:**

*   [§ 9.4.1 Skippability](#ref-for-index-term-footnote-1 "§ 9.4.1 Skippability")

[Permalink](https://www.w3.org/TR/epub-ssv-11/#landmarks)

**Referenced in:**

*   [§ 7.4.4 The landmarks nav element](#ref-for-index-term-landmarks-1 "§ 7.4.4 The landmarks nav element")

[Permalink](https://www.w3.org/TR/epub-ssv-11/#list)

**Referenced in:**

*   [§ 9.4.2 Escapability](#ref-for-index-term-list-1 "§ 9.4.2 Escapability")

[Permalink](https://www.w3.org/TR/epub-ssv-11/#page-list)

**Referenced in:**

*   [§ 7.4.3 The page-list nav element](#ref-for-index-term-page-list-1 "§ 7.4.3 The page-list nav element")

[Permalink](https://www.w3.org/TR/epub-ssv-11/#pagebreak)

**Referenced in:**

*   [§ 7.4.3 The page-list nav element](#ref-for-index-term-pagebreak-term-1 "§ 7.4.3 The page-list nav element")
*   [§ 9.4.1 Skippability](#ref-for-index-term-pagebreak-term-2 "§ 9.4.1 Skippability")
*   [§ D.3.11 source-of](#ref-for-index-term-pagebreak-term-3 "§ D.3.11 source-of")

[Permalink](https://www.w3.org/TR/epub-ssv-11/#table)

**Referenced in:**

*   [§ 9.4.2 Escapability](#ref-for-index-term-table-1 "§ 9.4.2 Escapability")

[Permalink](https://www.w3.org/TR/epub-ssv-11/#toc-1)

**Referenced in:**

*   [§ 7.4.2 The toc nav element](#ref-for-index-term-toc-1 "§ 7.4.2 The toc nav element")
*   [§ 7.4.4 The landmarks nav element](#ref-for-index-term-toc-2 "§ 7.4.4 The landmarks nav element")

[Permalink](https://www.w3.org/TR/epub-tts-10/#)

**Referenced in:**

*   [§ 9.3.2.4 Text-to-speech rendering](#ref-for-index-term-epub-3-text-to-speech-support-1 "§ 9.3.2.4 Text-to-speech rendering")

[Permalink](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element)

**Referenced in:**

*   [§ 1.4 Terminology](#ref-for-index-term-a-element-1 "§ 1.4 Terminology")
*   [§ 5.7.1 The spine element](#ref-for-index-term-a-element-2 "§ 5.7.1 The spine element")
*   [§ 7.3 The nav element: restrictions](#ref-for-index-term-a-element-3 "§ 7.3 The nav element: restrictions") [(2)](#ref-for-index-term-a-element-4 "Reference 2")
*   [§ H.1 Resources](#ref-for-index-term-a-element-5 "§ H.1 Resources") [(2)](#ref-for-index-term-a-element-6 "Reference 2")

[Permalink](https://html.spec.whatwg.org/multipage/image-maps.html#the-area-element)

**Referenced in:**

*   [§ 5.7.1 The spine element](#ref-for-index-term-area-element-1 "§ 5.7.1 The spine element")

[Permalink](https://html.spec.whatwg.org/multipage/#the-audio-element)

**Referenced in:**

*   [§ 3.5.2.1 HTML audio and video fallbacks](#ref-for-index-term-audio-1 "§ 3.5.2.1 HTML audio and video fallbacks")
*   [§ 3.6 Resource locations](#ref-for-index-term-audio-2 "§ 3.6 Resource locations") [(2)](#ref-for-index-term-audio-3 "Reference 2")

[Permalink](https://html.spec.whatwg.org/multipage/semantics.html#the-base-element)

**Referenced in:**

*   [§ 6.1.4.3.1 The base element](#ref-for-index-term-base-element-1 "§ 6.1.4.3.1 The base element")

[Permalink](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-bdo-element)

**Referenced in:**

*   [§ 6.3.1.2 CSS requirements](#ref-for-index-term-bdo-element-1 "§ 6.3.1.2 CSS requirements")

[Permalink](https://html.spec.whatwg.org/multipage/#the-body-element)

**Referenced in:**

*   [§ 6.2.3 Restrictions on SVG](#ref-for-index-term-body-1 "§ 6.2.3 Restrictions on SVG")
*   [§ 8.3.1 The rendition:flow property](#ref-for-index-term-body-2 "§ 8.3.1 The rendition:flow property")

[Permalink](https://html.spec.whatwg.org/multipage/canvas.html#canvas)

**Referenced in:**

*   [§ 6.3.2.5 Scripting fallbacks](#ref-for-index-term-canvas-element-1 "§ 6.3.2.5 Scripting fallbacks")

[Permalink](https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-content)

**Referenced in:**

*   [§ F.2 Syntax](#ref-for-index-term-content-attribute-for-meta-element-1 "§ F.2 Syntax")

[Permalink](https://html.spec.whatwg.org/multipage/#dom-document-cookie)

**Referenced in:**

*   [§ 11.3 Recommendations](#ref-for-index-term-cookies-1 "§ 11.3 Recommendations")

[Permalink](https://html.spec.whatwg.org/multipage/#data-block)

**Referenced in:**

*   [§ 3.5.2.3 HTML script element](#ref-for-index-term-data-blocks-1 "§ 3.5.2.3 HTML script element")
*   [§ 6.3.2.1 Script inclusion](#ref-for-index-term-data-blocks-2 "§ 6.3.2.1 Script inclusion")

[Permalink](https://html.spec.whatwg.org/multipage/#dependencies)

**Referenced in:**

*   [§ F.2 Syntax](#ref-for-index-term-depends-on-1 "§ F.2 Syntax")

[Permalink](https://html.spec.whatwg.org/multipage/dom.html#attr-dir)

**Referenced in:**

*   [§ 6.3.1.2 CSS requirements](#ref-for-index-term-dir-attribute-for-html-global-element-1 "§ 6.3.1.2 CSS requirements") [(2)](#ref-for-index-term-dir-attribute-for-html-global-element-2 "Reference 2")

[Permalink](https://html.spec.whatwg.org/multipage/grouping-content.html#the-div-element)

**Referenced in:**

*   [§ C.2 The epub:type attribute](#ref-for-index-term-div-element-1 "§ C.2 The epub:type attribute")

[Permalink](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#document-base-url)

**Referenced in:**

*   [§ 6.1.4.3.1 The base element](#ref-for-index-term-document-base-url-1 "§ 6.1.4.3.1 The base element")

[Permalink](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-embed-element)

**Referenced in:**

*   [§ 6.1.4.3.3 The embed element](#ref-for-index-term-embed-element-1 "§ 6.1.4.3.3 The embed element")

[Permalink](https://html.spec.whatwg.org/multipage/dom.html#embedded-content-category)

**Referenced in:**

*   [§ 3.4 Exempt resources](#ref-for-index-term-embedded-content-1 "§ 3.4 Exempt resources")
*   [§ 5.7.1 The spine element](#ref-for-index-term-embedded-content-2 "§ 5.7.1 The spine element")
*   [§ 7.3 The nav element: restrictions](#ref-for-index-term-embedded-content-3 "§ 7.3 The nav element: restrictions")

[Permalink](https://html.spec.whatwg.org/multipage/dom.html#flow-content-2)

**Referenced in:**

*   [§ 3.5.2.1 HTML audio and video fallbacks](#ref-for-index-term-flow-content-1 "§ 3.5.2.1 HTML audio and video fallbacks")
*   [§ 6.2.3 Restrictions on SVG](#ref-for-index-term-flow-content-2 "§ 6.2.3 Restrictions on SVG")

[Permalink](https://html.spec.whatwg.org/multipage/forms.html#the-form-element)

**Referenced in:**

*   [§ 1.4 Terminology](#ref-for-index-term-form-element-1 "§ 1.4 Terminology")
*   [§ 6.3.2.1 Script inclusion](#ref-for-index-term-form-element-2 "§ 6.3.2.1 Script inclusion")
*   [§ D.6.5 scripted](#ref-for-index-term-form-element-3 "§ D.6.5 scripted")

[Permalink](https://html.spec.whatwg.org/multipage/#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements)

**Referenced in:**

*   [§ 7.3 The nav element: restrictions](#ref-for-index-term-h1-h6-1 "§ 7.3 The nav element: restrictions")

[Permalink](https://html.spec.whatwg.org/multipage/#the-head-element)

**Referenced in:**

*   [§ 6.1.3.1 Structural semantics](#ref-for-index-term-head-1 "§ 6.1.3.1 Structural semantics")
*   [§ 8.2.2.6 Content document dimensions](#ref-for-index-term-head-2 "§ 8.2.2.6 Content document dimensions")

[Permalink](https://html.spec.whatwg.org/multipage/interaction.html#attr-hidden)

**Referenced in:**

*   [§ 7.5 Using in the spine](#ref-for-index-term-hidden-attribute-for-html-global-element-1 "§ 7.5 Using in the spine")

[Permalink](https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-href)

**Referenced in:**

*   [§ 5.7.1 The spine element](#ref-for-index-term-href-attribute-for-a-element-1 "§ 5.7.1 The spine element")

[Permalink](https://html.spec.whatwg.org/multipage/semantics.html#the-html-element)

**Referenced in:**

*   [§ 9.3.4 Associating style information](#ref-for-index-term-html-element-1 "§ 9.3.4 Associating style information")
*   [§ D.1.4 The prefix attribute](#ref-for-index-term-html-element-2 "§ D.1.4 The prefix attribute")

[Permalink](https://html.spec.whatwg.org/multipage/#link-type-alternate)

**Referenced in:**

*   [§ D.4.1.1 alternate](#ref-for-index-term-html-alternate-keyword-1 "§ D.4.1.1 alternate")

[Permalink](https://html.spec.whatwg.org/multipage/#resolving-urls)

**Referenced in:**

*   [§ 4.2.5 URLs in the OCF abstract container](#ref-for-index-term-html-standard-1 "§ 4.2.5 URLs in the OCF abstract container")

[Permalink](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element)

**Referenced in:**

*   [§ 3.7 Data URLs](#ref-for-index-term-iframe-element-1 "§ 3.7 Data URLs")
*   [§ 5.6.2.1 Resource properties](#ref-for-index-term-iframe-element-2 "§ 5.6.2.1 Resource properties")
*   [§ 6.3.2.2 Scripting contexts](#ref-for-index-term-iframe-element-3 "§ 6.3.2.2 Scripting contexts")
*   [§ 6.3.2.2.1 Container-constrained scripts](#ref-for-index-term-iframe-element-4 "§ 6.3.2.2.1 Container-constrained scripts") [(2)](#ref-for-index-term-iframe-element-5 "Reference 2")
*   [§ H.1 Resources](#ref-for-index-term-iframe-element-6 "§ H.1 Resources")

[Permalink](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element)

**Referenced in:**

*   [§ 3.5.1 Manifest fallbacks](#ref-for-index-term-img-element-1 "§ 3.5.1 Manifest fallbacks")
*   [§ 3.5.2.2 HTML img fallbacks](#ref-for-index-term-img-element-2 "§ 3.5.2.2 HTML img fallbacks")
*   [§ 6.1.4.2 Embedded SVG](#ref-for-index-term-img-element-3 "§ 6.1.4.2 Embedded SVG")
*   [§ H.1 Resources](#ref-for-index-term-img-element-4 "§ H.1 Resources") [(2)](#ref-for-index-term-img-element-5 "Reference 2") [(3)](#ref-for-index-term-img-element-6 "Reference 3")

[Permalink](https://html.spec.whatwg.org/multipage/grouping-content.html#the-li-element)

**Referenced in:**

*   [§ 7.3 The nav element: restrictions](#ref-for-index-term-li-element-1 "§ 7.3 The nav element: restrictions") [(2)](#ref-for-index-term-li-element-2 "Reference 2")

[Permalink](https://html.spec.whatwg.org/multipage/#the-link-element)

**Referenced in:**

*   [§ 3.1.3 The content plane](#ref-for-index-term-link-1 "§ 3.1.3 The content plane")
*   [§ 3.4 Exempt resources](#ref-for-index-term-link-2 "§ 3.4 Exempt resources")
*   [§ H.1 Resources](#ref-for-index-term-link-3 "§ H.1 Resources") [(2)](#ref-for-index-term-link-4 "Reference 2")

[Permalink](https://html.spec.whatwg.org/multipage/#media-elements)

**Referenced in:**

*   [§ 3.5.2.1 HTML audio and video fallbacks](#ref-for-index-term-media-element-1 "§ 3.5.2.1 HTML audio and video fallbacks")

[Permalink](https://html.spec.whatwg.org/multipage/#the-meta-element)

**Referenced in:**

*   [§ F.2 Syntax](#ref-for-index-term-meta-1 "§ F.2 Syntax") [(2)](#ref-for-index-term-meta-2 "Reference 2")

[Permalink](https://html.spec.whatwg.org/multipage/dom.html#metadata-content-2)

**Referenced in:**

*   [§ 6.1.3.1 Structural semantics](#ref-for-index-term-metadata-content-1 "§ 6.1.3.1 Structural semantics")

[Permalink](https://html.spec.whatwg.org/multipage/#microdata)

**Referenced in:**

*   [§ 6.1.3.2 RDFa](#ref-for-index-term-microdata-attributes-1 "§ 6.1.3.2 RDFa")

[Permalink](https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-name)

**Referenced in:**

*   [§ F.2 Syntax](#ref-for-index-term-name-attribute-for-meta-element-1 "§ F.2 Syntax")

[Permalink](https://html.spec.whatwg.org/multipage/sections.html#the-nav-element)

**Referenced in:**

*   [§ 7.3 The nav element: restrictions](#ref-for-index-term-nav-element-1 "§ 7.3 The nav element: restrictions")
*   [§ 7.4.2 The toc nav element](#ref-for-index-term-nav-element-2 "§ 7.4.2 The toc nav element")
*   [§ 7.4.3 The page-list nav element](#ref-for-index-term-nav-element-3 "§ 7.4.3 The page-list nav element")
*   [§ 7.4.4 The landmarks nav element](#ref-for-index-term-nav-element-4 "§ 7.4.4 The landmarks nav element")

[Permalink](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-object-element)

**Referenced in:**

*   [§ 6.1.4.2 Embedded SVG](#ref-for-index-term-object-type-1 "§ 6.1.4.2 Embedded SVG")
*   [§ 6.1.4.3.3 The embed element](#ref-for-index-term-object-type-2 "§ 6.1.4.3.3 The embed element")
*   [§ 6.3.2.2 Scripting contexts](#ref-for-index-term-object-type-3 "§ 6.3.2.2 Scripting contexts")
*   [§ 6.3.2.5 Scripting fallbacks](#ref-for-index-term-object-type-4 "§ 6.3.2.5 Scripting fallbacks")

[Permalink](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ol-element)

**Referenced in:**

*   [§ 7.3 The nav element: restrictions](#ref-for-index-term-ol-element-1 "§ 7.3 The nav element: restrictions") [(2)](#ref-for-index-term-ol-element-2 "Reference 2") [(3)](#ref-for-index-term-ol-element-3 "Reference 3")

[Permalink](https://html.spec.whatwg.org/multipage/#origin)

**Referenced in:**

*   [§ 6.3.2.1 Script inclusion](#ref-for-index-term-origin-1 "§ 6.3.2.1 Script inclusion")

[Permalink](https://html.spec.whatwg.org/multipage/dom.html#palpable-content-2)

**Referenced in:**

*   [§ 9.2.2.7 The text element](#ref-for-index-term-palpable-content-1 "§ 9.2.2.7 The text element")

[Permalink](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content-2)

**Referenced in:**

*   [§ 7.3 The nav element: restrictions](#ref-for-index-term-phrasing-content-1 "§ 7.3 The nav element: restrictions") [(2)](#ref-for-index-term-phrasing-content-2 "Reference 2")

[Permalink](https://html.spec.whatwg.org/multipage/embedded-content.html#the-picture-element)

**Referenced in:**

*   [§ 3.1.3 The content plane](#ref-for-index-term-picture-element-1 "§ 3.1.3 The content plane")
*   [§ 3.5.2.2 HTML img fallbacks](#ref-for-index-term-picture-element-2 "§ 3.5.2.2 HTML img fallbacks")
*   [§ H.1 Resources](#ref-for-index-term-picture-element-3 "§ H.1 Resources") [(2)](#ref-for-index-term-picture-element-4 "Reference 2")

[Permalink](https://html.spec.whatwg.org/multipage/#svg-0)

**Referenced in:**

*   [§ 6.2.3 Restrictions on SVG](#ref-for-index-term-restrictions-on-svg-1 "§ 6.2.3 Restrictions on SVG")

[Permalink](https://html.spec.whatwg.org/multipage/infrastructure.html#attr-aria-role)

**Referenced in:**

*   [§ C.1 Introduction](#ref-for-index-term-role-attribute-1 "§ C.1 Introduction")
*   [§ C.2 The epub:type attribute](#ref-for-index-term-role-attribute-2 "§ C.2 The epub:type attribute")

[Permalink](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-rp-element)

**Referenced in:**

*   [§ 6.1.4.3.2 The rp element](#ref-for-index-term-rp-element-1 "§ 6.1.4.3.2 The rp element")

[Permalink](https://html.spec.whatwg.org/multipage/scripting.html#script)

**Referenced in:**

*   [§ 3.5.2.3 HTML script element](#ref-for-index-term-script-element-1 "§ 3.5.2.3 HTML script element")
*   [§ 5.5.6 The link element](#ref-for-index-term-script-element-2 "§ 5.5.6 The link element")
*   [§ 6.3.2.2.1 Container-constrained scripts](#ref-for-index-term-script-element-3 "§ 6.3.2.2.1 Container-constrained scripts")
*   [§ 6.3.2.2.2 Spine-level scripts](#ref-for-index-term-script-element-4 "§ 6.3.2.2.2 Spine-level scripts")

[Permalink](https://html.spec.whatwg.org/multipage/embedded-content.html#the-source-element)

**Referenced in:**

*   [§ 3.4 Exempt resources](#ref-for-index-term-source-element-1 "§ 3.4 Exempt resources")
*   [§ 3.5.2.1 HTML audio and video fallbacks](#ref-for-index-term-source-element-2 "§ 3.5.2.1 HTML audio and video fallbacks")
*   [§ 3.5.2.2 HTML img fallbacks](#ref-for-index-term-source-element-3 "§ 3.5.2.2 HTML img fallbacks")
*   [§ H.1 Resources](#ref-for-index-term-source-element-4 "§ H.1 Resources")

[Permalink](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-span-element)

**Referenced in:**

*   [§ 7.3 The nav element: restrictions](#ref-for-index-term-span-element-1 "§ 7.3 The nav element: restrictions") [(2)](#ref-for-index-term-span-element-2 "Reference 2")
*   [§ 9.3.2.3 Overlay granularity](#ref-for-index-term-span-element-3 "§ 9.3.2.3 Overlay granularity")
*   [§ C.2 The epub:type attribute](#ref-for-index-term-span-element-4 "§ C.2 The epub:type attribute")

[Permalink](https://html.spec.whatwg.org/multipage/embedded-content.html#attr-source-src)

**Referenced in:**

*   [§ 3.5.2.2 HTML img fallbacks](#ref-for-index-term-src-attribute-for-source-element-1 "§ 3.5.2.2 HTML img fallbacks")

[Permalink](https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-src)

**Referenced in:**

*   [§ 3.5.2.2 HTML img fallbacks](#ref-for-index-term-src-attribute-for-img-element-1 "§ 3.5.2.2 HTML img fallbacks")

[Permalink](https://html.spec.whatwg.org/multipage/embedded-content.html#attr-source-srcset)

**Referenced in:**

*   [§ 3.5.2.2 HTML img fallbacks](#ref-for-index-term-srcset-attribute-for-source-element-1 "§ 3.5.2.2 HTML img fallbacks")

[Permalink](https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-srcset)

**Referenced in:**

*   [§ 3.5.2.2 HTML img fallbacks](#ref-for-index-term-srcset-attribute-for-img-element-1 "§ 3.5.2.2 HTML img fallbacks")

[Permalink](https://html.spec.whatwg.org/multipage/document-sequences.html#top-level-browsing-context)

**Referenced in:**

*   [§ 3.7 Data URLs](#ref-for-index-term-top-level-browsing-context-1 "§ 3.7 Data URLs")

[Permalink](https://html.spec.whatwg.org/multipage/media.html#the-track-element)

**Referenced in:**

*   [§ 3.4 Exempt resources](#ref-for-index-term-track-element-1 "§ 3.4 Exempt resources")

[Permalink](https://html.spec.whatwg.org/multipage/embedded-content.html#attr-source-type)

**Referenced in:**

*   [§ 3.5.2.2 HTML img fallbacks](#ref-for-index-term-type-attribute-for-source-element-1 "§ 3.5.2.2 HTML img fallbacks")

[Permalink](https://html.spec.whatwg.org/multipage/#extensibility-2)

**Referenced in:**

*   [§ 6.1.3 HTML extensions](#ref-for-index-term-vendor-neutral-extensions-1 "§ 6.1.3 HTML extensions")

[Permalink](https://html.spec.whatwg.org/multipage/media.html#video)

**Referenced in:**

*   [§ 3.4 Exempt resources](#ref-for-index-term-video-element-1 "§ 3.4 Exempt resources")
*   [§ 9.2.2.7 The text element](#ref-for-index-term-video-element-2 "§ 9.2.2.7 The text element")

[Permalink](https://html.spec.whatwg.org/multipage/#the-video-element)

**Referenced in:**

*   [§ 3.5.2.1 HTML audio and video fallbacks](#ref-for-index-term-video-1 "§ 3.5.2.1 HTML audio and video fallbacks")

[Permalink](https://html.spec.whatwg.org/multipage/#webstorage)

**Referenced in:**

*   [§ 11.3 Recommendations](#ref-for-index-term-web-storage-1 "§ 11.3 Recommendations")

[Permalink](https://html.spec.whatwg.org/multipage/#the-xhtml-syntax)

**Referenced in:**

*   [§ 1.4 Terminology](#ref-for-index-term-xml-syntax-1 "§ 1.4 Terminology")
*   [§ 3.2 Core media types](#ref-for-index-term-xml-syntax-2 "§ 3.2 Core media types")
*   [§ 6.1.2 XHTML requirements](#ref-for-index-term-xml-syntax-3 "§ 6.1.2 XHTML requirements")

[Permalink](https://infra.spec.whatwg.org/#string-concatenate)

**Referenced in:**

*   [§ 4.2.4 Deriving file paths](#ref-for-index-term-concatenation-1 "§ 4.2.4 Deriving file paths")

[Permalink](https://infra.spec.whatwg.org/#ascii-whitespace)

**Referenced in:**

*   [§ F.2 Syntax](#ref-for-index-term-definition-of-whitespace-1 "§ F.2 Syntax")

[Permalink](https://infra.spec.whatwg.org/#html-namespace)

**Referenced in:**

*   [§ 6.2.3 Restrictions on SVG](#ref-for-index-term-html-namespace-1 "§ 6.2.3 Restrictions on SVG")

[Permalink](https://infra.spec.whatwg.org/#list)

**Referenced in:**

*   [§ 4.2.4 Deriving file paths](#ref-for-index-term-list-0-1 "§ 4.2.4 Deriving file paths")

[Permalink](https://infra.spec.whatwg.org/#list-prepend)

**Referenced in:**

*   [§ 4.2.4 Deriving file paths](#ref-for-index-term-prepend-for-list-1 "§ 4.2.4 Deriving file paths")

[Permalink](https://infra.spec.whatwg.org/#scalar-value-string)

**Referenced in:**

*   [§ 4.2.3 File paths and file names](#ref-for-index-term-scalar-value-strings-1 "§ 4.2.3 File paths and file names")

[Permalink](https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace)

**Referenced in:**

*   [§ 5.5.2 Metadata values](#ref-for-index-term-strip-and-collapse-ascii-whitespace-1 "§ 5.5.2 Metadata values")

[Permalink](https://infra.spec.whatwg.org/#strip-leading-and-trailing-ascii-whitespace)

**Referenced in:**

*   [§ 5.5.2 Metadata values](#ref-for-index-term-strip-leading-and-trailing-ascii-whitespace-1 "§ 5.5.2 Metadata values")

[Permalink](https://www.w3.org/TR/international-specs/#char_truncation)

**Referenced in:**

*   [§ 4.2.3 File paths and file names](#ref-for-index-term-truncating-or-limiting-the-length-of-strings-1 "§ 4.2.3 File paths and file names")

[Permalink](https://www.w3.org/TR/json-ld11/#)

**Referenced in:**

*   [§ 6.1.3.2 RDFa](#ref-for-index-term-linked-data-1 "§ 6.1.3.2 RDFa")

[Permalink](https://www.w3.org/TR/MathML3/chapter4.html#)

**Referenced in:**

*   [§ 6.1.4.1 Embedded MathML](#ref-for-index-term-content-mathml-1 "§ 6.1.4.1 Embedded MathML")

[Permalink](https://www.w3.org/TR/MathML3/chapter3.html#)

**Referenced in:**

*   [§ 6.1.4.1 Embedded MathML](#ref-for-index-term-presentation-mathml-1 "§ 6.1.4.1 Embedded MathML")

[Permalink](https://www.rfc-editor.org/rfc/rfc2397#)

**Referenced in:**

*   [§ 3.7 Data URLs](#ref-for-index-term-data-url-scheme-1 "§ 3.7 Data URLs")

[Permalink](https://www.rfc-editor.org/rfc/rfc8089#)

**Referenced in:**

*   [§ 3.8 File URLs](#ref-for-index-term-file-url-scheme-1 "§ 3.8 File URLs")

[Permalink](https://www.w3.org/TR/SMIL3/smil-timing.html#q22)

**Referenced in:**

*   [§ 9.2.2.8 The audio element](#ref-for-index-term-clock-value-1 "§ 9.2.2.8 The audio element") [(2)](#ref-for-index-term-clock-value-2 "Reference 2")
*   [§ D.8.2 duration](#ref-for-index-term-clock-value-3 "§ D.8.2 duration")

[Permalink](https://www.w3.org/TR/SVG/render.html#TermRenderableElement)

**Referenced in:**

*   [§ 6.2.3 Restrictions on SVG](#ref-for-index-term-renderable-elements-1 "§ 6.2.3 Restrictions on SVG")

[Permalink](https://www.w3.org/TR/SVG/struct.html#elementdef-svg)

**Referenced in:**

*   [§ 6.2.3 Restrictions on SVG](#ref-for-index-term-svg-element-1 "§ 6.2.3 Restrictions on SVG")
*   [§ 9.3.4 Associating style information](#ref-for-index-term-svg-element-2 "§ 9.3.4 Associating style information")

[Permalink](https://www.w3.org/TR/SVG/struct.html#elementdef-title)

**Referenced in:**

*   [§ 6.2.3 Restrictions on SVG](#ref-for-index-term-title-element-1 "§ 6.2.3 Restrictions on SVG")

[Permalink](https://www.w3.org/TR/UAAG20/#gl-text-config)

**Referenced in:**

*   [§ 8.2.2.1 Layout](#ref-for-index-term-guideline-1-4-provide-text-configuration-1 "§ 8.2.2.1 Layout")

[Permalink](https://url.spec.whatwg.org/#absolute-url-string)

**Referenced in:**

*   [§ 5.5.3.1.1 The dc:identifier element](#ref-for-index-term-absolute-url-string-1 "§ 5.5.3.1.1 The dc:identifier element")
*   [§ 5.6.2 The item element](#ref-for-index-term-absolute-url-string-2 "§ 5.6.2 The item element")
*   [§ 9.2.2.8 The audio element](#ref-for-index-term-absolute-url-string-3 "§ 9.2.2.8 The audio element")

[Permalink](https://url.spec.whatwg.org/#absolute-url-with-fragment-string)

**Referenced in:**

*   [§ 4.2.5 URLs in the OCF abstract container](#ref-for-index-term-absolute-url-with-fragment-string-1 "§ 4.2.5 URLs in the OCF abstract container")
*   [§ 5.8.1 The collection element](#ref-for-index-term-absolute-url-with-fragment-string-2 "§ 5.8.1 The collection element")

[Permalink](https://url.spec.whatwg.org/#concept-base-url)

**Referenced in:**

*   [§ 4.2.5 URLs in the OCF abstract container](#ref-for-index-term-base-1 "§ 4.2.5 URLs in the OCF abstract container") [(2)](#ref-for-index-term-base-2 "Reference 2") [(3)](#ref-for-index-term-base-3 "Reference 3") [(4)](#ref-for-index-term-base-4 "Reference 4") [(5)](#ref-for-index-term-base-5 "Reference 5")
*   [§ 4.2.6.2 Parsing URLs in the META-INF directory](#ref-for-index-term-base-6 "§ 4.2.6.2 Parsing URLs in the META-INF directory")

[Permalink](https://url.spec.whatwg.org/#concept-domain)

**Referenced in:**

*   [§ 6.1.3.5 Custom attributes](#ref-for-index-term-domain-1 "§ 6.1.3.5 Custom attributes")

[Permalink](https://url.spec.whatwg.org/#double-dot-path-segment)

**Referenced in:**

*   [§ 4.2.5 URLs in the OCF abstract container](#ref-for-index-term-double-dot-url-path-segments-1 "§ 4.2.5 URLs in the OCF abstract container")

[Permalink](https://url.spec.whatwg.org/#path-relative-scheme-less-url-string)

**Referenced in:**

*   [§ 4.2.5 URLs in the OCF abstract container](#ref-for-index-term-path-relative-scheme-less-url-string-1 "§ 4.2.5 URLs in the OCF abstract container")
*   [§ 4.2.6.3.1.3 The rootfile element](#ref-for-index-term-path-relative-scheme-less-url-string-2 "§ 4.2.6.3.1.3 The rootfile element")
*   [§ 4.2.6.3.1.5 The link element](#ref-for-index-term-path-relative-scheme-less-url-string-3 "§ 4.2.6.3.1.5 The link element")
*   [§ 5.3.6 The refines attribute](#ref-for-index-term-path-relative-scheme-less-url-string-4 "§ 5.3.6 The refines attribute")
*   [§ 5.6.2 The item element](#ref-for-index-term-path-relative-scheme-less-url-string-5 "§ 5.6.2 The item element")
*   [§ 9.2.2.4 The body element](#ref-for-index-term-path-relative-scheme-less-url-string-6 "§ 9.2.2.4 The body element")
*   [§ 9.2.2.5 The seq element](#ref-for-index-term-path-relative-scheme-less-url-string-7 "§ 9.2.2.5 The seq element")
*   [§ 9.2.2.7 The text element](#ref-for-index-term-path-relative-scheme-less-url-string-8 "§ 9.2.2.7 The text element")
*   [§ D.1.2 The property data type](#ref-for-index-term-path-relative-scheme-less-url-string-9 "§ D.1.2 The property data type")

[Permalink](https://url.spec.whatwg.org/#percent-encode)

**Referenced in:**

*   [§ 4.2.5 URLs in the OCF abstract container](#ref-for-index-term-percent-encoded-1 "§ 4.2.5 URLs in the OCF abstract container")

[Permalink](https://url.spec.whatwg.org/#relative-url-string)

**Referenced in:**

*   [§ 9.2.2.8 The audio element](#ref-for-index-term-relative-url-string-1 "§ 9.2.2.8 The audio element")

[Permalink](https://url.spec.whatwg.org/#relative-url-with-fragment-string)

**Referenced in:**

*   [§ 4.2.5 URLs in the OCF abstract container](#ref-for-index-term-relative-url-with-fragment-strings-1 "§ 4.2.5 URLs in the OCF abstract container")

[Permalink](https://url.spec.whatwg.org/#concept-url)

**Referenced in:**

*   [§ 1.4 Terminology](#ref-for-index-term-url-1 "§ 1.4 Terminology") [(2)](#ref-for-index-term-url-2 "Reference 2")
*   [§ 4.2.5 URLs in the OCF abstract container](#ref-for-index-term-url-3 "§ 4.2.5 URLs in the OCF abstract container")

[Permalink](https://url.spec.whatwg.org/#concept-url-parser)

**Referenced in:**

*   [§ 4.2.5 URLs in the OCF abstract container](#ref-for-index-term-url-parser-1 "§ 4.2.5 URLs in the OCF abstract container") [(2)](#ref-for-index-term-url-parser-2 "Reference 2") [(3)](#ref-for-index-term-url-parser-3 "Reference 3") [(4)](#ref-for-index-term-url-parser-4 "Reference 4") [(5)](#ref-for-index-term-url-parser-5 "Reference 5") [(6)](#ref-for-index-term-url-parser-6 "Reference 6") [(7)](#ref-for-index-term-url-parser-7 "Reference 7")
*   [§ 4.2.6.2 Parsing URLs in the META-INF directory](#ref-for-index-term-url-parser-8 "§ 4.2.6.2 Parsing URLs in the META-INF directory")
*   [§ 5.2 Parsing URLs in the package document](#ref-for-index-term-url-parser-9 "§ 5.2 Parsing URLs in the package document")

[Permalink](https://url.spec.whatwg.org/#concept-url-serializer)

**Referenced in:**

*   [§ 4.2.5 URLs in the OCF abstract container](#ref-for-index-term-url-serializer-1 "§ 4.2.5 URLs in the OCF abstract container") [(2)](#ref-for-index-term-url-serializer-2 "Reference 2")

[Permalink](https://url.spec.whatwg.org/#url-fragment-string)

**Referenced in:**

*   [§ 4.2.5 URLs in the OCF abstract container](#ref-for-index-term-url-fragment-string-1 "§ 4.2.5 URLs in the OCF abstract container")
*   [§ 5.3.6 The refines attribute](#ref-for-index-term-url-fragment-string-2 "§ 5.3.6 The refines attribute")
*   [§ 9.2.2.4 The body element](#ref-for-index-term-url-fragment-string-3 "§ 9.2.2.4 The body element")
*   [§ 9.2.2.5 The seq element](#ref-for-index-term-url-fragment-string-4 "§ 9.2.2.5 The seq element")
*   [§ 9.2.2.7 The text element](#ref-for-index-term-url-fragment-string-5 "§ 9.2.2.7 The text element")
*   [§ 9.3.2.2 Referencing document fragments](#ref-for-index-term-url-fragment-string-6 "§ 9.3.2.2 Referencing document fragments")

[Permalink](https://url.spec.whatwg.org/#valid-url-string)

**Referenced in:**

*   [§ 5.3.2 The href attribute](#ref-for-index-term-valid-url-string-1 "§ 5.3.2 The href attribute")

[Permalink](https://www.w3.org/TR/xml/#sec-lang-tag)

**Referenced in:**

*   [§ 5.3.7 The xml:lang attribute](#ref-for-index-term-2-12-language-identification-1 "§ 5.3.7 The xml:lang attribute")

[Permalink](https://www.w3.org/TR/xml/#dt-doctype)

**Referenced in:**

*   [§ 3.9 XML conformance](#ref-for-index-term-document-type-declaration-1 "§ 3.9 XML conformance")
*   [§ B. Allowed external identifiers](#ref-for-index-term-document-type-declaration-2 "§ B. Allowed external identifiers")

[Permalink](https://www.w3.org/TR/xml/#dt-extent)

**Referenced in:**

*   [§ 3.9 XML conformance](#ref-for-index-term-external-entity-1 "§ 3.9 XML conformance")

[Permalink](https://www.w3.org/TR/xml/#NT-ExternalID)

**Referenced in:**

*   [§ 3.9 XML conformance](#ref-for-index-term-external-identifier-1 "§ 3.9 XML conformance")

[Permalink](https://www.w3.org/TR/xml/#id)

**Referenced in:**

*   [§ 3.5.1 Manifest fallbacks](#ref-for-index-term-id-1 "§ 3.5.1 Manifest fallbacks")
*   [§ 5.3.3 The id attribute](#ref-for-index-term-id-2 "§ 5.3.3 The id attribute")
*   [§ 5.3.6 The refines attribute](#ref-for-index-term-id-3 "§ 5.3.6 The refines attribute")
*   [§ 5.7.2 The itemref element](#ref-for-index-term-id-4 "§ 5.7.2 The itemref element")
*   [§ 9.2.2.1 The smil element](#ref-for-index-term-id-5 "§ 9.2.2.1 The smil element")
*   [§ 9.2.2.4 The body element](#ref-for-index-term-id-6 "§ 9.2.2.4 The body element")
*   [§ 9.2.2.5 The seq element](#ref-for-index-term-id-7 "§ 9.2.2.5 The seq element")
*   [§ 9.2.2.6 The par element](#ref-for-index-term-id-8 "§ 9.2.2.6 The par element")
*   [§ 9.2.2.7 The text element](#ref-for-index-term-id-9 "§ 9.2.2.7 The text element")
*   [§ 9.2.2.8 The audio element](#ref-for-index-term-id-10 "§ 9.2.2.8 The audio element")
*   [§ 9.3.5.1 Including media overlays](#ref-for-index-term-id-11 "§ 9.3.5.1 Including media overlays")

[Permalink](https://www.w3.org/TR/xml/#idref)

**Referenced in:**

*   [§ 5.6.2 The item element](#ref-for-index-term-idref-1 "§ 5.6.2 The item element")
*   [§ 5.7.1 The spine element](#ref-for-index-term-idref-2 "§ 5.7.1 The spine element")
*   [§ 5.7.2 The itemref element](#ref-for-index-term-idref-3 "§ 5.7.2 The itemref element")

[Permalink](https://www.w3.org/TR/xml/#dt-pubid)

**Referenced in:**

*   [§ B. Allowed external identifiers](#ref-for-index-term-public-1 "§ B. Allowed external identifiers")

[Permalink](https://www.w3.org/TR/xml/#dt-root)

**Referenced in:**

*   [§ 4.2.6.3.1.1 The container element](#ref-for-index-term-root-element-1 "§ 4.2.6.3.1.1 The container element")
*   [§ 4.2.6.3.2.1 The encryption element](#ref-for-index-term-root-element-2 "§ 4.2.6.3.2.1 The encryption element")
*   [§ 4.2.6.3.4 Metadata file (metadata.xml)](#ref-for-index-term-root-element-3 "§ 4.2.6.3.4 Metadata file (metadata.xml)")
*   [§ 4.2.6.3.6.1 The signatures element](#ref-for-index-term-root-element-4 "§ 4.2.6.3.6.1 The signatures element")
*   [§ 5.4 The package element](#ref-for-index-term-root-element-5 "§ 5.4 The package element")
*   [§ 9.2.2.1 The smil element](#ref-for-index-term-root-element-6 "§ 9.2.2.1 The smil element")
*   [§ D.1.4 The prefix attribute](#ref-for-index-term-root-element-7 "§ D.1.4 The prefix attribute")

[Permalink](https://www.w3.org/TR/xml/#sec-common-syn)

**Referenced in:**

*   [§ 4.4.3 Obfuscation key](#ref-for-index-term-section-2-3-of-the-xml-1-0-specification-1 "§ 4.4.3 Obfuscation key")

[Permalink](https://www.w3.org/TR/xml/#dt-sysid)

**Referenced in:**

*   [§ B. Allowed external identifiers](#ref-for-index-term-system-identifiers-1 "§ B. Allowed external identifiers")

[Permalink](https://www.w3.org/TR/xml/#NT-S)

**Referenced in:**

*   [§ F.2 Syntax](#ref-for-index-term-whitespace-characters-1 "§ F.2 Syntax")

[Permalink](https://www.w3.org/TR/xml/#AVNormalize)

**Referenced in:**

*   [§ F.2 Syntax](#ref-for-index-term-whitespace-normalization-1 "§ F.2 Syntax") [(2)](#ref-for-index-term-whitespace-normalization-2 "Reference 2") [(3)](#ref-for-index-term-whitespace-normalization-3 "Reference 3")

[Permalink](https://www.w3.org/TR/xml-names/#Conformance)

**Referenced in:**

*   [§ 3.9 XML conformance](#ref-for-index-term-conformance-of-documents-1 "§ 3.9 XML conformance")

[Permalink](https://www.w3.org/TR/xml-names/#NT-Prefix)

**Referenced in:**

*   [§ 6.1.3.5 Custom attributes](#ref-for-index-term-prefixed-1 "§ 6.1.3.5 Custom attributes")

[Permalink](https://www.w3.org/TR/xmldsig-core/#sec-EnvelopedSignature)

**Referenced in:**

*   [§ 4.2.6.3.6.1 The signatures element](#ref-for-index-term-section-6-6-4-1 "§ 4.2.6.3.6.1 The signatures element")

[Permalink](https://www.w3.org/TR/xmldsig-core1/#sec-Overview)

**Referenced in:**

*   [§ 4.2.6.3.6.1 The signatures element](#ref-for-index-term-section-2-1 "§ 4.2.6.3.6.1 The signatures element")

[Permalink](https://www.w3.org/TR/xmlenc-core1/#sec-eg-Symmetric-Key)

**Referenced in:**

*   [§ 4.2.6.3.2.1 The encryption element](#ref-for-index-term-section-2-2-1-1 "§ 4.2.6.3.2.1 The encryption element")

(() => { // @ts-check if (document.respec) { document.respec.ready.then(setupPanel); } else { setupPanel(); } function setupPanel() { const listener = panelListener(); document.body.addEventListener("keydown", listener); document.body.addEventListener("click", listener); } function panelListener() { /\*\* @type {HTMLElement} \*/ let panel = null; return event => { const { target, type } = event; if (!(target instanceof HTMLElement)) return; // For keys, we only care about Enter key to activate the panel // otherwise it's activated via a click. if (type === "keydown" && event.key !== "Enter") return; const action = deriveAction(event); switch (action) { case "show": { hidePanel(panel); /\*\* @type {HTMLElement} \*/ const dfn = target.closest("dfn, .index-term"); panel = document.getElementById(\`dfn-panel-for-${dfn.id}\`); const coords = deriveCoordinates(event); displayPanel(dfn, panel, coords); break; } case "dock": { panel.style.left = null; panel.style.top = null; panel.classList.add("docked"); break; } case "hide": { hidePanel(panel); panel = null; break; } } }; } /\*\* \* @param {MouseEvent|KeyboardEvent} event \*/ function deriveCoordinates(event) { const target = /\*\* @type HTMLElement \*/ (event.target); // We prevent synthetic AT clicks from putting // the dialog in a weird place. The AT events sometimes // lack coordinates, so they have clientX/Y = 0 const rect = target.getBoundingClientRect(); if ( event instanceof MouseEvent && event.clientX >= rect.left && event.clientY >= rect.top ) { // The event probably happened inside the bounding rect... return { x: event.clientX, y: event.clientY }; } // Offset to the middle of the element const x = rect.x + rect.width / 2; // Placed at the bottom of the element const y = rect.y + rect.height; return { x, y }; } /\*\* \* @param {Event} event \*/ function deriveAction(event) { const target = /\*\* @type {HTMLElement} \*/ (event.target); const hitALink = !!target.closest("a"); if (target.closest("dfn:not(\[data-cite\]), .index-term")) { return hitALink ? "none" : "show"; } if (target.closest(".dfn-panel")) { if (hitALink) { return target.classList.contains("self-link") ? "hide" : "dock"; } const panel = target.closest(".dfn-panel"); return panel.classList.contains("docked") ? "hide" : "none"; } if (document.querySelector(".dfn-panel:not(\[hidden\])")) { return "hide"; } return "none"; } /\*\* \* @param {HTMLElement} dfn \* @param {HTMLElement} panel \* @param {{ x: number, y: number }} clickPosition \*/ function displayPanel(dfn, panel, { x, y }) { panel.hidden = false; // distance (px) between edge of panel and the pointing triangle (caret) const MARGIN = 20; const dfnRects = dfn.getClientRects(); // Find the \`top\` offset when the \`dfn\` can be spread across multiple lines let closestTop = 0; let minDiff = Infinity; for (const rect of dfnRects) { const { top, bottom } = rect; const diffFromClickY = Math.abs((top + bottom) / 2 - y); if (diffFromClickY < minDiff) { minDiff = diffFromClickY; closestTop = top; } } const top = window.scrollY + closestTop + dfnRects\[0\].height; const left = x - MARGIN; panel.style.left = \`${left}px\`; panel.style.top = \`${top}px\`; // Find if the panel is flowing out of the window const panelRect = panel.getBoundingClientRect(); const SCREEN\_WIDTH = Math.min(window.innerWidth, window.screen.width); if (panelRect.right > SCREEN\_WIDTH) { const newLeft = Math.max(MARGIN, x + MARGIN - panelRect.width); const newCaretOffset = left - newLeft; panel.style.left = \`${newLeft}px\`; /\*\* @type {HTMLElement} \*/ const caret = panel.querySelector(".caret"); caret.style.left = \`${newCaretOffset}px\`; } // As it's a dialog, we trap focus. // TODO: when <dialog> becomes a implemented, we should really // use that. trapFocus(panel, dfn); } /\*\* \* @param {HTMLElement} panel \* @param {HTMLElement} dfn \* @returns \*/ function trapFocus(panel, dfn) { /\*\* @type NodeListOf<HTMLAnchorElement> elements \*/ const anchors = panel.querySelectorAll("a\[href\]"); // No need to trap focus if (!anchors.length) return; // Move focus to first anchor element const first = anchors.item(0); first.focus(); const trapListener = createTrapListener(anchors, panel, dfn); panel.addEventListener("keydown", trapListener); // Hiding the panel releases the trap const mo = new MutationObserver(records => { const \[record\] = records; const target = /\*\* @type HTMLElement \*/ (record.target); if (target.hidden) { panel.removeEventListener("keydown", trapListener); mo.disconnect(); } }); mo.observe(panel, { attributes: true, attributeFilter: \["hidden"\] }); } /\*\* \* \* @param {NodeListOf<HTMLAnchorElement>} anchors \* @param {HTMLElement} panel \* @param {HTMLElement} dfn \* @returns \*/ function createTrapListener(anchors, panel, dfn) { const lastIndex = anchors.length - 1; let currentIndex = 0; return event => { switch (event.key) { // Hitting "Tab" traps us in a nice loop around elements. case "Tab": { event.preventDefault(); currentIndex += event.shiftKey ? -1 : +1; if (currentIndex < 0) { currentIndex = lastIndex; } else if (currentIndex > lastIndex) { currentIndex = 0; } anchors.item(currentIndex).focus(); break; } // Hitting "Enter" on an anchor releases the trap. case "Enter": hidePanel(panel); break; // Hitting "Escape" returns focus to dfn. case "Escape": hidePanel(panel); dfn.focus(); return; } }; } /\*\* @param {HTMLElement} panel \*/ function hidePanel(panel) { if (!panel) return; panel.hidden = true; panel.classList.remove("docked"); } })()

![p2m-icon](chrome-extension://dcppiamoebfeacdkaikjjgkfeoogkhbp/public/icon-128.png) Page to MarkdownCOPY ×

Copy Success!