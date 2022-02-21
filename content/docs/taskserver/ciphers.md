---
title: "Taskwarrior - Taskserver Ciphers"
---


# Cipher Selection

By default, Taskserver [1.0.0] uses the GnuTLS cipher
set:

    PERFORMANCE:%SERVER_PRECEDENCE

Taskserver [1.1.0] and later uses this GnuTLS cipher set:

    NORMAL

Taskwarrior uses:

    NORMAL

You may wish to override these ciphers with a set that satisfies your security
needs. A vigilant Taskserver administrator may wish to respond to news of
various cipher weaknesses. For example, a more secure set would be to use only
TLS 1.2 and these ciphers:

    ECDHE-ECDSA-AES256-GCM-SHA384

If AES is later compromised, perhaps use:

    DHE-RSA-CAMELLIA256-SHA

Should elliptical curves later be compromised, perhaps use:

    DHE-RSA-AES256-SHA

You should be aware that this is a dynamic and volatile subject, and for the
best security you need to be aware of vulnerabilities.


## Installed Ciphers

Use this command to see a list of installed ciphers, and run it on both the
cilent and server machine to confirm that there is overlapping support between
client and server.

    $ gnutls-cli --list
    Cipher suites:
    TLS_RSA_NULL_MD5                                    0x00, 0x01  SSL3.0
    TLS_RSA_NULL_SHA1                                   0x00, 0x02  SSL3.0
    TLS_RSA_NULL_SHA256                                 0x00, 0x3b  TLS1.0
    TLS_RSA_ARCFOUR_128_SHA1                            0x00, 0x05  SSL3.0
    TLS_RSA_ARCFOUR_128_MD5                             0x00, 0x04  SSL3.0
    TLS_RSA_3DES_EDE_CBC_SHA1                           0x00, 0x0a  SSL3.0
    TLS_RSA_AES_128_CBC_SHA1                            0x00, 0x2f  SSL3.0
    TLS_RSA_AES_256_CBC_SHA1                            0x00, 0x35  SSL3.0
    TLS_RSA_CAMELLIA_128_CBC_SHA256                     0x00, 0xba  TLS1.0
    TLS_RSA_CAMELLIA_256_CBC_SHA256                     0x00, 0xc0  TLS1.0
    TLS_RSA_CAMELLIA_128_CBC_SHA1                       0x00, 0x41  SSL3.0
    TLS_RSA_CAMELLIA_256_CBC_SHA1                       0x00, 0x84  SSL3.0
    TLS_RSA_AES_128_CBC_SHA256                          0x00, 0x3c  TLS1.0
    TLS_RSA_AES_256_CBC_SHA256                          0x00, 0x3d  TLS1.0
    TLS_RSA_AES_128_GCM_SHA256                          0x00, 0x9c  TLS1.2
    TLS_RSA_AES_256_GCM_SHA384                          0x00, 0x9d  TLS1.2
    TLS_RSA_CAMELLIA_128_GCM_SHA256                     0xc0, 0x7a  TLS1.2
    TLS_RSA_CAMELLIA_256_GCM_SHA384                     0xc0, 0x7b  TLS1.2
    TLS_RSA_SALSA20_256_SHA1                            0xe4, 0x11  SSL3.0
    TLS_RSA_SALSA20_256_UMAC96                          0xe4, 0x31  SSL3.0
    TLS_RSA_ESTREAM_SALSA20_256_SHA1                    0xe4, 0x10  SSL3.0
    TLS_RSA_ESTREAM_SALSA20_256_UMAC96                  0xe4, 0x30  SSL3.0
    TLS_DHE_DSS_ARCFOUR_128_SHA1                        0x00, 0x66  SSL3.0
    TLS_DHE_DSS_3DES_EDE_CBC_SHA1                       0x00, 0x13  SSL3.0
    TLS_DHE_DSS_AES_128_CBC_SHA1                        0x00, 0x32  SSL3.0
    TLS_DHE_DSS_AES_256_CBC_SHA1                        0x00, 0x38  SSL3.0
    TLS_DHE_DSS_CAMELLIA_128_CBC_SHA256                 0x00, 0xbd  TLS1.0
    TLS_DHE_DSS_CAMELLIA_256_CBC_SHA256                 0x00, 0xc3  TLS1.0
    TLS_DHE_DSS_CAMELLIA_128_CBC_SHA1                   0x00, 0x44  SSL3.0
    TLS_DHE_DSS_CAMELLIA_256_CBC_SHA1                   0x00, 0x87  SSL3.0
    TLS_DHE_DSS_AES_128_CBC_SHA256                      0x00, 0x40  TLS1.0
    TLS_DHE_DSS_AES_256_CBC_SHA256                      0x00, 0x6a  TLS1.0
    TLS_DHE_DSS_AES_128_GCM_SHA256                      0x00, 0xa2  TLS1.2
    TLS_DHE_DSS_AES_256_GCM_SHA384                      0x00, 0xa3  TLS1.2
    TLS_DHE_DSS_CAMELLIA_128_GCM_SHA256                 0xc0, 0x80  TLS1.2
    TLS_DHE_DSS_CAMELLIA_256_GCM_SHA384                 0xc0, 0x81  TLS1.2
    TLS_DHE_RSA_3DES_EDE_CBC_SHA1                       0x00, 0x16  SSL3.0
    TLS_DHE_RSA_AES_128_CBC_SHA1                        0x00, 0x33  SSL3.0
    TLS_DHE_RSA_AES_256_CBC_SHA1                        0x00, 0x39  SSL3.0
    TLS_DHE_RSA_CAMELLIA_128_CBC_SHA256                 0x00, 0xbe  TLS1.0
    TLS_DHE_RSA_CAMELLIA_256_CBC_SHA256                 0x00, 0xc4  TLS1.0
    TLS_DHE_RSA_CAMELLIA_128_CBC_SHA1                   0x00, 0x45  SSL3.0
    TLS_DHE_RSA_CAMELLIA_256_CBC_SHA1                   0x00, 0x88  SSL3.0
    TLS_DHE_RSA_AES_128_CBC_SHA256                      0x00, 0x67  TLS1.0
    TLS_DHE_RSA_AES_256_CBC_SHA256                      0x00, 0x6b  TLS1.0
    TLS_DHE_RSA_AES_128_GCM_SHA256                      0x00, 0x9e  TLS1.2
    TLS_DHE_RSA_AES_256_GCM_SHA384                      0x00, 0x9f  TLS1.2
    TLS_DHE_RSA_CAMELLIA_128_GCM_SHA256                 0xc0, 0x7c  TLS1.2
    TLS_DHE_RSA_CAMELLIA_256_GCM_SHA384                 0xc0, 0x7d  TLS1.2
    TLS_ECDHE_RSA_NULL_SHA1                             0xc0, 0x10  SSL3.0
    TLS_ECDHE_RSA_3DES_EDE_CBC_SHA1                     0xc0, 0x12  SSL3.0
    TLS_ECDHE_RSA_AES_128_CBC_SHA1                      0xc0, 0x13  SSL3.0
    TLS_ECDHE_RSA_AES_256_CBC_SHA1                      0xc0, 0x14  SSL3.0
    TLS_ECDHE_RSA_AES_256_CBC_SHA384                    0xc0, 0x28  TLS1.0
    TLS_ECDHE_RSA_ARCFOUR_128_SHA1                      0xc0, 0x11  SSL3.0
    TLS_ECDHE_RSA_CAMELLIA_128_CBC_SHA256               0xc0, 0x76  TLS1.0
    TLS_ECDHE_RSA_CAMELLIA_256_CBC_SHA384               0xc0, 0x77  TLS1.0
    TLS_ECDHE_ECDSA_NULL_SHA1                           0xc0, 0x06  SSL3.0
    TLS_ECDHE_ECDSA_3DES_EDE_CBC_SHA1                   0xc0, 0x08  SSL3.0
    TLS_ECDHE_ECDSA_AES_128_CBC_SHA1                    0xc0, 0x09  SSL3.0
    TLS_ECDHE_ECDSA_AES_256_CBC_SHA1                    0xc0, 0x0a  SSL3.0
    TLS_ECDHE_ECDSA_ARCFOUR_128_SHA1                    0xc0, 0x07  SSL3.0
    TLS_ECDHE_ECDSA_CAMELLIA_128_CBC_SHA256             0xc0, 0x72  TLS1.0
    TLS_ECDHE_ECDSA_CAMELLIA_256_CBC_SHA384             0xc0, 0x73  TLS1.0
    TLS_ECDHE_ECDSA_AES_128_CBC_SHA256                  0xc0, 0x23  TLS1.0
    TLS_ECDHE_RSA_AES_128_CBC_SHA256                    0xc0, 0x27  TLS1.0
    TLS_ECDHE_ECDSA_CAMELLIA_128_GCM_SHA256             0xc0, 0x86  TLS1.2
    TLS_ECDHE_ECDSA_CAMELLIA_256_GCM_SHA384             0xc0, 0x87  TLS1.2
    TLS_ECDHE_ECDSA_AES_128_GCM_SHA256                  0xc0, 0x2b  TLS1.2
    TLS_ECDHE_ECDSA_AES_256_GCM_SHA384                  0xc0, 0x2c  TLS1.2
    TLS_ECDHE_RSA_AES_128_GCM_SHA256                    0xc0, 0x2f  TLS1.2
    TLS_ECDHE_RSA_AES_256_GCM_SHA384                    0xc0, 0x30  TLS1.2
    TLS_ECDHE_ECDSA_AES_256_CBC_SHA384                  0xc0, 0x24  TLS1.0
    TLS_ECDHE_RSA_CAMELLIA_128_GCM_SHA256               0xc0, 0x8a  TLS1.2
    TLS_ECDHE_RSA_CAMELLIA_256_GCM_SHA384               0xc0, 0x8b  TLS1.2
    TLS_ECDHE_RSA_SALSA20_256_SHA1                      0xe4, 0x13  SSL3.0
    TLS_ECDHE_RSA_SALSA20_256_UMAC96                    0xe4, 0x33  SSL3.0
    TLS_ECDHE_ECDSA_SALSA20_256_SHA1                    0xe4, 0x15  SSL3.0
    TLS_ECDHE_ECDSA_SALSA20_256_UMAC96                  0xe4, 0x35  SSL3.0
    TLS_ECDHE_RSA_ESTREAM_SALSA20_256_SHA1              0xe4, 0x12  SSL3.0
    TLS_ECDHE_RSA_ESTREAM_SALSA20_256_UMAC96            0xe4, 0x32  SSL3.0
    TLS_ECDHE_ECDSA_ESTREAM_SALSA20_256_SHA1            0xe4, 0x14  SSL3.0
    TLS_ECDHE_ECDSA_ESTREAM_SALSA20_256_UMAC96          0xe4, 0x34  SSL3.0
    TLS_ECDHE_PSK_3DES_EDE_CBC_SHA1                     0xc0, 0x34  SSL3.0
    TLS_ECDHE_PSK_AES_128_CBC_SHA1                      0xc0, 0x35  SSL3.0
    TLS_ECDHE_PSK_AES_256_CBC_SHA1                      0xc0, 0x36  SSL3.0
    TLS_ECDHE_PSK_AES_128_CBC_SHA256                    0xc0, 0x37  TLS1.0
    TLS_ECDHE_PSK_AES_256_CBC_SHA384                    0xc0, 0x38  TLS1.0
    TLS_ECDHE_PSK_ARCFOUR_128_SHA1                      0xc0, 0x33  SSL3.0
    TLS_ECDHE_PSK_NULL_SHA256                           0xc0, 0x3a  TLS1.0
    TLS_ECDHE_PSK_NULL_SHA384                           0xc0, 0x3b  TLS1.0
    TLS_ECDHE_PSK_CAMELLIA_128_CBC_SHA256               0xc0, 0x9a  TLS1.0
    TLS_ECDHE_PSK_CAMELLIA_256_CBC_SHA384               0xc0, 0x9b  TLS1.0
    TLS_ECDHE_PSK_SALSA20_256_SHA1                      0xe4, 0x19  SSL3.0
    TLS_ECDHE_PSK_SALSA20_256_UMAC96                    0xe4, 0x39  SSL3.0
    TLS_ECDHE_PSK_ESTREAM_SALSA20_256_SHA1              0xe4, 0x18  SSL3.0
    TLS_ECDHE_PSK_ESTREAM_SALSA20_256_UMAC96            0xe4, 0x38  SSL3.0
    TLS_PSK_ARCFOUR_128_SHA1                            0x00, 0x8a  SSL3.0
    TLS_PSK_3DES_EDE_CBC_SHA1                           0x00, 0x8b  SSL3.0
    TLS_PSK_AES_128_CBC_SHA1                            0x00, 0x8c  SSL3.0
    TLS_PSK_AES_256_CBC_SHA1                            0x00, 0x8d  SSL3.0
    TLS_PSK_AES_128_CBC_SHA256                          0x00, 0xae  TLS1.0
    TLS_PSK_AES_256_GCM_SHA384                          0x00, 0xa9  TLS1.2
    TLS_PSK_CAMELLIA_128_GCM_SHA256                     0xc0, 0x8e  TLS1.2
    TLS_PSK_CAMELLIA_256_GCM_SHA384                     0xc0, 0x8f  TLS1.2
    TLS_PSK_AES_128_GCM_SHA256                          0x00, 0xa8  TLS1.2
    TLS_PSK_NULL_SHA256                                 0x00, 0xb0  TLS1.0
    TLS_PSK_CAMELLIA_128_CBC_SHA256                     0xc0, 0x94  TLS1.0
    TLS_PSK_CAMELLIA_256_CBC_SHA384                     0xc0, 0x95  TLS1.0
    TLS_PSK_SALSA20_256_SHA1                            0xe4, 0x17  SSL3.0
    TLS_PSK_SALSA20_256_UMAC96                          0xe4, 0x37  SSL3.0
    TLS_PSK_ESTREAM_SALSA20_256_SHA1                    0xe4, 0x16  SSL3.0
    TLS_PSK_ESTREAM_SALSA20_256_UMAC96                  0xe4, 0x36  SSL3.0
    TLS_PSK_AES_256_CBC_SHA384                          0x00, 0xaf  TLS1.0
    TLS_PSK_NULL_SHA384                                 0x00, 0xb1  TLS1.0
    TLS_RSA_PSK_ARCFOUR_128_SHA1                        0x00, 0x92  SSL3.0
    TLS_RSA_PSK_3DES_EDE_CBC_SHA1                       0x00, 0x93  SSL3.0
    TLS_RSA_PSK_AES_128_CBC_SHA1                        0x00, 0x94  SSL3.0
    TLS_RSA_PSK_AES_256_CBC_SHA1                        0x00, 0x95  SSL3.0
    TLS_RSA_PSK_CAMELLIA_128_GCM_SHA256                 0xc0, 0x92  TLS1.2
    TLS_RSA_PSK_CAMELLIA_256_GCM_SHA384                 0xc0, 0x93  TLS1.2
    TLS_RSA_PSK_AES_128_GCM_SHA256                      0x00, 0xac  TLS1.2
    TLS_RSA_PSK_AES_128_CBC_SHA256                      0x00, 0xb6  TLS1.0
    TLS_RSA_PSK_NULL_SHA256                             0x00, 0xb8  TLS1.0
    TLS_RSA_PSK_AES_256_GCM_SHA384                      0x00, 0xad  TLS1.2
    TLS_RSA_PSK_AES_256_CBC_SHA384                      0x00, 0xb7  TLS1.0
    TLS_RSA_PSK_NULL_SHA384                             0x00, 0xb9  TLS1.0
    TLS_RSA_PSK_CAMELLIA_128_CBC_SHA256                 0xc0, 0x98  TLS1.0
    TLS_RSA_PSK_CAMELLIA_256_CBC_SHA384                 0xc0, 0x99  TLS1.0
    TLS_DHE_PSK_ARCFOUR_128_SHA1                        0x00, 0x8e  SSL3.0
    TLS_DHE_PSK_3DES_EDE_CBC_SHA1                       0x00, 0x8f  SSL3.0
    TLS_DHE_PSK_AES_128_CBC_SHA1                        0x00, 0x90  SSL3.0
    TLS_DHE_PSK_AES_256_CBC_SHA1                        0x00, 0x91  SSL3.0
    TLS_DHE_PSK_AES_128_CBC_SHA256                      0x00, 0xb2  TLS1.0
    TLS_DHE_PSK_AES_128_GCM_SHA256                      0x00, 0xaa  TLS1.2
    TLS_DHE_PSK_NULL_SHA256                             0x00, 0xb4  TLS1.0
    TLS_DHE_PSK_NULL_SHA384                             0x00, 0xb5  TLS1.0
    TLS_DHE_PSK_AES_256_CBC_SHA384                      0x00, 0xb3  TLS1.0
    TLS_DHE_PSK_AES_256_GCM_SHA384                      0x00, 0xab  TLS1.2
    TLS_DHE_PSK_CAMELLIA_128_CBC_SHA256                 0xc0, 0x96  TLS1.0
    TLS_DHE_PSK_CAMELLIA_256_CBC_SHA384                 0xc0, 0x97  TLS1.0
    TLS_DHE_PSK_CAMELLIA_128_GCM_SHA256                 0xc0, 0x90  TLS1.2
    TLS_DHE_PSK_CAMELLIA_256_GCM_SHA384                 0xc0, 0x91  TLS1.2
    TLS_DH_ANON_ARCFOUR_128_MD5                         0x00, 0x18  SSL3.0
    TLS_DH_ANON_3DES_EDE_CBC_SHA1                       0x00, 0x1b  SSL3.0
    TLS_DH_ANON_AES_128_CBC_SHA1                        0x00, 0x34  SSL3.0
    TLS_DH_ANON_AES_256_CBC_SHA1                        0x00, 0x3a  SSL3.0
    TLS_DH_ANON_CAMELLIA_128_CBC_SHA256                 0x00, 0xbf  TLS1.0
    TLS_DH_ANON_CAMELLIA_256_CBC_SHA256                 0x00, 0xc5  TLS1.0
    TLS_DH_ANON_CAMELLIA_128_CBC_SHA1                   0x00, 0x46  SSL3.0
    TLS_DH_ANON_CAMELLIA_256_CBC_SHA1                   0x00, 0x89  SSL3.0
    TLS_DH_ANON_AES_128_CBC_SHA256                      0x00, 0x6c  TLS1.0
    TLS_DH_ANON_AES_256_CBC_SHA256                      0x00, 0x6d  TLS1.0
    TLS_DH_ANON_AES_128_GCM_SHA256                      0x00, 0xa6  TLS1.2
    TLS_DH_ANON_AES_256_GCM_SHA384                      0x00, 0xa7  TLS1.2
    TLS_DH_ANON_CAMELLIA_128_GCM_SHA256                 0xc0, 0x84  TLS1.2
    TLS_DH_ANON_CAMELLIA_256_GCM_SHA384                 0xc0, 0x85  TLS1.2
    TLS_ECDH_ANON_NULL_SHA1                             0xc0, 0x15  SSL3.0
    TLS_ECDH_ANON_3DES_EDE_CBC_SHA1                     0xc0, 0x17  SSL3.0
    TLS_ECDH_ANON_AES_128_CBC_SHA1                      0xc0, 0x18  SSL3.0
    TLS_ECDH_ANON_AES_256_CBC_SHA1                      0xc0, 0x19  SSL3.0
    TLS_ECDH_ANON_ARCFOUR_128_SHA1                      0xc0, 0x16  SSL3.0
    TLS_SRP_SHA_3DES_EDE_CBC_SHA1                       0xc0, 0x1a  SSL3.0
    TLS_SRP_SHA_AES_128_CBC_SHA1                        0xc0, 0x1d  SSL3.0
    TLS_SRP_SHA_AES_256_CBC_SHA1                        0xc0, 0x20  SSL3.0
    TLS_SRP_SHA_DSS_3DES_EDE_CBC_SHA1                   0xc0, 0x1c  SSL3.0
    TLS_SRP_SHA_RSA_3DES_EDE_CBC_SHA1                   0xc0, 0x1b  SSL3.0
    TLS_SRP_SHA_DSS_AES_128_CBC_SHA1                    0xc0, 0x1f  SSL3.0
    TLS_SRP_SHA_RSA_AES_128_CBC_SHA1                    0xc0, 0x1e  SSL3.0
    TLS_SRP_SHA_DSS_AES_256_CBC_SHA1                    0xc0, 0x22  SSL3.0
    TLS_SRP_SHA_RSA_AES_256_CBC_SHA1                    0xc0, 0x21  SSL3.0

    Certificate types: CTYPE-X.509, CTYPE-OPENPGP
    Protocols: VERS-SSL3.0, VERS-TLS1.0, VERS-TLS1.1, VERS-TLS1.2, VERS-DTLS0.9, VERS-DTLS1.0, VERS-DTLS1.2
    Ciphers: AES-256-CBC, AES-192-CBC, AES-128-CBC, AES-128-GCM, AES-256-GCM, ARCFOUR-128, ESTREAM-SALSA20-256, SALSA20-256, CAMELLIA-256-CBC, CAMELLIA-192-CBC, CAMELLIA-128-CBC, CAMELLIA-128-GCM, CAMELLIA-256-GCM, 3DES-CBC, DES-CBC, ARCFOUR-40, RC2-40
    MACs: SHA1, MD5, SHA256, SHA384, SHA512, SHA224, UMAC-96, UMAC-128, AEAD
    Digests: SHA1, MD5, SHA256, SHA384, SHA512, SHA224
    Key exchange algorithms: ANON-DH, ANON-ECDH, RSA, DHE-RSA, DHE-DSS, ECDHE-RSA, ECDHE-ECDSA, SRP-DSS, SRP-RSA, SRP, PSK, RSA-PSK, DHE-PSK, ECDHE-PSK
    Compression: COMP-DEFLATE, COMP-NULL
    Elliptic curves: CURVE-SECP192R1, CURVE-SECP224R1, CURVE-SECP256R1, CURVE-SECP384R1, CURVE-SECP521R1
    Public Key Systems: RSA, DSA, EC
    PK-signatures: SIGN-RSA-SHA1, SIGN-RSA-SHA1, SIGN-RSA-SHA224, SIGN-RSA-SHA256, SIGN-RSA-SHA384, SIGN-RSA-SHA512, SIGN-RSA-RMD160, SIGN-DSA-SHA1, SIGN-DSA-SHA1, SIGN-DSA-SHA224, SIGN-DSA-SHA256, SIGN-RSA-MD5, SIGN-RSA-MD5, SIGN-RSA-MD2, SIGN-ECDSA-SHA1, SIGN-ECDSA-SHA224, SIGN-ECDSA-SHA256, SIGN-ECDSA-SHA384, SIGN-ECDSA-SHA512

This is example output, and it changes with GnuTLS releases. Choose well.


## Configuration

Taskserver supports the `ciphers` configuration setting and Taskwarrior supports
`taskd.ciphers` as a means to override the default set.
