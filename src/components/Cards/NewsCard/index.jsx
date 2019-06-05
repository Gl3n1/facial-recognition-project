import React from 'react';

const googleSearchAPI = () => {
    var cx = '015380263888069981069:yxkfjwjpuhc';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
}

const createSearchBarMarkup = () => {
    return { __html: '<gcse:searchbox></gcse:searchbox>' };
}

const createResultsMarkup = () => {
    return { __html: '<gcse:searchresults></gcse:searchresults>' };
}


const NewsCard = (props) => {
    const performSearch = () => {
        setTimeout(()=>{
            const input = document.getElementById('gsc-i-id1');
    
            input.value = props.name;
        },500)
    }

    const removeIframe = () => {
        setInterval(()=> {
            const iframe = document.querySelector('.gsc-adBlock');

            if(iframe) {
                iframe.style.display = 'none';
            }  
        }, 500)
    }

    googleSearchAPI();
    performSearch();
    removeIframe();
    return (
        <div className='card'>
            <h1>News</h1>
            <div className='content'>
                <div dangerouslySetInnerHTML={createSearchBarMarkup()} className="googleSearchBar"></div>
                <div dangerouslySetInnerHTML={createResultsMarkup()}></div>
            </div>
        </div>
    )
}

export default NewsCard;