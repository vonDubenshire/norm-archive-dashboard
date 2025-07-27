// Internet Archive Dashboard JavaScript
class ArchiveDashboard {
    constructor() {
        this.data = {
            "major_collections": [
                {
                    "name": "NormMacDonaldArchive1",
                    "url": "https://archive.org/details/NormMacDonaldArchive1",
                    "size": "116.7GB",
                    "upload_date": "2022-02-18",
                    "total_views": "26,442",
                    "favorites": "126",
                    "description": "The most comprehensive Norm Macdonald video archive from r/normmacdonald",
                    "type": "video",
                    "content_categories": {
                        "TV Appearances": [
                            "Letterman appearances (1990-1995) - 7-part collection",
                            "Conan O'Brien appearances (1993-1999) - Multiple episodes",
                            "SNL 25th Anniversary Special (1999)",
                            "Politically Incorrect appearances",
                            "Tonight Show appearances",
                            "Various talk show appearances"
                        ],
                        "Stand-up Comedy": [
                            "White House Correspondents Dinner (1997) - Full performance",
                            "Just for Laughs recordings (1986) - Rare early material",
                            "Comedy Central's Last Laugh '04",
                            "Live performances from various venues",
                            "Bootleg stand-up recordings"
                        ],
                        "Radio Interviews": [
                            "Dennis Miller Show compilation (2007-2011) - 15+ episodes",
                            "Howard Stern appearances",
                            "Various radio show calls and interviews"
                        ],
                        "Book Promotions": [
                            "Based on a True Story book tour interviews (2016)",
                            "Facebook Live chats",
                            "Promotional appearances"
                        ],
                        "Special Content": [
                            "Poker game shows and interviews",
                            "Commercial appearances",
                            "Behind-the-scenes footage",
                            "Collaborations with other comedians"
                        ]
                    },
                    "file_formats": ["MP4", "M4V", "IA compressed"],
                    "estimated_files": "400+"
                },
                {
                    "name": "Norm Macdonald Live Podcast",
                    "url": "https://archive.org/details/Norm_Macdonald_Live",
                    "size": "24.1GB",
                    "upload_date": "2018-08-19",
                    "total_views": "2,143,978",
                    "favorites": "2,680",
                    "description": "Complete archive of the Norm Macdonald Live podcast (2013-2017)",
                    "type": "video",
                    "seasons": {
                        "Season 1 (2013)": [
                            "Episode 1: Super Dave Osborne",
                            "Episode 2: Tom Green", 
                            "Episode 3: Fred Stoller",
                            "Episode 4: Russell Brand",
                            "Episode 5: Billy Bob Thornton",
                            "Episode 6: Larry King",
                            "Episode 7: Kevin Nealon",
                            "Episode 8: Simon Helberg",
                            "Episode 9: Nick Swardson",
                            "Episode 10: Andy Dick",
                            "Episode 11: Gilbert Gottfried Pt. 1",
                            "Episode 12: Gilbert Gottfried Pt. 2"
                        ],
                        "Season 2 (2014)": [
                            "Episode 1: Ray Romano",
                            "Episode 2: Adam Sandler",
                            "Episode 3: David Spade",
                            "Episode 4: Carl Reiner",
                            "Episode 5: Fred Willard",
                            "Episode 6: Todd Glass Pt. 1",
                            "Episode 7: Todd Glass Pt. 2",
                            "Episode 8: Bob Saget",
                            "Episode 9: David Koechner",
                            "Episode 10: Roseanne Barr",
                            "Episode 11: Marc Maron",
                            "Episode 12: Martin Mull",
                            "Episode 13: Jack Carter"
                        ],
                        "Season 3 (2016-2017)": [
                            "Episode 1: Stephen Merchant",
                            "Episode 2: Bill Hader",
                            "Episode 3: David Letterman",
                            "Episode 4: Bobby Lee",
                            "Episode 5: Tim Allen",
                            "Episode 6: Margaret Cho",
                            "Episode 7: Caitlyn Jenner",
                            "Episode 8: Dana Carvey",
                            "Episode 9: Jerry Seinfeld",
                            "Episode 10: Jim Carrey",
                            "Episode 11: Mike Tyson"
                        ]
                    },
                    "file_formats": ["MP4", "OGV"],
                    "total_episodes": "39"
                },
                {
                    "name": "Sports Show with Norm Macdonald",
                    "url": "https://archive.org/details/sports-show-with-norm-macdonald-s-1-ep-1",
                    "size": "21.6GB",
                    "upload_date": "2022-01-19",
                    "total_views": "7,462",
                    "favorites": "53",
                    "description": "Norm's short-lived Comedy Central sports show from 2011",
                    "type": "video",
                    "content": [
                        "Complete season episodes",
                        "Sports commentary and interviews",
                        "Norm's unique take on sports news",
                        "Guest appearances by sports figures"
                    ],
                    "file_formats": ["H.264", "MPEG4"],
                    "note": "Cancelled due to sensitivity from sports figures being roasted"
                },
                {
                    "name": "Norm Macdonald MKV Archive",
                    "url": "https://archive.org/details/normappearancesarchivemkv",
                    "size": "12.2GB",
                    "upload_date": "2022-02-18",
                    "total_views": "1,222",
                    "favorites": "9",
                    "description": "Curated collection in MKV format from r/normmacdonald Google Sheets",
                    "type": "video",
                    "content": [
                        "SNL 25th Anniversary Special (1999)",
                        "Comedy Central's Last Laugh '04",
                        "Hollywood & Wine behind-the-scenes",
                        "Super Dave Osborne collaborations"
                    ],
                    "file_formats": ["MKV", "MP4"],
                    "source": "Reddit r/normmacdonald community archive"
                },
                {
                    "name": "Based on a True Story Audiobook",
                    "url": "https://archive.org/details/norm-macdonald-audiobook-full",
                    "upload_date": "2016-10-23",
                    "description": "Complete audiobook of Norm's memoir read by himself",
                    "type": "audio",
                    "content": [
                        "Full text available for reading",
                        "Audio format available",
                        "Introduction read by Norm",
                        "8-part complete audiobook series"
                    ],
                    "file_formats": ["Audio files", "Text", "PDF"],
                    "chapters": "Multiple parts covering his full memoir"
                }
            ],
            "secondary_collections": [
                {
                    "name": "The Norm Show (480p)",
                    "url": "https://archive.org/details/the-norm-show-480p",
                    "description": "Episodes from Norm's ABC sitcom (1999-2001)",
                    "content": "Complete episodes from the TV series",
                    "type": "video"
                },
                {
                    "name": "Norm Macdonald (1959-2021) Collection",
                    "url": "https://archive.org/details/01-norm-mac-donald",
                    "size": "80.4GB",
                    "description": "Another comprehensive collection focusing on late-night appearances",
                    "type": "video",
                    "content": [
                        "Conan O'Brien appearances chronologically organized",
                        "Letterman appearances",
                        "Lights Out with David Spade",
                        "Based on a True Story audiobook parts"
                    ]
                },
                {
                    "name": "Usenet Archive - alt.fan.norm-macdonald",
                    "url": "https://archive.org/download/usenet-alt",
                    "description": "Early internet forum discussions about Norm Macdonald",
                    "content": "Historical Usenet newsgroup posts and discussions",
                    "file_format": "MBOX archive files",
                    "type": "text"
                },
                {
                    "name": "I'm Not Norm Compilation",
                    "url": "https://archive.org/details/imnotnorm_201908",
                    "description": "Best of compilation spanning various topics",
                    "content": "Curated highlights covering Hitler to Stalin, 9/11 to current events",
                    "type": "video"
                }
            ]
        };
        
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.renderMajorCollections();
        this.renderSecondaryCollections();
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Search functionality
        const searchInput = document.getElementById('search-input');
        searchInput.addEventListener('input', () => this.handleSearch(searchInput.value));

        // Filter buttons
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => this.handleFilter(btn.dataset.filter, btn));
        });

        // Collection card expansion
        document.addEventListener('click', (e) => {
            if (e.target.closest('.collection-header')) {
                const card = e.target.closest('.collection-card');
                this.toggleCard(card);
            }
        });
    }

    renderMajorCollections() {
        const container = document.getElementById('major-collections-grid');
        container.innerHTML = '';

        this.data.major_collections.forEach(collection => {
            const card = this.createCollectionCard(collection, true);
            container.appendChild(card);
        });
    }

    renderSecondaryCollections() {
        const container = document.getElementById('secondary-collections-grid');
        container.innerHTML = '';

        this.data.secondary_collections.forEach(collection => {
            const card = this.createSecondaryCard(collection);
            container.appendChild(card);
        });
    }

    createCollectionCard(collection, isMajor = false) {
        const card = document.createElement('div');
        card.className = 'collection-card';
        card.dataset.type = collection.type || 'video';
        card.dataset.name = collection.name.toLowerCase();

        const formatTags = collection.file_formats ? 
            collection.file_formats.map(format => `<span class="format-tag">${format}</span>`).join('') : '';

        card.innerHTML = `
            <div class="collection-header">
                <div class="collection-info">
                    <h3>${collection.name}</h3>
                    <div class="collection-meta">
                        ${collection.size ? `<span class="meta-item">Size: <span class="meta-value">${collection.size}</span></span>` : ''}
                        ${collection.total_views ? `<span class="meta-item">Views: <span class="meta-value">${collection.total_views}</span></span>` : ''}
                        ${collection.favorites ? `<span class="meta-item">Favorites: <span class="meta-value">${collection.favorites}</span></span>` : ''}
                        ${collection.upload_date ? `<span class="meta-item">Uploaded: <span class="meta-value">${collection.upload_date}</span></span>` : ''}
                    </div>
                    <p class="collection-description">${collection.description}</p>
                </div>
                <span class="expand-icon">▼</span>
            </div>
            <div class="collection-details">
                ${this.renderCollectionDetails(collection)}
                ${formatTags ? `<div class="format-tags">${formatTags}</div>` : ''}
                <a href="${collection.url}" target="_blank" class="archive-link">
                    View on Internet Archive →
                </a>
            </div>
        `;

        return card;
    }

    createSecondaryCard(collection) {
        const card = document.createElement('div');
        card.className = 'secondary-card';
        card.dataset.type = collection.type || 'video';
        card.dataset.name = collection.name.toLowerCase();

        card.innerHTML = `
            <h3>${collection.name}</h3>
            <p>${collection.description}</p>
            ${collection.size ? `<div class="collection-meta"><span class="meta-item">Size: <span class="meta-value">${collection.size}</span></span></div>` : ''}
            <a href="${collection.url}" target="_blank" class="archive-link">
                View on Internet Archive →
            </a>
        `;

        return card;
    }

    renderCollectionDetails(collection) {
        let details = '';

        if (collection.content_categories) {
            Object.entries(collection.content_categories).forEach(([category, items]) => {
                details += `
                    <div class="details-section">
                        <h4>${category}</h4>
                        <ul class="content-list">
                            ${items.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                `;
            });
        }

        if (collection.seasons) {
            details += '<div class="details-section"><h4>Episodes by Season</h4>';
            Object.entries(collection.seasons).forEach(([season, episodes]) => {
                details += `
                    <div class="season-header">${season}</div>
                    <ul class="content-list episode-list">
                        ${episodes.map(episode => `<li>${episode}</li>`).join('')}
                    </ul>
                `;
            });
            details += '</div>';
        }

        if (collection.content && Array.isArray(collection.content)) {
            details += `
                <div class="details-section">
                    <h4>Content</h4>
                    <ul class="content-list">
                        ${collection.content.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            `;
        }

        if (collection.note) {
            details += `
                <div class="details-section">
                    <h4>Note</h4>
                    <p style="color: var(--color-warning); font-size: var(--font-size-sm);">${collection.note}</p>
                </div>
            `;
        }

        return details;
    }

    toggleCard(card) {
        card.classList.toggle('expanded');
    }

    handleSearch(query) {
        const allCards = document.querySelectorAll('.collection-card, .secondary-card');
        const lowerQuery = query.toLowerCase();

        allCards.forEach(card => {
            const name = card.dataset.name;
            const textContent = card.textContent.toLowerCase();
            
            if (name.includes(lowerQuery) || textContent.includes(lowerQuery)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    }

    handleFilter(filterType, clickedBtn) {
        // Update active button
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        clickedBtn.classList.add('active');
        
        this.currentFilter = filterType;
        
        const allCards = document.querySelectorAll('.collection-card, .secondary-card');
        
        allCards.forEach(card => {
            if (filterType === 'all' || card.dataset.type === filterType) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    }
}

// Initialize the dashboard when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ArchiveDashboard();
});