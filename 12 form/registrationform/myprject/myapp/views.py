from django.shortcuts import render

# Create your views here.


def form(r):
    return render(r,'form.html')

def data(r):
    print(r.GET) #all
    print(r.POST) #all
    print(r.FILES) #binary content
    print(r.method) #method
    # n=r.POST.get('name')
    # e=r.POST.get('email')
    # tel1=r.POST.get('tel1')
    # tel2=r.POST.get('tel2')
    # q = r.POST.getlist('qualifiaction')
    # city=r.POST.get('city')
    # g=r.POST.get('gender')
    # print(n,e,tel1,tel2,q,city,g,sep=',')
    # pic=r.FILES.get('image')
    # print(pic)
    # print(type(n),type(e),type(tel1),type(tel2),type(q),type(city),type(g),type(pic),sep=" ")


    # files ke files 
    # get me get wali
    


    



# muti valuedict me file 
# queery me a sab
# django me small post and capital dno
# form se post and req me POST
# csrf farzi se bacahta he
# input se sab string me 
#get ki vajah se url me dstat aa rha he and post me
# json jaise me print kaise

    