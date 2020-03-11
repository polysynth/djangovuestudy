from django.shortcuts import render
import json
from django.views.generic import View

# Create your views here.
class DashboardView(View):

    def home(request):

        payload = {"arg": json.dumps({
                                        "someKey": "HELLO WORLD!",
                                        "foo": "bar", 
                                        "bu": "cu!", 
                                        "lorem":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}) 
            }
        
        return render(request, 'index.html', payload)





