function faqChangeIcon (el, viewClass, hideClass, viewTitle, hideTitle ) {

	if ( el.className.search(viewClass) !== -1 )
	{
		el.className	= el.className.replace(viewClass, hideClass);
		el.title			= hideTitle;
	}
	else
	{
		el.className	= el.className.replace(hideClass, viewClass)
		el.title			= viewTitle;
	}

}

function checkInputValue (el, val) {

	if (el.value == val)
		el.value = "";
	else if (el.value == "")
		el.value = val;

}

function checkFormValue (val) {

	if ( ftText.value == val )
	{
		ftText.focus();
		return false;
	}

	return true;

}

function slideshowHover (el, hover) {

	if ( hover == true )
	{
		if ( RubicusFrontendIns.isSlideshowMode() )
			el.className = 'enableControl hoverButton slideshowRunningHover';
		else
			el.className = 'enableControl hoverButton';
	}
	if ( hover == false )
	{
		if ( RubicusFrontendIns.isSlideshowMode() )
			el.className = 'enableControl slideshowRunning';
		else
			el.className = 'enableControl';
	}

}
