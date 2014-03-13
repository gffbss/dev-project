from django.shortcuts import render


def angular(request):
    return render(request, "base-angular.html")