function FindProxyForURL(url, host) {
    if (
        dnsDomainIs(host, "devhub.onprem.kpm-ritm.ru") ||
        dnsDomainIs(host, "gitlab.kpm-ritm.ru") ||
        dnsDomainIs(host, "grafana.svc.onprem.kpm-ritm.ru") ||
        dnsDomainIs(host, "qa.lk.onprem.kpm-ritm.ru") ||
        dnsDomainIs(host, "dev.lk.onprem.kpm-ritm.ru") ||
        dnsDomainIs(host, "gitlab.lk.onprem.kpm-ritm.ru") ||
        shExpMatch(host, "10.90.*") ||
        shExpMatch(host, "10.128.*") ||
        shExpMatch(host, "10.129.*") ||
        shExpMatch(host, "10.130.*") ||
        shExpMatch(host, "10.10.*") ||
        shExpMatch(host, "192.168.88.*") ||
        shExpMatch(host, "172.16.15.*")
    ) {
        return "DIRECT";
    }
    return "PROXY 127.0.0.1:2080";
}
