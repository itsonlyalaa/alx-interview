#!/usr/bin/python3
"""UTF-8 Validation module"""


def validUTF8(data):
    """determines if a given data set represents a valid UTF-8 encoding"""
    try:
        masked_data = [n & 255 for n in data]
        bytes(masked_data).decode("UTF-8")
        return True
    except Exception:
        return False
