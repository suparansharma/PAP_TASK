import React, {useState} from 'react';
import './CaseStudyHeader.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSolid faGripDots } from '@fortawesome/free-solid-svg-icons'
import { faSolid,faEllipsis,faBell,faGear } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './bootstrap.min.css'
import './bootstrap.min.css.map'
import './simplebar.css'
import './tiny-slider.css'

const handleSubmit =()=>{

}

const HeaderCaseStudy = () => {

    return (
        <div  className="header">
     {/* HEADER */}

   {/* HEADER ACTIONS */}
    <div className="header-actions">
     {/* HEADER BRAND */}
      <div className="header-brand">
       {/* LOGO */}
        <div className="logo">
         {/* ICON LOGO VIKINGER */}
          <svg className="icon-logo-vikinger small">
            <use href="#svg-logo-vikinger"/>
          </svg>
         {/* /ICON LOGO VIKINGER */}
        </div>
       {/* /LOGO */}

       {/* HEADER BRAND TEXT */}
        <h1 className="header-brand-text">Premiumpass</h1>
       {/* /HEADER BRAND TEXT */}
      </div>
     {/* /HEADER BRAND */}
    </div>
   {/* /HEADER ACTIONS */}

   {/* HEADER ACTIONS */}
    <div className="header-actions">
     {/* SIDEMENU TRIGGER */}
      <div className="sidemenu-trigger navigation-widget-trigger">
       {/* ICON GRID */}
        <svg className="icon-grid">
          <use href="#svg-grid"/>
        </svg>
       {/* /ICON GRID */}
      </div>
     {/* /SIDEMENU TRIGGER */}

     {/* MOBILEMENU TRIGGER */}
      <div className="mobilemenu-trigger navigation-widget-mobile-trigger">
       {/* BURGER ICON */}
        <div className="burger-icon inverted">
         {/* BURGER ICON BAR */}
          <div className="burger-icon-bar"></div>
         {/* /BURGER ICON BAR */}

         {/* BURGER ICON BAR */}
          <div className="burger-icon-bar"></div>
         {/* /BURGER ICON BAR */}

         {/* BURGER ICON BAR */}
          <div className="burger-icon-bar"></div>
         {/* /BURGER ICON BAR */}
        </div>
       {/* /BURGER ICON */}
      </div>
     {/* /MOBILEMENU TRIGGER */}

     {/* NAVIGATION */}
      <nav className="navigation">
       {/* MENU MAIN */}
        <ul className="menu-main">
         {/* MENU MAIN ITEM */}
          <li className="menu-main-item">
           {/* MENU MAIN ITEM LINK */}
            <a className="menu-main-item-link" href="#">Home</a>
           {/* /MENU MAIN ITEM LINK */}
          </li>
         {/* /MENU MAIN ITEM */}

         {/* MENU MAIN ITEM */}
          <li className="menu-main-item">
           {/* MENU MAIN ITEM LINK */}
            <a className="menu-main-item-link" href="#">Streaming Tag Bulletin</a>
           {/* /MENU MAIN ITEM LINK */}
          </li>
         {/* /MENU MAIN ITEM */}

         {/* MENU MAIN ITEM */}
          <li className="menu-main-item">
           {/* MENU MAIN ITEM LINK */}
            <a className="menu-main-item-link" href="#">Faqs</a>
           {/* /MENU MAIN ITEM LINK */}
          </li>
         {/* /MENU MAIN ITEM */}

         {/* MENU MAIN ITEM */}
          <li className="menu-main-item">
           {/* MENU MAIN ITEM LINK */}
            <p className="menu-main-item-link">
             {/* ICON DOTS */}
             <div className="dots">
      
              <FontAwesomeIcon className="svg"icon={faEllipsis} />
            </div>
              {/* <svg >
                <use href="#svg-dots"/>
                <FontAwesomeIcon icon="faSolid faGripDots" />
              </svg> */}
              
             {/* /ICON DOTS */}
            </p>
           {/* /MENU MAIN ITEM LINK */}

           {/* MENU MAIN */}
            <ul className="menu-main">
             {/* MENU MAIN ITEM */}
              <li className="menu-main-item">
               {/* MENU MAIN ITEM LINK */}
                <a className="menu-main-item-link" href="#">About Us</a>
               {/* /MENU MAIN ITEM LINK */}
              </li>
             {/* /MENU MAIN ITEM */}

             {/* MENU MAIN ITEM */}
              <li className="menu-main-item">
               {/* MENU MAIN ITEM LINK */}
                <a className="menu-main-item-link" href="#">Our Blog</a>
               {/* /MENU MAIN ITEM LINK */}
              </li>
             {/* /MENU MAIN ITEM */}

             {/* MENU MAIN ITEM */}
              <li className="menu-main-item">
               {/* MENU MAIN ITEM LINK */}
                <a className="menu-main-item-link" href="#">Contact Us</a>
               {/* /MENU MAIN ITEM LINK */}
              </li>
             {/* /MENU MAIN ITEM */}

             {/* MENU MAIN ITEM */}
              <li className="menu-main-item">
               {/* MENU MAIN ITEM LINK */}
                <a className="menu-main-item-link" href="#">Privacy Policy</a>
               {/* /MENU MAIN ITEM LINK */}
              </li>
             {/* /MENU MAIN ITEM */}
            </ul>
           {/* /MENU MAIN */}
          </li>
         {/* /MENU MAIN ITEM */}
        </ul>
       {/* /MENU MAIN */}
      </nav>
     {/* /NAVIGATION */}
    </div>
   {/* /HEADER ACTIONS */}

   {/* HEADER ACTIONS */}
  {/* need next  header-actions search-bar */}
    <div className="header-actions search-bar"> 
     {/* INTERACTIVE INPUT */}
      <div className="interactive-input dark">
        <input type="text" id="search-main" name="search_main" placeholder="Search here for people or groups"/>
       {/* INTERACTIVE INPUT ICON WRAP */}
        <div className="interactive-input-icon-wrap">
         {/* INTERACTIVE INPUT ICON */}
          <svg className="interactive-input-icon icon-magnifying-glass">
            <use href="#svg-magnifying-glass"/>
          </svg>
         {/* /INTERACTIVE INPUT ICON */}
        </div>
       {/* /INTERACTIVE INPUT ICON WRAP */}

       {/* INTERACTIVE INPUT ACTION */}
        <div className="interactive-input-action">
         {/* INTERACTIVE INPUT ACTION ICON */}
          <svg className="interactive-input-action-icon icon-cross-thin">
            <use href="#svg-cross-thin"/>
          </svg>
         {/* /INTERACTIVE INPUT ACTION ICON */}
        </div>
       {/* /INTERACTIVE INPUT ACTION */}
      </div>
      
     {/* /INTERACTIVE INPUT */}

     {/* DROPDOWN BOX */}
     {/* need next dropdown-box padding-bottom-small header-search-dropdown */}
    
     {/* /DROPDOWN BOX */}
    </div>
   {/* /HEADER ACTIONS */}

   {/* HEADER ACTIONS */}
    <div className="header-actions">
     {/* PROGRESS STAT */}
      <div className="progress-stat">
       {/* BAR PROGRESS WRAP */}
        <div className="bar-progress-wrap">
         {/* BAR PROGRESS INFO */}
          <p className="bar-progress-info">Next: <span className="bar-progress-text"></span></p>
         {/* /BAR PROGRESS INFO */}
        </div>
       {/* /BAR PROGRESS WRAP */}
    
       {/* PROGRESS STAT BAR */}
        <div id="logged-user-level" className="progress-stat-bar"></div>
       {/* /PROGRESS STAT BAR */}
      </div>
     {/* /PROGRESS STAT */}
    </div>
   {/* /HEADER ACTIONS */}

   {/* HEADER ACTIONS */}
    <div className="header-actions">
     {/* ACTION LIST */}
     <div className="action-list dark">
        {/* ACTION LIST ITEM WRAP*/}
        <div className="action-list-item-wrap">
          {/* ACTION LIST ITEM*/}
          <div className="action-list-item header-dropdown-trigger">
            {/* ACTION LIST ITEM ICON*/}
            <svg className="action-list-item-icon icon-shopping-bag">
              <use href="#svg-shopping-bag"></use>
            </svg>
            {/* /ACTION LIST ITEM ICON*/}
          </div>
          {/* /ACTION LIST ITEM*/}

          {/* DROPDOWN BOX*/}
          {/* need next shoping chart dropdown    dropdown-box no-padding-bottom header-dropdown  */}
        
          {/* /DROPDOWN BOX*/}
        </div>
        {/* /ACTION LIST ITEM WRAP*/}

        {/* ACTION LIST ITEM WRAP*/}
        <div className="action-list-item-wrap">
          {/* ACTION LIST ITEM*/}
          <div className="action-list-item header-dropdown-trigger">
            {/* ACTION LIST ITEM ICON*/}
            <svg className="action-list-item-icon icon-friend">
              <use href="#svg-friend"></use>
            </svg>
            {/* /ACTION LIST ITEM ICON*/}
          </div>
          {/* /ACTION LIST ITEM*/}

          {/* DROPDOWN BOX*/}

          {/* need next friend  dropdown-box header-dropdown    */}
      
          {/* /DROPDOWN BOX*/}
        </div>
        {/* /ACTION LIST ITEM WRAP*/}

        {/* ACTION LIST ITEM WRAP*/}
        <div className="action-list-item-wrap">
          {/* ACTION LIST ITEM*/}
         
          <div className="action-list-item header-dropdown-trigger">
            {/* ACTION LIST ITEM ICON*/}
            <svg className="action-list-item-icon icon-messages">
              <use href="#svg-messages"></use>
            </svg>
            {/* /ACTION LIST ITEM ICON*/}
          </div>
          {/* /ACTION LIST ITEM*/}
 {/* need next message dropdown-box header-dropdown */}
          {/* DROPDOWN BOX*/}
       
          {/* /DROPDOWN BOX*/}
        </div>
        {/* /ACTION LIST ITEM WRAP*/}

        {/* ACTION LIST ITEM WRAP*/}
      
            <div className="action-list-item-wrap dropdown" >
          {/* ACTION LIST ITEM*/}
          <div  className="action-list-item unread header-dropdown-trigger active" onclick="header-dropdown-trigger">
            {/* ACTION LIST ITEM ICON*/}
            <div onclick={handleSubmit} className="action-list-item-icon icon-notification">
            <FontAwesomeIcon className="svg dropbtn" icon={faBell} />
            </div>
            {/* /ACTION LIST ITEM ICON*/}
          </div>
          {/* /ACTION LIST ITEM*/}

          {/* DROPDOWN BOX*/}

          <div className="dropdown-box header-dropdown  dropdown-content " >
            {/* DROPDOWN BOX HEADER */}
            <div className="dropdown-box-header">
              {/* DROPDOWN BOX HEADER TITLE */}
              <p className="dropdown-box-header-title">Notifications</p>
              {/* /DROPDOWN BOX HEADER TITLE */}
        
              {/* DROPDOWN BOX HEADER ACTIONS */}
              <div className="dropdown-box-header-actions">
                {/* DROPDOWN BOX HEADER ACTION */}
                <p className="dropdown-box-header-action">Mark all as Read</p>
                {/* /DROPDOWN BOX HEADER ACTION */}
                
                {/* DROPDOWN BOX HEADER ACTION */}
                <p className="dropdown-box-header-action">Settings</p>
                {/* /DROPDOWN BOX HEADER ACTION */}
              </div>
              {/* /DROPDOWN BOX HEADER ACTIONS */}
            </div>
            {/* /DROPDOWN BOX HEADER */}
        
            {/* DROPDOWN BOX LIST */}
            <div className="dropdown-box-list data-simplebar">
              {/* DROPDOWN BOX LIST ITEM */}
              <div className="dropdown-box-list-item unread">
                {/* USER STATUS */}
                <div className="user-status notification">
                  {/* USER STATUS AVATAR */}
                  <a className="user-status-avatar" href="profile-timeline.html">
                    {/* USER AVATAR */}
                    <div className="user-avatar small no-outline">
                      {/* USER AVATAR CONTENT */}
                      <div className="user-avatar-content">
                        {/* HEXAGON */}
                        <div className="hexagon-image-30-32" data-src="img/avatar/03.jpg"></div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR CONTENT */}
                  
                      {/* USER AVATAR PROGRESS */}
                      <div className="user-avatar-progress">
                        {/* HEXAGON */}
                        <div className="hexagon-progress-40-44"></div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR PROGRESS */}
                  
                      {/* USER AVATAR PROGRESS BORDER */}
                      <div className="user-avatar-progress-border">
                        {/* HEXAGON */}
                        <div className="hexagon-border-40-44"></div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR PROGRESS BORDER */}
                  
                      {/* USER AVATAR BADGE */}
                      <div className="user-avatar-badge">
                        {/* USER AVATAR BADGE BORDER */}
                        <div className="user-avatar-badge-border">
                          {/* HEXAGON */}
                          <div className="hexagon-22-24"></div>
                          {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR BADGE BORDER */}
                  
                        {/* USER AVATAR BADGE CONTENT */}
                        <div className="user-avatar-badge-content">
                          {/* HEXAGON */}
                          <div className="hexagon-dark-16-18"></div>
                          {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR BADGE CONTENT */}
                  
                        {/* USER AVATAR BADGE TEXT */}
                        <p className="user-avatar-badge-text">16</p>
                        {/* /USER AVATAR BADGE TEXT */}
                      </div>
                      {/* /USER AVATAR BADGE */}
                    </div>
                    {/* /USER AVATAR */}
                  </a>
                  {/* /USER STATUS AVATAR */}
              
                  {/* USER STATUS TITLE */}
                  <p className="user-status-title"><a className="bold" href="profile-timeline.html">Nick Grissom</a> posted a comment on your <a className="highlighted" href="profile-timeline.html">status update</a></p>
                  {/* /USER STATUS TITLE */}
              
                  {/* USER STATUS TIMESTAMP */}
                  <p className="user-status-timestamp">2 minutes ago</p>
                  {/* /USER STATUS TIMESTAMP */}
              
                  {/* USER STATUS ICON */}
                  <div className="user-status-icon">
                    {/* ICON COMMENT */}
                    <svg className="icon-comment">
                      <use href="#svg-comment"></use>
                    </svg>
                    {/* /ICON COMMENT */}
                  </div>
                  {/* /USER STATUS ICON */}
                </div>
                {/* /USER STATUS */}
              </div>
              {/* /DROPDOWN BOX LIST ITEM */}
        
              {/* DROPDOWN BOX LIST ITEM */}
              <div className="dropdown-box-list-item">
                {/* USER STATUS */}
                <div className="user-status notification">
                  {/* USER STATUS AVATAR */}
                  <a className="user-status-avatar" href="profile-timeline.html">
                    {/* USER AVATAR */}
                    <div className="user-avatar small no-outline">
                      {/* USER AVATAR CONTENT */}
                      <div className="user-avatar-content">
                        {/* HEXAGON */}
                        <div className="hexagon-image-30-32" data-src="img/avatar/07.jpg"></div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR CONTENT */}
                  
                      {/* USER AVATAR PROGRESS */}
                      <div className="user-avatar-progress">
                        {/* HEXAGON */}
                        <div className="hexagon-progress-40-44"></div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR PROGRESS */}
                  
                      {/* USER AVATAR PROGRESS BORDER */}
                      <div className="user-avatar-progress-border">
                        {/* HEXAGON */}
                        <div className="hexagon-border-40-44"></div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR PROGRESS BORDER */}
                  
                      {/* USER AVATAR BADGE */}
                      <div className="user-avatar-badge">
                        {/* USER AVATAR BADGE BORDER */}
                        <div className="user-avatar-badge-border">
                          {/* HEXAGON */}
                          <div className="hexagon-22-24"></div>
                          {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR BADGE BORDER */}
                  
                        {/* USER AVATAR BADGE CONTENT */}
                        <div className="user-avatar-badge-content">
                          {/* HEXAGON */}
                          <div className="hexagon-dark-16-18"></div>
                          {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR BADGE CONTENT */}
                  
                        {/* USER AVATAR BADGE TEXT */}
                        <p className="user-avatar-badge-text">26</p>
                        {/* /USER AVATAR BADGE TEXT */}
                      </div>
                      {/* /USER AVATAR BADGE */}
                    </div>
                    {/* /USER AVATAR */}
                  </a>
                  {/* /USER STATUS AVATAR */}
              
                  {/* USER STATUS TITLE */}
                  <p className="user-status-title"><a className="bold" href="profile-timeline.html">Sarah Diamond</a> left a like <img className="reaction" src="img/reaction/like.png" alt="reaction-like"/> reaction on your <a className="highlighted" href="profile-timeline.html">status update</a></p>
                  {/* /USER STATUS TITLE */}
              
                  {/* USER STATUS TIMESTAMP */}
                  <p className="user-status-timestamp">17 minutes ago</p>
                  {/* /USER STATUS TIMESTAMP */}
              
                  {/* USER STATUS ICON */}
                  <div className="user-status-icon">
                    {/* ICON THUMBS UP */}
                    <svg className="icon-thumbs-up">
                      <use href="#svg-thumbs-up"></use>
                    </svg>
                    {/* /ICON THUMBS UP */}
                  </div>
                  {/* /USER STATUS ICON */}
                </div>
                {/* /USER STATUS */}
              </div>
              {/* /DROPDOWN BOX LIST ITEM */}
        
              {/* DROPDOWN BOX LIST ITEM */}
              <div className="dropdown-box-list-item">
                {/* USER STATUS */}
                <div className="user-status notification">
                  {/* USER STATUS AVATAR */}
                  <a className="user-status-avatar" href="profile-timeline.html">
                    {/* USER AVATAR */}
                    <div className="user-avatar small no-outline">
                      {/* USER AVATAR CONTENT */}
                      <div className="user-avatar-content">
                        {/* HEXAGON */}
                        <div className="hexagon-image-30-32" data-src="img/avatar/02.jpg"></div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR CONTENT */}
                  
                      {/* USER AVATAR PROGRESS */}
                      <div className="user-avatar-progress">
                        {/* HEXAGON */}
                        <div className="hexagon-progress-40-44"></div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR PROGRESS */}
                  
                      {/* USER AVATAR PROGRESS BORDER */}
                      <div className="user-avatar-progress-border">
                        {/* HEXAGON */}
                        <div className="hexagon-border-40-44"></div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR PROGRESS BORDER */}
                  
                      {/* USER AVATAR BADGE */}
                      <div className="user-avatar-badge">
                        {/* USER AVATAR BADGE BORDER */}
                        <div className="user-avatar-badge-border">
                          {/* HEXAGON */}
                          <div className="hexagon-22-24"></div>
                          {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR BADGE BORDER */}
                  
                        {/* USER AVATAR BADGE CONTENT */}
                        <div className="user-avatar-badge-content">
                          {/* HEXAGON */}
                          <div className="hexagon-dark-16-18"></div>
                          {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR BADGE CONTENT */}
                  
                        {/* USER AVATAR BADGE TEXT */}
                        <p className="user-avatar-badge-text">13</p>
                        {/* /USER AVATAR BADGE TEXT */}
                      </div>
                      {/* /USER AVATAR BADGE */}
                    </div>
                    {/* /USER AVATAR */}
                  </a>
                  {/* /USER STATUS AVATAR */}
        
                  {/* USER STATUS TITLE */}
                  <p className="user-status-title"><a className="bold" href="profile-timeline.html">Destroy Dex</a> posted a comment on your <a className="highlighted" href="profile-photos.html">photo</a></p>
                  {/* /USER STATUS TITLE */}
        
                  {/* USER STATUS TIMESTAMP */}
                  <p className="user-status-timestamp">31 minutes ago</p>
                  {/* /USER STATUS TIMESTAMP */}
        
                  {/* USER STATUS ICON */}
                  <div className="user-status-icon">
                    {/* ICON COMMENT */}
                    <svg className="icon-comment">
                      <use href="#svg-comment"></use>
                    </svg>
                    {/* /ICON COMMENT */}
                  </div>
                  {/* /USER STATUS ICON */}
                </div>
                {/* /USER STATUS */}
              </div>
              {/* /DROPDOWN BOX LIST ITEM */}
        
              {/* DROPDOWN BOX LIST ITEM */}
              <div className="dropdown-box-list-item">
                {/* USER STATUS */}
                <div className="user-status notification">
                  {/* USER STATUS AVATAR */}
                  <a className="user-status-avatar" href="profile-timeline.html">
                    {/* USER AVATAR */}
                    <div className="user-avatar small no-outline">
                      {/* USER AVATAR CONTENT */}
                      <div className="user-avatar-content">
                        {/* HEXAGON */}
                        <div className="hexagon-image-30-32" data-src="img/avatar/10.jpg"></div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR CONTENT */}
                  
                      {/* USER AVATAR PROGRESS */}
                      <div className="user-avatar-progress">
                        {/* HEXAGON */}
                        <div className="hexagon-progress-40-44"></div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR PROGRESS */}
                  
                      {/* USER AVATAR PROGRESS BORDER */}
                      <div className="user-avatar-progress-border">
                        {/* HEXAGON */}
                        <div className="hexagon-border-40-44"></div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR PROGRESS BORDER */}
                  
                      {/* USER AVATAR BADGE */}
                      <div className="user-avatar-badge">
                        {/* USER AVATAR BADGE BORDER */}
                        <div className="user-avatar-badge-border">
                          {/* HEXAGON */}
                          <div className="hexagon-22-24"></div>
                          {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR BADGE BORDER */}
                  
                        {/* USER AVATAR BADGE CONTENT */}
                        <div className="user-avatar-badge-content">
                          {/* HEXAGON */}
                          <div className="hexagon-dark-16-18"></div>
                          {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR BADGE CONTENT */}
                  
                        {/* USER AVATAR BADGE TEXT */}
                        <p className="user-avatar-badge-text">5</p>
                        {/* /USER AVATAR BADGE TEXT */}
                      </div>
                      {/* /USER AVATAR BADGE */}
                    </div>
                    {/* /USER AVATAR */}
                  </a>
                  {/* /USER STATUS AVATAR */}
        
                  {/* USER STATUS TITLE */}
                  <p className="user-status-title"><a className="bold" href="profile-timeline.html">The Green Goo</a> left a love <img className="reaction" src="img/reaction/love.png" alt="reaction-love"/> reaction on your <a className="highlighted" href="profile-timeline.html">status update</a></p>
                  {/* /USER STATUS TITLE */}
        
                  {/* USER STATUS TIMESTAMP */}
                  <p className="user-status-timestamp">2 hours ago</p>
                  {/* /USER STATUS TIMESTAMP */}
        
                  {/* USER STATUS ICON */}
                  <div className="user-status-icon">
                    {/* ICON THUMBS UP */}
                    <svg className="icon-thumbs-up">
                      <use href="#svg-thumbs-up"></use>
                    </svg>
                    {/* /ICON THUMBS UP */}
                  </div>
                  {/* /USER STATUS ICON */}
                </div>
                {/* /USER STATUS */}
              </div>
              {/* /DROPDOWN BOX LIST ITEM */}
        
              {/* DROPDOWN BOX LIST ITEM */}
              <div className="dropdown-box-list-item">
                {/* USER STATUS */}
                <div className="user-status notification">
                  {/* USER STATUS AVATAR */}
                  <a className="user-status-avatar" href="profile-timeline.html">
                    {/* USER AVATAR */}
                    <div className="user-avatar small no-outline">
                      {/* USER AVATAR CONTENT */}
                      <div className="user-avatar-content">
                        {/* HEXAGON */}
                        <div className="hexagon-image-30-32" data-src="img/avatar/05.jpg"></div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR CONTENT */}
                  
                      {/* USER AVATAR PROGRESS */}
                      <div className="user-avatar-progress">
                        {/* HEXAGON */}
                        <div className="hexagon-progress-40-44"></div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR PROGRESS */}
                  
                      {/* USER AVATAR PROGRESS BORDER */}
                      <div className="user-avatar-progress-border">
                        {/* HEXAGON */}
                        <div className="hexagon-border-40-44"></div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR PROGRESS BORDER */}
                  
                      {/* USER AVATAR BADGE */}
                      <div className="user-avatar-badge">
                        {/* USER AVATAR BADGE BORDER */}
                        <div className="user-avatar-badge-border">
                          {/* HEXAGON */}
                          <div className="hexagon-22-24"></div>
                          {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR BADGE BORDER */}
                  
                        {/* USER AVATAR BADGE CONTENT */}
                        <div className="user-avatar-badge-content">
                          {/* HEXAGON */}
                          <div className="hexagon-dark-16-18"></div>
                          {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR BADGE CONTENT */}
                  
                        {/* USER AVATAR BADGE TEXT */}
                        <p className="user-avatar-badge-text">12</p>
                        {/* /USER AVATAR BADGE TEXT */}
                      </div>
                      {/* /USER AVATAR BADGE */}
                    </div>
                    {/* /USER AVATAR */}
                  </a>
                  {/* /USER STATUS AVATAR */}
        
                  {/* USER STATUS TITLE */}
                  <p className="user-status-title"><a className="bold" href="profile-timeline.html">Neko Bebop</a> posted a comment on your <a className="highlighted" href="profile-timeline.html">status update</a></p>
                  {/* /USER STATUS TITLE */}
        
                  {/* USER STATUS TIMESTAMP */}
                  <p className="user-status-timestamp">3 hours ago</p>
                  {/* /USER STATUS TIMESTAMP */}
        
                  {/* USER STATUS ICON */}
                  <div className="user-status-icon">
                    {/* ICON COMMENT */}
                    <svg className="icon-comment">
                      <use href="#svg-comment"></use>
                    </svg>
                    {/* /ICON COMMENT */}
                  </div>
                  {/* /USER STATUS ICON */}
                </div>
                {/* /USER STATUS */}
              </div>
              {/* /DROPDOWN BOX LIST ITEM */}
            </div>
            {/* /DROPDOWN BOX LIST */}
        
            {/* DROPDOWN BOX BUTTON */}
            <a className="dropdown-box-button secondary" href="hub-profile-notifications.html">View all Notifications</a>
            {/* /DROPDOWN BOX BUTTON */}
          </div>
          
          {/* /DROPDOWN BOX*/}
        </div>
        {/* /ACTION LIST ITEM WRAP*/}
      </div>
     {/* /ACTION LIST */}

     {/* ACTION ITEM WRAP */}
      <div className="action-item-wrap">
       {/* ACTION ITEM */}
        <div className="action-item dark header-settings-dropdown-trigger">
         {/* ACTION ITEM ICON */}
         <div className="setting">
         <FontAwesomeIcon className="svg" icon={ faGear} />
            </div>
         {/* /ACTION ITEM ICON */}
        </div>
       {/* /ACTION ITEM */}

       {/* DROPDOWN NAVIGATION */}
       {/* need next dropdown-navigation header-settings-dropdown */}
        
       {/* /DROPDOWN NAVIGATION */}
      </div>
     {/* /ACTION ITEM WRAP */}
    </div>
   {/* /HEADER ACTIONS */}

 {/* /HEADER */}
      
    </div>
    );
};

export default HeaderCaseStudy;