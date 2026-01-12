// Simple search functionality for Loc300 course
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        // Search content index
        const searchIndex = [
            {
                title: 'Home',
                url: 'index.html',
                keywords: 'welcome course description learning outcomes audience translator selection localization'
            },
            {
                title: 'Course Outline',
                url: 'course-outline.html',
                keywords: 'modules outline structure curriculum'
            },
            {
                title: 'Module 1: Selecting Between Human and Automatic Translation',
                url: 'module-1.html',
                keywords: 'human automatic machine translation MT selection decision criteria'
            },
            {
                title: 'Module 2: Translation Labels by ASTM F43',
                url: 'module-2.html',
                keywords: 'ASTM F43 standards labels quality certification ISO'
            },
            {
                title: 'Module 3: How to Select an Individual Translator',
                url: 'module-3.html',
                keywords: 'individual translator freelancer credentials qualifications experience specialization'
            },
            {
                title: 'Module 4: Selecting a Translation Agency',
                url: 'module-4.html',
                keywords: 'agency LSP language service provider vendor selection evaluation'
            },
            {
                title: 'Module 5: Localization Vendor Management Scorecard',
                url: 'module-5.html',
                keywords: 'vendor management scorecard metrics KPI performance evaluation assessment'
            },
            {
                title: 'Conclusion',
                url: 'conclusion.html',
                keywords: 'conclusion summary next steps future courses NMT LLM'
            }
        ];
        
        // Create search results container
        const resultsContainer = document.createElement('div');
        resultsContainer.className = 'search-results';
        resultsContainer.style.display = 'none';
        searchInput.parentElement.appendChild(resultsContainer);
        
        // Search functionality
        searchInput.addEventListener('input', function(e) {
            const query = e.target.value.toLowerCase().trim();
            
            if (query.length < 2) {
                resultsContainer.style.display = 'none';
                resultsContainer.innerHTML = '';
                return;
            }
            
            // Filter results
            const results = searchIndex.filter(item => 
                item.title.toLowerCase().includes(query) || 
                item.keywords.toLowerCase().includes(query)
            );
            
            // Display results
            if (results.length > 0) {
                resultsContainer.innerHTML = results.map(result => 
                    `<a href="${result.url}" class="search-result-item">${result.title}</a>`
                ).join('');
                resultsContainer.style.display = 'block';
            } else {
                resultsContainer.innerHTML = '<div class="search-no-results">No results found</div>';
                resultsContainer.style.display = 'block';
            }
        });
        
        // Close results when clicking outside
        document.addEventListener('click', function(e) {
            if (!searchInput.contains(e.target) && !resultsContainer.contains(e.target)) {
                resultsContainer.style.display = 'none';
            }
        });
    }
});
